import Header from '@/components/layout/header';
import DashboardClient from '@/components/dashboard/dashboard-client';

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="mx-auto w-full max-w-6xl">
           <h1 className="font-headline text-3xl font-semibold mb-6">My Dashboard</h1>
          <DashboardClient />
        </div>
      </main>
    </div>
  );
}
