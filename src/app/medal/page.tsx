import type { Metadata } from 'next';
import MedalDisplay from '@/components/MedalDisplay';

export const metadata: Metadata = {
  title: "Andrea's Birthday Run Medal - 25th Birthday Celebration",
  description: "Your virtual medal for participating in Andrea's 25th birthday run celebration",
  robots: 'noindex', // Prevent search engines from indexing this page
};

export default function MedalPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-50 to-cyan-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <MedalDisplay />
      </div>
    </main>
  );
}