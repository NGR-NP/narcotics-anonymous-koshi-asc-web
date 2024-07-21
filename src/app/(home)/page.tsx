import MerchandiseSection from '@/section/MerchandiseSection';
import MettingList from '@/section/MettingLists';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <MettingList />
      <MerchandiseSection />
    </main>
  );
}
