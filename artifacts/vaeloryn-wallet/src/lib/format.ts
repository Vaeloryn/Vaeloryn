import { formatEther, formatUnits, isAddress, parseEther, parseUnits } from 'viem';

export function shortAddress(address?: string | null) {
  if (!address) return 'Not connected';
  return `${address.slice(0, 6)}…${address.slice(-4)}`;
}

export function formatEthBalance(value?: bigint) {
  if (value === undefined) return '—';
  const formatted = formatEther(value);
  const [whole, fraction = ''] = formatted.split('.');
  const trimmed = fraction.slice(0, 4).replace(/0+$/, '').padEnd(2, '0');
  return `${whole}.${trimmed}`;
}

export function formatTokenBalance(value: bigint | undefined, decimals: number) {
  if (value === undefined) return '0.00';
  const formatted = formatUnits(value, decimals);
  const [whole, fraction = ''] = formatted.split('.');
  const trimmed = fraction.slice(0, 4).replace(/0+$/, '').padEnd(2, '0');
  return `${whole}.${trimmed}`;
}

export function validateRecipient(value: string) {
  return isAddress(value.trim());
}

export function parseEthAmount(value: string) {
  const normalized = value.trim();
  if (!normalized || Number(normalized) <= 0) {
    throw new Error('Enter an amount greater than 0.');
  }
  return parseEther(normalized);
}

export function parseTokenAmount(value: string, decimals: number) {
  const normalized = value.trim();
  if (!normalized || Number(normalized) <= 0) {
    throw new Error('Enter an amount greater than 0.');
  }
  return parseUnits(normalized, decimals);
}