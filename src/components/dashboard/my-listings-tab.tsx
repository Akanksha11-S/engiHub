
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { products } from '@/lib/mock-data';
import Image from 'next/image';
import { Badge } from '../ui/badge';
import { ArrowUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import AddListingModal from './add-listing-modal';
import type { Product } from '@/lib/mock-data';

// For UI demo, we'll just show some products as "my listings"
const initialListings = products.slice(0, 3);

export default function MyListingsTab() {
  const { toast } = useToast();
  const [myListings, setMyListings] = useState<Product[]>(initialListings);

  const handleBump = (productName: string) => {
    toast({
      title: 'Listing Bumped!',
      description: `Your listing "${productName}" has been moved to the top of search results.`,
      className: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 border-green-300 dark:border-green-700'
    });
  };

  const addListing = (newListing: Product) => {
    setMyListings(prevListings => [newListing, ...prevListings]);
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>My Listings</CardTitle>
          <CardDescription>Manage your items for sale.</CardDescription>
        </div>
        <AddListingModal onListingAdded={addListing} />
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {myListings.map(product => (
              <TableRow key={product.id}>
                <TableCell className="hidden sm:table-cell">
                  <Image
                    alt={product.name}
                    className="aspect-square rounded-md object-cover"
                    height="64"
                    src={product.images[0]}
                    width="64"
                    data-ai-hint="product image"
                  />
                </TableCell>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>
                  <Badge variant="outline">Active</Badge>
                </TableCell>
                <TableCell>₹{product.price.toFixed(2)}</TableCell>
                <TableCell>
                  <Button size="sm" variant="outline" onClick={() => handleBump(product.name)}>
                    <ArrowUp className="mr-2 h-4 w-4" />
                    Bump
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
