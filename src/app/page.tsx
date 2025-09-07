'use client';

import { useState } from 'react';
import Header from '@/components/layout/header';
import ProductFilters from '@/components/product/product-filters';
import ProductList from '@/components/product/product-list';
import { products as allProducts } from '@/lib/mock-data';
import type { Product } from '@/lib/mock-data';

export default function HomePage() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="mx-auto grid w-full max-w-7xl gap-2">
          <h1 className="font-headline text-3xl font-semibold">Products for Sale</h1>
        </div>
        <div className="mx-auto grid w-full max-w-7xl items-start gap-6 md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <ProductFilters allProducts={allProducts} setFilteredProducts={setFilteredProducts} />
          <ProductList products={filteredProducts} />
        </div>
      </main>
    </div>
  );
}
