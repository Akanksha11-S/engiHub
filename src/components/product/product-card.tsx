
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Star } from 'lucide-react';
import type { Product } from '@/lib/mock-data';
import { useWishlist } from '@/context/wishlist-context';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { toast } = useToast();
  const isWishlisted = isInWishlist(product.id);

  const handleWishlistToggle = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
      toast({
        description: `${product.name} removed from wishlist.`,
      });
    } else {
      addToWishlist(product.id);
      toast({
        description: `${product.name} added to wishlist.`,
      });
    }
  };

  return (
    <Card className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg group">
      <CardHeader className="p-0 relative">
        <Link href={`/product/${product.id}`} className="relative block aspect-video">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={`${product.category.toLowerCase()} item`}
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
           {product.featured && (
            <Badge className="absolute top-2 left-2 z-10 bg-primary text-primary-foreground">
              <Star className="mr-1 h-3 w-3" />
              Featured
            </Badge>
          )}
        </Link>
      </CardHeader>
      <CardContent className="flex-1 p-4 flex flex-col justify-between">
        <div>
            <CardTitle className="mb-1 text-lg leading-tight">
            <Link href={`/product/${product.id}`} className="hover:text-primary">
                {product.name}
            </Link>
            </CardTitle>
            <p className="text-sm text-muted-foreground">{product.category}</p>
        </div>
        <div className="flex items-center justify-between mt-4">
            <p className="text-2xl font-semibold text-primary">₹{product.price.toFixed(2)}</p>
            <Button
            variant="ghost"
            size="icon"
            onClick={handleWishlistToggle}
            aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
            >
            <Heart className={cn('h-6 w-6', isWishlisted ? 'fill-red-500 text-red-500' : 'text-muted-foreground')} />
            </Button>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 hidden">
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto"
          onClick={handleWishlistToggle}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart className={cn('h-6 w-6', isWishlisted ? 'fill-red-500 text-red-500' : 'text-muted-foreground')} />
        </Button>
      </CardFooter>
    </Card>
  );
}
