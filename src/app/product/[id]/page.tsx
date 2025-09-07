import { notFound } from 'next/navigation';
import Image from 'next/image';
import { products } from '@/lib/mock-data';
import Header from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { Heart, Flag, MessageSquare } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import VerifiedStudentBadge from '@/components/product/verified-student-badge';
import ChatModal from '@/components/product/chat-modal';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id.toString() === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1 py-8 px-4 md:px-6">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
          <Carousel className="w-full">
            <CarouselContent>
              {product.images.map((img, index) => (
                <CarouselItem key={index}>
                  <Card className="overflow-hidden">
                    <CardContent className="p-0 aspect-video relative">
                       <Image src={img} alt={`${product.name} image ${index + 1}`} fill className="object-cover" data-ai-hint="product image" />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>

          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{product.category}</Badge>
                <Badge variant="outline">{product.condition}</Badge>
              </div>
              <h1 className="font-headline text-3xl font-bold lg:text-4xl">{product.name}</h1>
              <p className="text-3xl font-bold text-primary">${product.price.toFixed(2)}</p>
            </div>
            
            <p className="text-muted-foreground">{product.description}</p>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                 <CardTitle className="text-lg">Seller Information</CardTitle>
                 {product.seller.isStudentVerified && <VerifiedStudentBadge />}
              </CardHeader>
              <CardContent className="flex items-center gap-4">
                 <Image src={product.seller.avatarUrl} alt={product.seller.name} width={40} height={40} className="rounded-full" data-ai-hint="person avatar" />
                 <div>
                    <p className="font-semibold">{product.seller.name}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className={`h-2 w-2 rounded-full ${product.seller.online ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                        <span>{product.seller.online ? 'Online' : 'Offline'}</span>
                    </div>
                 </div>
              </CardContent>
            </Card>

            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <ChatModal product={product} />

              <Button variant="outline" size="lg">
                <Heart className="mr-2 h-4 w-4" />
                Add to Wishlist
              </Button>
            </div>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-destructive">
                  <Flag className="mr-2 h-4 w-4" />
                  Report this listing
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Report Listing</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to report this listing? This action cannot be undone and will notify our moderators.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction className="bg-destructive hover:bg-destructive/90">Report</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </main>
    </div>
  );
}
