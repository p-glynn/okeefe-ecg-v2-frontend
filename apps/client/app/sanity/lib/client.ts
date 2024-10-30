import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '@/app/sanity/env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
