import {
  createConfig,
  http,
  type Config,
  type Connector,
} from 'wagmi';
import { baseSepolia } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';
import { encodeFunctionData, erc20Abi, parseUnits, type Address, type PublicClient, type WalletClient } from 'viem';
import { parseEthAmount, validateRecipient } from '@/lib/format';
import { walletConfig } from '@/config';

export const wagmiConfig = createConfig({
  chains: [baseSepolia],
  connectors: [injected({ shimDisconnect: true })],
  transports: {
    [baseSepolia.id]: http(walletConfig.rpcUrl),
  },
});

export type WalletConfig = Config;
export type WalletConnector = Connector;

export function assertBaseSepolia(chainId?: number) {
  if (chainId !== walletConfig.chainId) {
    throw new Error('Switch your wallet to Base Sepolia before continuing.');
  }
}

export async function sendEthOnBaseSepolia({
  walletClient,
  recipient,
  amount,
}: {
  walletClient: WalletClient;
  recipient: string;
  amount: string;
}) {
  if (!validateRecipient(recipient)) {
    throw new Error('Enter a valid recipient address.');
  }

  const value = parseEthAmount(amount);
  return walletClient.sendTransaction({
    account: walletClient.account!,
    to: recipient as Address,
    value,
    chain: baseSepolia,
  });
}

export async function sendVaeloOnBaseSepolia({
  walletClient,
  contractAddress,
  recipient,
  amount,
  decimals,
}: {
  walletClient: WalletClient;
  contractAddress: string;
  recipient: string;
  amount: string;
  decimals: number;
}) {
  if (!validateRecipient(recipient)) {
    throw new Error('Enter a valid recipient address.');
  }
  if (!validateRecipient(contractAddress)) {
    throw new Error('The configured VAELO contract address is invalid.');
  }

  const value = parseUnits(amount.trim(), decimals);
  return walletClient.sendTransaction({
    account: walletClient.account!,
    to: contractAddress as Address,
    data: encodeFunctionData({
      abi: erc20Abi,
      functionName: 'transfer',
      args: [recipient as Address, value],
    }),
    chain: baseSepolia,
  });
}

export async function readVaeloBalance({
  publicClient,
  contractAddress,
  address,
}: {
  publicClient: PublicClient;
  contractAddress: string;
  address: Address;
}) {
  return publicClient.readContract({
    address: contractAddress as Address,
    abi: erc20Abi,
    functionName: 'balanceOf',
    args: [address],
  });
}