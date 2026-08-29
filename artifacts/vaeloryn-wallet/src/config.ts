export const walletConfig = {
  chainId: 84532,
  chainName: 'Base Sepolia',
  rpcUrl: 'https://sepolia.base.org',
  explorerUrl: 'https://sepolia.basescan.org',
  vaeloAddress: '',
  vaeloDecimals: 18,
} as const;

export type ConnectionMode = 'disconnected' | 'connected' | 'preview';
export type ActivityStatus = 'pending' | 'confirmed' | 'failed' | 'preview';
export type AssetSymbol = 'ETH' | 'VAELO';

export type ActivityEntry = {
  id: string;
  createdAt: string;
  direction: 'sent' | 'received';
  asset: AssetSymbol;
  amount: string;
  recipient?: string;
  txHash?: string;
  status: ActivityStatus;
  error?: string;
  demo?: boolean;
};

export const vaeloIsConfigured = walletConfig.vaeloAddress.length > 0;