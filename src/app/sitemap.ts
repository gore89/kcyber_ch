import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://kcyber.ch';
  return [
    { url: `${base}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/site/referenzen`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/site/ueber-mich`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/site/kontakt`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/legal/impressum`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${base}/legal/datenschutz`, changeFrequency: 'yearly', priority: 0.2 },
  ];
}
