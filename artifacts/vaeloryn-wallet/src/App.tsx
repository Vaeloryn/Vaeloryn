import { type FormEvent, type ReactNode, useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  WagmiProvider,
  useAccount,
  useBalance,
  useConnect,
  useDisconnect,
  usePublicClient,
  useSwitchChain,
  useWalletClient,
  useChainId,
} from 'wagmi';
import { QRCodeSVG } from 'qrcode.react';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import {
  Activity as ActivityIcon,
  ArrowDownLeft,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  CircleAlert,
  Clipboard,
  Compass,
  Copy,
  ExternalLink,
  KeyRound,
  LockKeyhole,
  ScanLine,
  Send,
  ShieldCheck,
  WalletCards,
  X,
} from 'lucide-react';
import {
  Link,
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';
import { vaeloIsConfigured, walletConfig, type ActivityEntry, type ActivityStatus, type ConnectionMode } from './config';
import { readActivity, upsertActivity, writeActivity } from './lib/activity';
import { formatEthBalance, formatTokenBalance, parseEthAmount, parseTokenAmount, shortAddress, validateRecipient } from './lib/format';
import { readVaeloBalance, sendEthOnBaseSepolia, sendVaeloOnBaseSepolia, wagmiConfig } from './lib/wallet';

const queryClient = new QueryClient();

const previewAddress = '0x000000000000000000000000000000000000dEaD';
const emptyActivity: ActivityEntry[] = [];

function formatDate(value: string) {
  return new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }).format(new Date(value));
}

function statusLabel(status: ActivityStatus) {
  return status === 'preview' ? 'Preview only' : status[0].toUpperCase() + status.slice(1);
}

function useWalletState() {
  const [mode, setMode] = useState<ConnectionMode>('disconnected');
  const [address, setAddress] = useState('');
  const [chainId, setChainId] = useState<number>(walletConfig.chainId);
  const [ethBalance, setEthBalance] = useState('0.00');
  const [activity, setActivity] = useState<ActivityEntry[]>(emptyActivity);
  const [connectError, setConnectError] = useState('');

  const { address: connectedAddress, isConnected } = useAccount();
  const activeChainId = useChainId();
  const { connectors, connectAsync } = useConnect();
  const { disconnect: disconnectWallet } = useDisconnect();
  const { switchChainAsync } = useSwitchChain();
  const publicClient = usePublicClient({ chainId: walletConfig.chainId });
  const { data: balance } = useBalance({
    address: connectedAddress,
    chainId: walletConfig.chainId,
    query: {
      enabled: Boolean(connectedAddress && activeChainId === walletConfig.chainId),
    },
  });
  const [vaeloBalance, setVaeloBalance] = useState<bigint>();

  useEffect(() => {
    if (isConnected && connectedAddress) {
      setMode('connected');
      setAddress(connectedAddress);
      setChainId(activeChainId ?? walletConfig.chainId);
      setConnectError('');
    } else if (mode === 'connected') {
      setMode('disconnected');
      setAddress('');
      setChainId(walletConfig.chainId);
      setEthBalance('0.00');
    }
  }, [activeChainId, connectedAddress, isConnected, mode]);

  useEffect(() => {
    if (mode === 'preview') {
      setEthBalance('0.00');
      return;
    }
    setEthBalance(
      activeChainId === walletConfig.chainId ? formatEthBalance(balance?.value) : '—',
    );
  }, [activeChainId, balance?.value, mode]);

  useEffect(() => {
    const storageAddress = mode === 'preview' ? previewAddress : address || null;
    setActivity(storageAddress ? readActivity(storageAddress) : []);
  }, [address, mode]);

  useEffect(() => {
    let cancelled = false;
    if (!vaeloIsConfigured || !connectedAddress || activeChainId !== walletConfig.chainId || !publicClient) {
      setVaeloBalance(undefined);
      return () => { cancelled = true; };
    }
    void readVaeloBalance({
      publicClient,
      contractAddress: walletConfig.vaeloAddress,
      address: connectedAddress,
    }).then((nextBalance) => {
      if (!cancelled) setVaeloBalance(nextBalance);
    }).catch(() => {
      if (!cancelled) setVaeloBalance(undefined);
    });
    return () => { cancelled = true; };
  }, [activeChainId, connectedAddress, publicClient]);

  const connectInjected = async () => {
    setConnectError('');
    const connector = connectors[0];
    if (!connector) {
      setConnectError('No injected wallet detected. Try the iPhone preview instead.');
      return;
    }
    try {
      await connectAsync({ connector });
    } catch (error) {
      setConnectError(error instanceof Error ? error.message : 'Connection was cancelled or unavailable.');
    }
  };

  const usePreview = () => {
    setAddress(previewAddress);
    setMode('preview');
    setChainId(walletConfig.chainId);
    setEthBalance('0.00');
    setConnectError('');
  };

  const disconnect = () => {
    if (isConnected) disconnectWallet();
    setMode('disconnected');
    setAddress('');
    setChainId(walletConfig.chainId);
    setEthBalance('0.00');
    setConnectError('');
  };

  const addActivity = (entry: ActivityEntry) => {
    const storageAddress = mode === 'preview' ? previewAddress : address || null;
    setActivity(upsertActivity(storageAddress, entry));
  };

  const updateActivity = (id: string, patch: Partial<ActivityEntry>) => {
    const storageAddress = mode === 'preview' ? previewAddress : address || null;
    setActivity((current) => {
      const next = current.map((entry) => entry.id === id ? { ...entry, ...patch } : entry);
      writeActivity(storageAddress, next);
      return next;
    });
  };

  const switchToBaseSepolia = async () => {
    try {
      await switchChainAsync({ chainId: walletConfig.chainId });
      setConnectError('');
    } catch {
      setConnectError('Switch to Base Sepolia was cancelled.');
    }
  };

  return {
    mode, address, chainId, ethBalance, activity, connectError,
    vaeloBalance: mode === 'connected' && activeChainId === walletConfig.chainId
      ? formatTokenBalance(vaeloBalance, walletConfig.vaeloDecimals)
      : '0.00',
    connectInjected, usePreview, disconnect, addActivity, updateActivity,
    switchToBaseSepolia,
  };
}

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`brand-mark ${compact ? 'brand-mark-compact' : ''}`} data-testid="brand-vaeloryn">
      <div className="brand-v font-display">V</div>
      <div>
        <div className="brand-word font-display">VAELORYN</div>
        {!compact && <div className="brand-caption">Institutional wallet</div>}
      </div>
    </div>
  );
}

