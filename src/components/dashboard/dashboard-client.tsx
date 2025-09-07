'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MyListingsTab from './my-listings-tab';
import WishlistTab from './wishlist-tab';

export default function DashboardClient() {
  return (
    <Tabs defaultValue="my-listings" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="my-listings">My Listings</TabsTrigger>
        <TabsTrigger value="my-wishlist">My Wishlist</TabsTrigger>
      </TabsList>
      <TabsContent value="my-listings">
        <MyListingsTab />
      </TabsContent>
      <TabsContent value="my-wishlist">
        <WishlistTab />
      </TabsContent>
    </Tabs>
  );
}
