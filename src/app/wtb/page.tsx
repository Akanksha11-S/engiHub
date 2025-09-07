import Header from '@/components/layout/header';
import { wtbRequests } from '@/lib/mock-data';
import WTBRequestCard from '@/components/wtb/wtb-request-card';
import PostRequestModal from '@/components/wtb/post-request-modal';
import { Separator } from '@/components/ui/separator';

export default function WTBPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <div className="bg-muted/40 w-full">
            <div className="mx-auto grid w-full max-w-6xl gap-2 px-4 py-10 md:px-8">
                <h1 className="font-headline text-4xl font-bold">Want to Buy Board</h1>
                <p className="text-muted-foreground text-lg">Looking for something specific? Post a request and let the community help you find it.</p>
            </div>
        </div>
        <div className="mx-auto grid w-full max-w-6xl p-4 md:p-8">
            <div className="flex items-center justify-end mb-6">
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