function TestnetStatus() {
  return (
    <div className="status-pill inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.18em]" data-testid="status-testnet">
      <span className="h-1.5 w-1.5 rounded-full bg-[#E0C15A]" style={{ animation: 'vaeloryn-pulse 2.4s ease-in-out infinite' }} />
      Testnet / not live
    </div>
  );
}

function Shell({ children, mode, address, onConnect, onPreview, onDisconnect }: {
  children: ReactNode;
  mode: ConnectionMode;
  address: string;
  onConnect: () => void;
  onPreview: () => void;
  onDisconnect: () => void;
}) {
  const [location] = useLocation();
  const navItems = [
    { href: '/', label: 'Wallet', icon: WalletCards, testId: 'link-wallet' },
    { href: '/activity', label: 'Activity', icon: ActivityIcon, testId: 'link-activity' },
    { href: '/discover', label: 'Discover', icon: Compass, testId: 'link-discover' },
  ];
  return (
    <div className="wallet-app text-[#F4F1EA]">
      <div className="app-frame mx-auto flex min-h-[100dvh] max-w-[1440px]">
        <aside className="hidden w-[236px] shrink-0 flex-col border-r border-[#C9A227]/15 px-6 py-8 md:flex">
          <BrandMark />
          <div className="mt-14 space-y-1">
            <div className="mb-4 px-3 text-[9px] font-semibold uppercase tracking-[.24em] text-[#9AA0AD]">Workspace</div>
            {navItems.map(({ href, label, icon: Icon, testId }) => (
              <Link key={href} href={href} className={`focus-ring flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition-colors ${location === href ? 'bg-[#C9A227]/10 text-[#E0C15A]' : 'text-[#9AA0AD] hover:bg-[#10151f] hover:text-[#F4F1EA]'}`} data-testid={testId}>
                <Icon size={17} strokeWidth={1.5} />
                {label}
              </Link>
            ))}
          </div>
          <div className="mt-auto">
            <div className="gold-rule mb-5" />
            <div className="flex items-start gap-2 text-[11px] leading-5 text-[#9AA0AD]">
              <ShieldCheck size={15} className="mt-0.5 shrink-0 text-[#C9A227]" strokeWidth={1.5} />
              <span>Base Sepolia<br /><span className="text-[#F4F1EA]/65">Chain ID {walletConfig.chainId}</span></span>
            </div>
          </div>
        </aside>
        <div className="flex min-w-0 flex-1 flex-col">
          <header className="flex items-center justify-between border-b border-[#C9A227]/15 px-5 py-5 md:px-12 md:py-8">
            <div className="md:hidden"><BrandMark compact /></div>
            <div className="hidden items-center gap-2 text-[11px] text-[#9AA0AD] md:flex">
              <span className="text-[#F4F1EA]">VAELORYN WALLET</span><span className="text-[#C9A227]/60">/</span><span>BASE SEPOLIA</span>
            </div>
            <div className="flex items-center gap-3">
              <TestnetStatus />
              {mode === 'disconnected' ? (
                <button className="ghost-button focus-ring hidden rounded-md px-3 py-2 text-[11px] font-semibold md:block" onClick={onConnect} data-testid="button-header-connect">Connect</button>
              ) : (
                <button className="hidden items-center gap-2 rounded-md border border-[#C9A227]/20 bg-[#10151f] px-3 py-2 text-[11px] text-[#F4F1EA] md:flex" onClick={onDisconnect} data-testid="button-header-disconnect">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#7EBD9A]" />{shortAddress(address)}<X size={13} className="text-[#9AA0AD]" />
                </button>
              )}
            </div>
          </header>
          <main className="wallet-main w-full flex-1 px-5 pb-28 pt-8 md:px-12 md:pb-12 md:pt-12">{children}</main>
          <nav className="fixed bottom-0 left-0 right-0 z-20 flex border-t border-[#C9A227]/20 bg-[#0a0d14]/95 px-3 pb-[max(10px,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
            {navItems.map(({ href, label, icon: Icon, testId }) => (
              <Link key={href} href={href} className={`focus-ring flex flex-1 flex-col items-center gap-1.5 py-1 text-[10px] font-medium ${location === href ? 'text-[#E0C15A]' : 'text-[#7d8491]'}`} data-testid={`${testId}-mobile`}>
                <Icon size={19} strokeWidth={1.5} />
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      {mode === 'disconnected' && location === '/' && (
        <div className="fixed inset-x-0 bottom-[76px] z-10 px-5 md:hidden">
          <div className="mx-auto flex max-w-sm items-center justify-between gap-3 rounded-xl border border-[#C9A227]/25 bg-[#10151f] p-3 shadow-2xl">
            <div><div className="text-xs font-medium">Wallet not connected</div><div className="mt-1 text-[10px] text-[#9AA0AD]">Use preview to explore safely.</div></div>
            <button className="gold-button focus-ring rounded-md px-3 py-2 text-[11px] font-semibold" onClick={onPreview} data-testid="button-mobile-preview">Preview</button>
          </div>
        </div>
      )}
    </div>
  );
}

function PageHeading({ eyebrow, title, description, action }: { eyebrow: string; title: string; description?: string; action?: ReactNode }) {
  return (
    <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div>
        <div className="mb-3 text-[10px] font-semibold uppercase tracking-[.25em] text-[#C9A227]" data-testid={`text-eyebrow-${eyebrow.toLowerCase().replaceAll(' ', '-')}`}>{eyebrow}</div>
        <h1 className="font-display text-5xl leading-[.95] text-[#F4F1EA] md:text-6xl">{title}</h1>
        {description && <p className="mt-4 max-w-lg text-sm leading-6 text-[#9AA0AD]">{description}</p>}
      </div>
      {action}
    </div>
  );
}

function ConnectPanel({ onConnect, onPreview, error }: { onConnect: () => void; onPreview: () => void; error: string }) {
  return (
    <div className="card-surface rounded-xl p-6 md:p-8" data-testid="panel-connect-wallet">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10"><KeyRound size={18} className="text-[#E0C15A]" strokeWidth={1.5} /></div>
          <h2 className="font-display text-3xl">Your wallet, your keys.</h2>
          <p className="mt-2 max-w-sm text-sm leading-6 text-[#9AA0AD]">Connect an injected wallet to use Base Sepolia, or open a local preview with no wallet access.</p>
        </div>
        <span className="hidden text-[10px] uppercase tracking-[.18em] text-[#9AA0AD] md:block">No custody</span>
      </div>
      {error && <div className="mt-5 flex items-start gap-2 border-l border-[#c97968] pl-3 text-xs leading-5 text-[#e1a49a]" data-testid="status-connect-error"><CircleAlert size={14} className="mt-0.5 shrink-0" />{error}</div>}
      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <button className="gold-button focus-ring rounded-md px-4 py-3 text-xs font-semibold" onClick={onConnect} data-testid="button-connect-injected">Connect injected wallet</button>
        <button className="ghost-button focus-ring rounded-md px-4 py-3 text-xs font-semibold" onClick={onPreview} data-testid="button-enter-preview">iPhone preview <span className="ml-1 text-[#9AA0AD]">(no wallet)</span></button>
      </div>
      <div className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-[.15em] text-[#7d8491]"><ShieldCheck size={14} className="text-[#C9A227]" /> MetaMask or Rabby on desktop</div>
    </div>
  );
}

function AssetRow({ asset, balance, detail, icon }: { asset: string; balance: string; detail: string; icon: string }) {
  return (
    <div className="flex items-center justify-between border-b border-[#C9A227]/10 py-5 last:border-0" data-testid={`row-asset-${asset.toLowerCase()}`}>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A227]/40 text-lg text-[#E0C15A]">{icon}</div>
        <div><div className="text-sm font-medium">{asset}</div><div className="mt-1 text-[11px] text-[#9AA0AD]">{detail}</div></div>
      </div>
      <div className="text-right"><div className="font-mono text-sm" data-testid={`text-balance-${asset.toLowerCase()}`}>{balance}</div><div className="mt-1 text-[11px] text-[#7d8491]">{asset === 'VAELO' ? '— USD' : 'Base Sepolia'}</div></div>
    </div>
  );
}

function WalletHome({ wallet }: { wallet: ReturnType<typeof useWalletState> }) {
  const [, setLocation] = useLocation();
  return (
    <div className="route-enter">
      <PageHeading eyebrow="Wallet" title="A measured place for your VAELO." description="A deliberate interface for Base Sepolia test assets. No market noise, no custody, no assumptions." />
      <div className="mb-7 flex items-center gap-2 text-[11px] uppercase tracking-[.18em] text-[#9AA0AD]" data-testid="text-network-identity"><span className="text-[#E0C15A]">VAELO</span><span className="text-[#C9A227]/50">·</span><span>Base Sepolia</span></div>
      {wallet.mode === 'disconnected' ? (
        <ConnectPanel onConnect={wallet.connectInjected} onPreview={wallet.usePreview} error={wallet.connectError} />
      ) : (
        <div className="card-surface rounded-xl p-6 md:p-8" data-testid="panel-wallet-overview">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div><div className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[.2em] text-[#7d8491]"><span className="h-1.5 w-1.5 rounded-full bg-[#7EBD9A]" />{wallet.mode === 'preview' ? 'Local preview' : 'Connected wallet'}</div><div className="font-mono text-sm text-[#E0C15A]" data-testid="text-wallet-address">{shortAddress(wallet.address)}</div></div>
            <button className="focus-ring text-xs text-[#9AA0AD] underline decoration-[#C9A227]/50 underline-offset-4 hover:text-[#F4F1EA]" onClick={wallet.disconnect} data-testid="button-disconnect-wallet">Disconnect</button>
          </div>
          {wallet.mode === 'connected' && wallet.chainId !== walletConfig.chainId && (
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-l border-[#c97968] bg-[#c97968]/[.06] px-4 py-3 text-xs" data-testid="status-wrong-network">
              <span className="flex items-center gap-2 text-[#e1a49a]"><CircleAlert size={14} />This wallet is on chain {wallet.chainId}. Switch to Base Sepolia to send.</span>
              <button className="focus-ring text-[#E0C15A] underline underline-offset-4" onClick={wallet.switchToBaseSepolia} data-testid="button-switch-base-sepolia">Switch network</button>
            </div>
          )}
          <div className="mt-8 flex flex-wrap gap-2">
            <button className="gold-button focus-ring inline-flex items-center gap-2 rounded-md px-4 py-3 text-xs font-semibold" onClick={() => setLocation('/receive')} data-testid="button-action-receive"><ArrowDownLeft size={15} /> Receive</button>
            <button className="ghost-button focus-ring inline-flex items-center gap-2 rounded-md px-4 py-3 text-xs font-semibold" onClick={() => setLocation('/send')} data-testid="button-action-send"><ArrowUpRight size={15} /> Send</button>
            <button className="ghost-button focus-ring inline-flex items-center gap-2 rounded-md px-4 py-3 text-xs font-semibold" onClick={() => setLocation('/receive')} data-testid="button-action-scan"><ScanLine size={15} /> Scan</button>
          </div>
        </div>
      )}
      {wallet.mode !== 'disconnected' && (
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.25fr_.75fr]">
          <section className="card-surface rounded-xl px-5 py-2 md:px-7" data-testid="section-assets">
            <div className="flex items-center justify-between border-b border-[#C9A227]/15 py-5"><div className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#9AA0AD]">Assets</div><div className="text-[11px] text-[#C9A227]">Base Sepolia</div></div>
            <AssetRow asset="VAELO" balance={wallet.vaeloBalance} detail={walletConfig.vaeloAddress ? 'Canonical contract configured' : 'Canonical contract not set'} icon="V" />
            <AssetRow asset="ETH" balance={wallet.ethBalance} detail="Network fee asset" icon="Ξ" />
          </section>
          <aside className="border-l border-[#C9A227]/20 pl-5 lg:pl-7" data-testid="panel-wallet-notice">
            <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.2em] text-[#C9A227]"><ShieldCheck size={15} /> Read before use</div>
            <p className="text-xs leading-6 text-[#9AA0AD]">Historical V1.1 prototype on Base Sepolia has no monetary value. Canonical VAELO is not deployed. No public sale is active.</p>
            <div className="mt-6 gold-rule" />
            <div className="mt-5 text-[10px] uppercase tracking-[.18em] text-[#7d8491]">Chain ID <span className="font-mono text-[#F4F1EA]">{wallet.chainId}</span></div>
          </aside>
        </div>
      )}
      {wallet.mode === 'disconnected' && <div className="mt-8 flex items-center gap-3 text-xs text-[#7d8491]"><span className="h-px w-8 bg-[#C9A227]/50" /> Connect or preview to view assets on Base Sepolia.</div>}
    </div>
  );
}

function ReceivePage({ wallet }: { wallet: ReturnType<typeof useWalletState> }) {
  const [copied, setCopied] = useState(false);
  const address = wallet.address || previewAddress;
  const copyAddress = async () => {
    await navigator.clipboard?.writeText(address);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };
  return (
    <div className="route-enter max-w-3xl">
      <PageHeading eyebrow="Receive" title="Receive test assets." description="Share this address only with someone sending on Base Sepolia." action={<Link href="/" className="focus-ring inline-flex items-center gap-2 text-xs text-[#9AA0AD] hover:text-[#E0C15A]" data-testid="link-back-wallet"><ArrowLeft size={15} /> Wallet</Link>} />
      <div className="grid gap-8 md:grid-cols-[.9fr_1.1fr] md:items-center">
        <div className="flex justify-center rounded-xl border border-[#C9A227]/20 bg-[#10151f]/70 p-8 md:p-10" data-testid="panel-address-qr">
          <div className="qr-shell flex items-center justify-center bg-[#F4F1EA] p-4" aria-label="QR code for wallet address">
            <QRCodeSVG value={address} size={196} bgColor="#F4F1EA" fgColor="#10151F" level="M" includeMargin={false} data-testid="qr-receive-address" />
          </div>
        </div>
        <div className="card-surface rounded-xl p-6 md:p-7">
          <div className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#9AA0AD]">Your address</div>
          <div className="mt-3 break-all font-mono text-sm leading-7 text-[#E0C15A]" data-testid="text-receive-address">{address}</div>
          <button className="ghost-button focus-ring mt-6 inline-flex items-center gap-2 rounded-md px-3 py-2.5 text-xs font-semibold" onClick={copyAddress} data-testid="button-copy-address">{copied ? <Check size={14} /> : <Copy size={14} />}{copied ? 'Copied' : 'Copy address'}</button>
          <div className="mt-7 flex items-start gap-2 border-t border-[#C9A227]/15 pt-5 text-xs leading-5 text-[#9AA0AD]" data-testid="status-receive-warning"><CircleAlert size={15} className="mt-0.5 shrink-0 text-[#E0C15A]" />Only send Base Sepolia test assets to this address.</div>
        </div>
      </div>
    </div>
  );
}

function SendPage({ wallet }: { wallet: ReturnType<typeof useWalletState> }) {
  const [, setLocation] = useLocation();
  const { data: walletClient } = useWalletClient();
  const publicClient = usePublicClient();
  const [asset, setAsset] = useState<'ETH' | 'VAELO'>('ETH');
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [reviewing, setReviewing] = useState(false);
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const vaeloDisabled = !walletConfig.vaeloAddress;

  const review = (event: FormEvent) => {
    event.preventDefault();
    setError('');
    if (wallet.mode === 'disconnected') { setError('Connect an injected wallet or enter iPhone preview before continuing.'); return; }
    if (asset === 'VAELO' && vaeloDisabled) { setError('VAELO transfers are disabled until the canonical contract is configured.'); return; }
    if (!validateRecipient(recipient)) { setError('Enter a valid EVM address.'); return; }
    try {
      asset === 'ETH'
        ? parseEthAmount(amount)
        : parseTokenAmount(amount, walletConfig.vaeloDecimals);
    } catch (validationError) {
      setError(validationError instanceof Error ? validationError.message : 'Enter a valid amount.');
      return;
    }
    if (wallet.mode === 'connected' && wallet.chainId !== walletConfig.chainId) {
      setError('Switch your wallet to Base Sepolia before continuing.');
      return;
    }
    setReviewing(true);
  };

  const confirmSend = async () => {
    setSending(true);
    setError('');
    const id = crypto.randomUUID();
    if (wallet.mode === 'preview') {
      wallet.addActivity({ id, createdAt: new Date().toISOString(), direction: 'sent', asset, amount, recipient, status: 'preview', demo: true });
      setResult('Preview recorded locally. Nothing was broadcast.');
      setSending(false);
      return;
    }
    if (wallet.mode !== 'connected' || !walletClient || wallet.chainId !== walletConfig.chainId) {
      setError('Connect an injected wallet before broadcasting.');
      setSending(false);
      return;
    }
    try {
      const txHash = asset === 'ETH'
        ? await sendEthOnBaseSepolia({ walletClient, recipient, amount })
        : await sendVaeloOnBaseSepolia({
            walletClient,
            contractAddress: walletConfig.vaeloAddress,
            recipient,
            amount,
            decimals: walletConfig.vaeloDecimals,
          });
      wallet.addActivity({ id, createdAt: new Date().toISOString(), direction: 'sent', asset, amount, recipient, txHash, status: 'pending' });
      setResult('Transaction submitted to your wallet. Confirmation will appear in Activity.');
      void publicClient?.waitForTransactionReceipt({ hash: txHash }).then((receipt) => {
        wallet.updateActivity(id, { status: receipt.status === 'success' ? 'confirmed' : 'failed' });
      }).catch((confirmationError) => {
        wallet.updateActivity(id, { status: 'failed', error: confirmationError instanceof Error ? confirmationError.message : 'Confirmation unavailable.' });
      });
      setSending(false);
    } catch (sendError) {
      setError(sendError instanceof Error ? sendError.message : 'The transaction was rejected or could not be submitted.');
      setSending(false);
    }
  };

  if (result) return (
    <div className="route-enter max-w-2xl">
      <PageHeading eyebrow="Send" title="Transfer prepared." description={result} />
      <div className="card-surface rounded-xl p-7" data-testid="panel-send-result"><div className="flex items-start gap-3"><div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7EBD9A]/10 text-[#9ed2b3]"><Check size={18} /></div><div><div className="text-sm font-medium">It is recorded in local Activity.</div><div className="mt-1 text-xs leading-5 text-[#9AA0AD]">{wallet.mode === 'preview' ? 'Preview mode keeps every action on this device.' : 'Your wallet provider owns the signing step.'}</div></div></div><div className="mt-7 flex gap-3"><Link href="/activity" className="gold-button focus-ring rounded-md px-4 py-3 text-xs font-semibold" data-testid="link-view-activity">View Activity</Link><button className="ghost-button focus-ring rounded-md px-4 py-3 text-xs font-semibold" onClick={() => { setResult(''); setReviewing(false); setRecipient(''); setAmount(''); }} data-testid="button-new-transfer">New transfer</button></div></div>
    </div>
  );

  return (
    <div className="route-enter max-w-2xl">
      <PageHeading eyebrow="Send" title="Send with intent." description="ETH transfers are available on Base Sepolia. VAELO remains unavailable until its canonical contract is configured." action={<Link href="/" className="focus-ring inline-flex items-center gap-2 text-xs text-[#9AA0AD] hover:text-[#E0C15A]" data-testid="link-send-back"><ArrowLeft size={15} /> Wallet</Link>} />
      <form onSubmit={review} className="card-surface rounded-xl p-6 md:p-8" data-testid="form-send-transfer">
        <div className="mb-7 flex items-center justify-between border-b border-[#C9A227]/15 pb-5"><div className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#9AA0AD]">Asset</div><div className="flex gap-2"><button type="button" className={`focus-ring rounded-md px-4 py-2 text-xs font-semibold ${asset === 'ETH' ? 'bg-[#C9A227]/15 text-[#E0C15A]' : 'text-[#9AA0AD]'}`} onClick={() => setAsset('ETH')} data-testid="button-select-eth">ETH</button><button type="button" disabled={vaeloDisabled} className={`focus-ring rounded-md px-4 py-2 text-xs font-semibold ${asset === 'VAELO' ? 'bg-[#C9A227]/15 text-[#E0C15A]' : 'text-[#7d8491]'} disabled:cursor-not-allowed disabled:opacity-50`} onClick={() => setAsset('VAELO')} data-testid="button-select-vaelo">VAELO</button></div></div>
        {vaeloDisabled && <div className="mb-6 flex items-center gap-2 text-[11px] text-[#9AA0AD]" data-testid="status-vaelo-disabled"><LockKeyhole size={14} className="text-[#C9A227]" />VAELO disabled — canonical contract not set.</div>}
        <label className="block text-[10px] font-semibold uppercase tracking-[.18em] text-[#9AA0AD]" htmlFor="recipient">Recipient address</label>
        <input id="recipient" value={recipient} onChange={(event) => setRecipient(event.target.value)} placeholder="0x..." className="focus-ring mt-3 w-full rounded-md border border-[#C9A227]/20 bg-[#0b0e15] px-4 py-3.5 font-mono text-sm text-[#F4F1EA] placeholder:text-[#5f6672]" data-testid="input-recipient-address" />
        <label className="mt-6 block text-[10px] font-semibold uppercase tracking-[.18em] text-[#9AA0AD]" htmlFor="amount">Amount <span className="normal-case tracking-normal text-[#7d8491]">({asset})</span></label>
        <div className="relative mt-3"><input id="amount" type="number" min="0" step="any" value={amount} onChange={(event) => setAmount(event.target.value)} placeholder="0.00" className="focus-ring w-full rounded-md border border-[#C9A227]/20 bg-[#0b0e15] px-4 py-3.5 pr-16 font-mono text-sm text-[#F4F1EA] placeholder:text-[#5f6672]" data-testid="input-send-amount" /><span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#9AA0AD]">{asset}</span></div>
        {error && <div className="mt-5 flex items-center gap-2 text-xs text-[#e1a49a]" data-testid="status-send-error"><CircleAlert size={14} />{error}</div>}
        {!reviewing ? <button type="submit" className="gold-button focus-ring mt-8 flex w-full items-center justify-center gap-2 rounded-md py-3.5 text-xs font-semibold" data-testid="button-review-send">Review &amp; send <ArrowRight size={15} /></button> : (
          <div className="mt-8 border-t border-[#C9A227]/15 pt-6">
            <div className="mb-4 text-[10px] font-semibold uppercase tracking-[.2em] text-[#C9A227]">Review transfer</div>
            <div className="space-y-3 text-xs"><div className="flex justify-between gap-4"><span className="text-[#9AA0AD]">Asset</span><span>{amount} {asset}</span></div><div className="flex justify-between gap-4"><span className="text-[#9AA0AD]">To</span><span className="max-w-[220px] break-all text-right font-mono text-[#E0C15A]">{shortAddress(recipient)}</span></div><div className="flex justify-between gap-4"><span className="text-[#9AA0AD]">Network</span><span>Base Sepolia</span></div></div>
            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row"><button type="button" className="ghost-button focus-ring flex-1 rounded-md py-3 text-xs font-semibold" onClick={() => setReviewing(false)} data-testid="button-edit-transfer">Edit</button><button type="button" disabled={sending} className="gold-button focus-ring flex-1 rounded-md py-3 text-xs font-semibold" onClick={confirmSend} data-testid="button-confirm-send">{sending ? 'Submitting…' : wallet.mode === 'preview' ? 'Record preview' : 'Confirm & send'}</button></div>
          </div>
        )}
      </form>
    </div>
  );
}

function ActivityPage({ wallet }: { wallet: ReturnType<typeof useWalletState> }) {
  return (
    <div className="route-enter">
      <PageHeading eyebrow="Activity" title="Local activity." description="A record of transfers initiated from this device. It is not a replacement for the Base Sepolia explorer." />
      {wallet.activity.length === 0 ? (
        <div className="card-surface flex min-h-[300px] flex-col items-center justify-center rounded-xl px-6 text-center" data-testid="empty-activity">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A227]/25 text-[#E0C15A]"><Clipboard size={20} strokeWidth={1.4} /></div>
          <h2 className="font-display text-3xl">Nothing here yet.</h2>
          <p className="mt-2 max-w-sm text-sm leading-6 text-[#9AA0AD]">Transfers you prepare or send from this wallet will appear here, with their local status.</p>
          <Link href="/send" className="gold-button focus-ring mt-6 rounded-md px-4 py-3 text-xs font-semibold" data-testid="link-start-transfer">Start a transfer</Link>
        </div>
      ) : (
        <div className="card-surface overflow-hidden rounded-xl" data-testid="list-activity">
          {wallet.activity.map((entry) => <ActivityRow key={entry.id} entry={entry} explorerUrl={walletConfig.explorerUrl} />)}
        </div>
      )}
    </div>
  );
}

function ActivityRow({ entry, explorerUrl }: { entry: ActivityEntry; explorerUrl: string }) {
  const positive = entry.direction === 'received';
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#C9A227]/10 px-5 py-5 last:border-0 md:px-7" data-testid={`row-activity-${entry.id}`}>
      <div className="flex min-w-0 items-center gap-3"><div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${positive ? 'border-[#7EBD9A]/40 text-[#9ed2b3]' : 'border-[#C9A227]/35 text-[#E0C15A]'}`}>{positive ? <ArrowDownLeft size={16} /> : <Send size={15} />}</div><div className="min-w-0"><div className="text-sm font-medium">{positive ? 'Received' : 'Sent'} {entry.asset}</div><div className="mt-1 truncate text-[11px] text-[#9AA0AD]">{formatDate(entry.createdAt)}{entry.recipient ? ` · ${shortAddress(entry.recipient)}` : ''}</div></div></div>
      <div className="ml-auto text-right"><div className="font-mono text-sm" data-testid={`text-activity-amount-${entry.id}`}>{positive ? '+' : '−'}{entry.amount} {entry.asset}</div><div className={`mt-1 text-[10px] uppercase tracking-[.12em] ${entry.status === 'failed' ? 'text-[#e1a49a]' : entry.status === 'confirmed' ? 'text-[#9ed2b3]' : 'text-[#C9A227]'}`} data-testid={`status-activity-${entry.id}`}>{statusLabel(entry.status)}</div></div>
      {entry.txHash && <a href={`${explorerUrl}/tx/${entry.txHash}`} target="_blank" rel="noreferrer" className="focus-ring ml-12 inline-flex items-center gap-1 text-[10px] text-[#9AA0AD] hover:text-[#E0C15A] md:ml-2" data-testid={`link-explorer-${entry.id}`}>Explorer <ExternalLink size={12} /></a>}
    </div>
  );
}

function DiscoverPage() {
  const layers = [
    { name: 'Bridge Pipeline', number: '01', copy: 'A considered path for moving value between future layers.' },
    { name: 'Expert Network', number: '02', copy: 'A trusted layer for people, expertise and opportunity.' },
    { name: 'Project Tracker', number: '03', copy: 'A clear view of work that deserves to move forward.' },
  ];
  return (
    <div className="route-enter">
      <PageHeading eyebrow="Discover" title="The wallet ships first." description="Vaeloryn will add new layers when they are ready to meet the same standard of care." />
      <div className="mb-9 flex items-center gap-4 border-y border-[#C9A227]/15 py-5"><LockKeyhole size={17} className="text-[#C9A227]" /><p className="text-sm text-[#9AA0AD]">These surfaces are reserved for what comes next. Your wallet remains the foundation.</p></div>
      <div className="grid gap-4 md:grid-cols-3">
        {layers.map((layer) => <div key={layer.name} className="card-surface group relative min-h-[250px] overflow-hidden rounded-xl p-6" data-testid={`card-locked-${layer.name.toLowerCase().replaceAll(' ', '-')}`}><div className="flex items-start justify-between"><span className="font-mono text-[10px] text-[#C9A227]">{layer.number}</span><span className="inline-flex items-center gap-1.5 rounded-full border border-[#C9A227]/20 px-2 py-1 text-[9px] font-semibold uppercase tracking-[.15em] text-[#9AA0AD]"><LockKeyhole size={11} /> Coming</span></div><div className="mt-20"><h2 className="font-display text-3xl text-[#F4F1EA]/90">{layer.name}</h2><p className="mt-3 text-xs leading-5 text-[#9AA0AD]">{layer.copy}</p></div><div className="absolute -bottom-10 -right-6 font-display text-[150px] leading-none text-[#C9A227]/[.035] transition-transform duration-500 group-hover:-translate-y-2">{layer.number}</div></div>)}
      </div>
    </div>
  );
}

function Router() {
  const wallet = useWalletState();
  return (
    <RoutedErrorBoundary>
      <Shell mode={wallet.mode} address={wallet.address} onConnect={wallet.connectInjected} onPreview={wallet.usePreview} onDisconnect={wallet.disconnect}>
        <Switch>
          <Route path="/" component={() => <WalletHome wallet={wallet} />} />
          <Route path="/receive" component={() => <ReceivePage wallet={wallet} />} />
          <Route path="/send" component={() => <SendPage wallet={wallet} />} />
          <Route path="/activity" component={() => <ActivityPage wallet={wallet} />} />
          <Route path="/discover" component={DiscoverPage} />
          <Route component={NotFound} />
        </Switch>
      </Shell>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
