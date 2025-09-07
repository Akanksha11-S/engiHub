
'use client';

import { useState } from 'react';
import { notFound, useRouter } from 'next/navigation';
import { products } from '@/lib/mock-data';
import Header from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { CreditCard, Lock } from 'lucide-react';
import Image from 'next/image';

export default function CheckoutPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const product = products.find(p => p.id.toString() === params.id);

  if (!product) {
    notFound();
  }

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: 'Payment Successful!',
        description: `Your order for "${product.name}" has been placed.`,
        className: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 border-green-300 dark:border-green-700'
      });
      router.push('/dashboard');
    }, 2000);
  };

  const shipping = 5.00;
  const tax = product.price * 0.08;
  const total = product.price + shipping + tax;

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1 bg-muted/40 py-12 px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold font-headline mb-8">Checkout</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Payment Details</CardTitle>
                  <CardDescription>Enter your payment information to complete the purchase.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePayment} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="card-number">Card Number</Label>
                      <div className="relative">
                         <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input id="card-number" placeholder="0000 1234 5678 9012" required className="pl-10" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry</Label>
                        <Input id="expiry" placeholder="MM/YY" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="123" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="name">Name on Card</Label>
                      <Input id="name" placeholder="John Doe" required />
                    </div>
                    <Button type="submit" className="w-full" disabled={isProcessing}>
                      {isProcessing ? 'Processing...' : `Pay $${total.toFixed(2)}`}
                    </Button>
                  </form>
                   <p className="text-xs text-muted-foreground mt-4 flex items-center justify-center">
                    <Lock className="mr-1 h-3 w-3" /> Secure Payment
                  </p>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Image src={product.images[0]} alt={product.name} width={80} height={80} className="rounded-md object-cover" data-ai-hint="product image" />
                    <div>
                      <p className="font-semibold">{product.name}</p>
                      <p className="text-sm text-muted-foreground">{product.category}</p>
                    </div>
                    <p className="ml-auto font-semibold">${product.price.toFixed(2)}</p>
                  </div>
                  <div className="border-t pt-4 space-y-2">
                     <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>${product.price.toFixed(2)}</span>
                    </div>
                     <div className="flex justify-between text-muted-foreground">
                        <span>Shipping</span>
                        <span>${shipping.toFixed(2)}</span>
                    </div>
                     <div className="flex justify-between text-muted-foreground">
                        <span>Taxes</span>
                        <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t pt-2 mt-2 flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
