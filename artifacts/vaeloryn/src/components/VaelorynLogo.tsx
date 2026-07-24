import { useId } from 'react';

interface VaelorynLogoProps {
  /** Tailwind / CSS class for sizing. Defaults to 64 × 64 px. */
  className?: string;
}

/**
 * The Vaeloryn V mark as an inline SVG.
 * Inline so it renders crisply at any DPI with zero extra network requests.
 * Gradient IDs are scoped per-instance via useId() to avoid collisions.
 */
export function VaelorynLogo({ className }: VaelorynLogoProps) {
  const id = useId();
  const gradId  = `vl-grad-${id}`;
  const glowId  = `vl-glow-${id}`;

  return (
    <svg
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Vaeloryn"
      className={className}
      style={{ display: 'block' }}
    >
      <defs>
        {/* Main gold gradient — lighter at apex, richer at base */}
        <linearGradient id={gradId} x1="90" y1="42" x2="90" y2="148" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#E8C97A" />
          <stop offset="55%"  stopColor="#C9A84C" />
          <stop offset="100%" stopColor="#9A7530" />
        </linearGradient>

        {/* Subtle inner-glow filter */}
        <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* V mark */}
      <polygon
        points="32,42 62,42 90,118 118,42 148,42 104,148 76,148"
        fill={`url(#${gradId})`}
        filter={`url(#${glowId})`}
      />
    </svg>
  );
}
