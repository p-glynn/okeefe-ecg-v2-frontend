// import { Suspense } from 'react';
import { robotoFlex } from '../ui/fonts';

import { client } from '@/app/sanity/lib/client';
import { ECGS_QUERY } from '@/app/sanity/lib/queries';

export default async function Page() {
  const ecgs = await client.fetch(ECGS_QUERY);
  console.log(ecgs);
  return (
    <main>
      <h1 className={`${robotoFlex} mb-4 text-xl md:text-2xl`}>Questions</h1>
    </main>
  );
}
