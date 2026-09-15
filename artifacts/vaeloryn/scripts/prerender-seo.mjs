import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const siteUrl = 'https://vaeloryn.com';
const distDir = path.resolve('dist/public');
const defaultImage = `${siteUrl}/social-preview.png`;

const pages = [
  {
    path: '/',
    title: 'VAELO | Vaeloryn',
    description:
      'Vaeloryn is building an onchain ecosystem intended to connect global capital with scientific, medical and technological innovation, with Base as its intended primary blockchain home.',
    keywords:
      'Vaeloryn, VAELO, onchain innovation, scientific innovation, Base, onchain finance',
  },
  {
    path: '/vaelo',
    title: 'VAELO | Vaeloryn Digital Asset, Utility and Status',
    description:
      'Explore VAELO, the intended native economic layer of the wider Vaeloryn ecosystem, including its canonical tokenomics, historical prototype and pre-mainnet status.',
    keywords:
      'VAELO, Vaeloryn economic layer, onchain innovation, tokenomics, Base, Base Sepolia',
  },
  {
    path: '/whitepaper',
    title: 'Vaeloryn & VAELO Whitepaper | Public Project Draft',
    description:
      'Read the public Vaeloryn and VAELO whitepaper covering the ecosystem vision, scientific innovation model, protocol architecture, roadmap and risks.',
    keywords:
      'Vaeloryn whitepaper, VAELO, scientific innovation, protocol architecture, ecosystem roadmap',
  },
  {
    path: '/transparency',
    title: 'Vaeloryn Transparency | Protocol, Testing & Status',
    description:
      'Review Vaeloryn protocol evidence, testing, historical deployments and open disclosures as the ecosystem works toward scientific progress and innovation.',
    keywords:
      'Vaeloryn transparency, protocol evidence, smart contract testing, VAELO status',
  },
  {
    path: '/roadmap',
    title: 'Vaeloryn Roadmap | From Foundation to Scientific Progress',
    description:
      'Follow Vaeloryn from protocol foundation through ecosystem development, security, partnerships and responsible progress in science and technology.',
    keywords:
      'Vaeloryn roadmap, scientific progress, technological innovation, ecosystem development, VAELO',
  },
  {
    path: '/risks',
    title: 'Vaeloryn & VAELO Risks | Technical and Project Disclosure',
    description:
      'Understand the technical, regulatory, economic and execution risks of Vaeloryn and VAELO before evaluating this early-stage innovation ecosystem.',
    keywords:
      'Vaeloryn risks, VAELO risks, technical disclosure, regulatory risk, project transparency',
  },
  {
    path: '/status',
    title: 'Vaeloryn Engineering Progress | Canonical Protocol Status',
    description:
      'Track Vaeloryn engineering progress, canonical protocol evidence, testing results and the distinction between local work and historical deployment status.',
    keywords:
      'Vaeloryn engineering progress, protocol status, Foundry testing, VAELO deployment',
  },
  {
    path: '/verify',
    title: 'Verify Vaeloryn | Protocol Evidence and Transparency',
    description:
      'Verify Vaeloryn protocol claims, token details, testing evidence and historical Base Sepolia records through the public transparency hub and claims.',
    keywords:
      'verify Vaeloryn, VAELO verification, protocol evidence, Base Sepolia, transparency',
  },
  {
    path: '/private-sales',
    title: 'VAELO Private Sales | Vaeloryn',
    description:
      'Contact Vaeloryn to discuss an initial private-sales conversation for VAELO. No public sale is active.',
    keywords:
      'VAELO private sales, Vaeloryn private allocation, initial VAELO inquiry',
  },
  {
    path: '/help-build',
    title: 'Help Build Vaeloryn | Connect Ideas and Expertise Together',
    description:
      'Help Vaeloryn connect talent, ideas, expertise, resources and opportunities that can accelerate scientific, medical and technological progress.',
    keywords:
      'help build Vaeloryn, scientific progress, technical expertise, innovation community, ecosystem partners',
  },
  {
    path: '/submit-idea',
    title: 'Submit an Idea to Vaeloryn | Scientific Innovation',
    description:
      'Submit a high-level scientific, medical or technological idea for consideration within Vaeloryn’s transparent ecosystem for innovation and progress.',
    keywords:
      'submit scientific idea, Vaeloryn innovation, medical technology, technological progress',
  },
  {
    path: '/contact',
    title: 'Contact Vaeloryn | Scientific and Technical Progress',
    description:
      'Contact Vaeloryn for ecosystem, scientific innovation, technology, media or partnership inquiries supporting long-term progress and advancement.',
    keywords:
      'contact Vaeloryn, scientific innovation, technology partnerships, media inquiries',
  },
];

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
    return entities[character];
  });
}

function replaceTag(html, pattern, replacement) {
  if (!pattern.test(html)) {
    throw new Error(`Could not find expected SEO tag: ${pattern}`);
  }
  return html.replace(pattern, replacement);
}

function pageHtml(template, page) {
  const canonical = `${siteUrl}${page.path === '/' ? '/' : page.path}`;
  const title = escapeHtml(page.title);
  const description = escapeHtml(page.description);
  const keywords = escapeHtml(page.keywords);

  let html = template;
  html = replaceTag(html, /<title>[^<]*<\/title>/, `<title>${title}</title>`);
  html = replaceTag(html, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${description}" />`);
  html = replaceTag(html, /<meta name="keywords" content="[^"]*" \/>/, `<meta name="keywords" content="${keywords}" />`);
  html = replaceTag(html, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonical}" />`);
  html = replaceTag(html, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${title}" />`);
  html = replaceTag(html, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${description}" />`);
  html = replaceTag(html, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonical}" />`);
  html = replaceTag(html, /<meta property="og:type" content="[^"]*" \/>/, '<meta property="og:type" content="website" />');
  html = replaceTag(html, /<meta property="og:image" content="[^"]*" \/>/, `<meta property="og:image" content="${defaultImage}" />`);
  html = replaceTag(html, /<meta name="twitter:card" content="[^"]*" \/>/, '<meta name="twitter:card" content="summary_large_image" />');
  html = replaceTag(html, /<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${title}" />`);
  html = replaceTag(html, /<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${description}" />`);
  return html;
}

const template = await readFile(path.join(distDir, 'index.html'), 'utf8');

for (const page of pages) {
  const outputDir = page.path === '/' ? distDir : path.join(distDir, page.path.slice(1));
  await mkdir(outputDir, { recursive: true });
  await writeFile(path.join(outputDir, 'index.html'), pageHtml(template, page));
}

console.log(`Generated SEO-ready HTML for ${pages.length} public routes.`);