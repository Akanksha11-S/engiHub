import Header from '@/components/layout/header';
import { wtbRequests } from '@/lib/mock-data';
import WTBRequestCard from '@/components/wtb/wtb-request-card';
import PostRequestModal from '@/components/wtb/post-request-modal';

export default function WTBPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="mx-auto grid w-full max-w-6xl">
            <div className="flex items-center justify-between mb-6">
                <div className="grid gap-2">
                    <h1 className="font-headline text-3xl font-semibold">Want to Buy Board</h1>
                    <p className="text-muted-foreground">Looking for something specific? Post a request for the community.</p>
                </div>
                <PostRequestModal />
            </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {wtbRequests.map(request => (
              <WTBRequestCard key={request.id} request={request} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
