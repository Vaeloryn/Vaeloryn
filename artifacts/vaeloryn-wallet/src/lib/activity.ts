import type { ActivityEntry } from '../config';

const ACTIVITY_KEY_PREFIX = 'vaeloryn-wallet:activity:v1:';

function storageKey(address?: string | null) {
  return `${ACTIVITY_KEY_PREFIX}${address?.toLowerCase() ?? 'preview'}`;
}

export function readActivity(address?: string | null): ActivityEntry[] {
  if (typeof window === 'undefined') return [];

  try {
    const saved = window.localStorage.getItem(storageKey(address));
    if (!saved) return [];

    const parsed: unknown = JSON.parse(saved);
    if (!Array.isArray(parsed)) return [];

    return parsed.filter(isActivityEntry).sort((a, b) => {
      return Date.parse(b.createdAt) - Date.parse(a.createdAt);
    });
  } catch {
    return [];
  }
}

export function writeActivity(
  address: string | null | undefined,
  entries: ActivityEntry[],
) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(storageKey(address), JSON.stringify(entries.slice(0, 100)));
}

export function upsertActivity(
  address: string | null | undefined,
  entry: ActivityEntry,
) {
  const next = [entry, ...readActivity(address).filter((item) => item.id !== entry.id)];
  writeActivity(address, next);
  return next;
}

function isActivityEntry(value: unknown): value is ActivityEntry {
  if (!value || typeof value !== 'object') return false;
  const entry = value as Partial<ActivityEntry>;
  return (
    typeof entry.id === 'string' &&
    typeof entry.createdAt === 'string' &&
    (entry.direction === 'sent' || entry.direction === 'received') &&
    (entry.asset === 'ETH' || entry.asset === 'VAELO') &&
    typeof entry.amount === 'string' &&
    (entry.status === 'pending' ||
      entry.status === 'confirmed' ||
      entry.status === 'failed' ||
      entry.status === 'preview')
  );
}