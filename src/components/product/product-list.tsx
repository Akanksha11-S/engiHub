import ProductCard from './product-card';
import type { Product } from '@/lib/mock-data';

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.length > 0 ? (
        products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <div className="col-span-full text-center py-10">
            <h2 className="text-2xl font-semibold text-muted-foreground">No products found</h2>
            <p className="text-muted-foreground">Try adjusting your filters.</p>
        </div>
      )}
    </div>
  );
}
