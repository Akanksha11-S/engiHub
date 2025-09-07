'use client';

import { useWishlist } from '@/context/wishlist-context';
import { products } from '@/lib/mock-data';
import ProductCard from '@/components/product/product-card';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function WishlistTab() {
  const { wishlist } = useWishlist();
  const wishlistedProducts = products.filter(p => wishlist.includes(p.id));

  return (
    <Card>
      <CardHeader>
        <CardTitle>My Wishlist</CardTitle>
        <CardDescription>Products you've saved for later.</CardDescription>
      </CardHeader>
      <CardContent>
        {wishlistedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {wishlistedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 border-dashed border-2 rounded-lg">
            <Heart className="mx-auto h-12 w-12 text-muted-foreground" />
            <h3 className="mt-4 text-lg font-semibold">Your wishlist is empty</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Click the heart icon on products to save them here.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
