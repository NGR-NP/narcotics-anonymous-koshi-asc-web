'use server';

import { revalidateTag } from 'next/cache';

export default async function action() {
 revalidateTag('metting-lists');
}

export async function getMettingLists() {
    try {
      const res = await fetch(
        'https://gist.githubusercontent.com/Alinalamakarki/5c4ce5ccc26c636cbda2e37a190962eb/raw/na-koshi-asc-metting-list.json',
        { next: { revalidate: 286400, tags: ['metting-lists'] } },
      );
      const data = await res.json();
      return data;
    } catch (err) {
      console.error(err);
      return [];
    }
  }