interface VaelorynLogoProps {
  /** Tailwind / CSS sizing classes. */
  className?: string;
}

/**
 * Official Vaeloryn logo mark.
 *
 * The asset is a transparent-background PNG/WebP — the exterior black has
 * been removed so it renders cleanly on any surface.
 *
 * <picture> serves WebP (86 KB) to modern browsers and falls back to
 * the transparent PNG (707 KB) for older ones.
 */
export function VaelorynLogo({ className = 'w-16 h-16' }: VaelorynLogoProps) {
  return (
    <picture style={{ display: 'contents' }}>
      <source srcSet="/logo.webp" type="image/webp" />
      <img
        src="/logo.png"
        alt="Vaeloryn"
        className={className}
        style={{ display: 'block' }}
        loading="eager"
        decoding="async"
        draggable={false}
      />
    </picture>
  );
}
