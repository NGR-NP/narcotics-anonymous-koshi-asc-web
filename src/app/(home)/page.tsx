import MettingList from '@/section/MettingLists';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <MettingList />
    </main>
  );
}
