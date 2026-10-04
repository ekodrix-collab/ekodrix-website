import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { apiVersion, dataset, projectId, token } from './env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
  token,
  perspective: 'published',
});

const builder = imageUrlBuilder(client);

export function urlForImage(source: any) {
  if (!source) return null;
  return builder.image(source).auto('format').fit('max');
}
