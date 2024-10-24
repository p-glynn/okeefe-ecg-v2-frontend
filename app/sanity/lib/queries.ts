import { defineQuery } from 'next-sanity';

export const ECGS_QUERY = defineQuery(`*[_type=="ecg"]{_id, title}`);
