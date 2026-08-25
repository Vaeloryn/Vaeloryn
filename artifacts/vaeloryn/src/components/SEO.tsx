import { useEffect } from 'react';

const SITE_URL = 'https://vaeloryn.com';
const DEFAULT_IMAGE = `${SITE_URL}/social-preview.png`;
const DEFAULT_DESCRIPTION =
  'Vaeloryn connects exceptional talent, ideas, expertise and resources to support scientific, medical and technological progress through an open ecosystem.';
const DEFAULT_KEYWORDS =
  'Vaeloryn, VAELO, scientific progress, medical advancement, technological innovation';

interface SEOProps {
  title: string;
  description?: string;
  /** Absolute canonical URL for this page. Defaults to SITE_URL. */
  canonical?: string;
  /** Absolute URL for the OG/Twitter image. Defaults to the global social preview. */
  ogImage?: string;
  keywords?: string;
}

function setMeta(selector: string, attr: string, value: string) {
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (el) {
    el.setAttribute('content', value);
  } else {
    el = document.createElement('meta');
    const [attrName, attrValue] = selector.includes('[property')
      ? ['property', selector.match(/property="([^"]+)"/)![1]]
      : ['name', selector.match(/name="([^"]+)"/)![1]];
    el.setAttribute(attrName, attrValue);
    el.setAttribute(attr, value);
    document.head.appendChild(el);
  }
}

function setCanonical(url: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (el) {
    el.setAttribute('href', url);
  } else {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    el.setAttribute('href', url);
    document.head.appendChild(el);
  }
}

export function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical = SITE_URL,
  ogImage = DEFAULT_IMAGE,
  keywords = DEFAULT_KEYWORDS,
}: SEOProps) {
  useEffect(() => {
    document.title = title;

    // Primary
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[name="keywords"]', 'content', keywords);

    // Canonical
    setCanonical(canonical);

    // Open Graph
    setMeta('meta[property="og:type"]', 'content', 'website');
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', canonical);
    setMeta('meta[property="og:image"]', 'content', ogImage);

    // Twitter
    setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:image"]', 'content', ogImage);
  }, [title, description, canonical, ogImage]);

  return null;
}
