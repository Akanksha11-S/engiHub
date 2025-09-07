
'use client';

import { useState } from 'react';
import Header from '@/components/layout/header';
import ProductFilters from '@/components/product/product-filters';
import ProductList from '@/components/product/product-list';
import { products as allProducts } from '@/lib/mock-data';
import type { Product } from '@/lib/mock-data';
import Advertisement from '@/components/shared/advertisement';

export default function HomePage() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="mx-auto grid w-full max-w-7xl gap-4">
            <div className="space-y-2">
                <h1 className="font-headline text-3xl font-semibold">Welcome to EngiHub 2.0</h1>
                <p className="text-muted-foreground max-w-3xl">
                    The exclusive marketplace for our university community. Buy and sell textbooks, electronics, stationery, and more. 
                    Find what you need for your classes or earn some extra cash from your used items.
                </p>
            </div>
          <Advertisement />
        </div>
        <div className="mx-auto grid w-full max-w-7xl items-start gap-6 md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <ProductFilters allProducts={allProducts} setFilteredProducts={setFilteredProducts} />
          <ProductList products={filteredProducts} />
        </div>
      </main>
    </div>
  );
}
