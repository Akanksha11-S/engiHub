
'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Search, Package } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { products } from '@/lib/mock-data';

export default function SearchBarWithSuggestions() {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const router = useRouter();

  const filteredProducts = useMemo(() => {
    if (!query) return [];
    return products
      .filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 5); // Limit to 5 suggestions
  }, [query]);

  const handleSuggestionClick = (productId: number) => {
    setQuery('');
    setShowSuggestions(false);
    router.push(`/product/${productId}`);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (filteredProducts.length > 0) {
      handleSuggestionClick(filteredProducts[0].id);
    }
  }

  return (
    <div className="relative w-full max-w-sm">
      <form onSubmit={handleSearchSubmit}>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            className="w-full appearance-none bg-background pl-9 shadow-none text-foreground placeholder:text-muted-foreground"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)} // a small delay to allow click
          />
        </div>
      </form>
      {showSuggestions && query && filteredProducts.length > 0 && (
        <Card className="absolute top-full mt-2 w-full z-50 shadow-lg">
          <CardContent className="p-2">
            <ul>
              {filteredProducts.map((product) => (
                <li
                  key={product.id}
                  className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent"
                  onMouseDown={() => handleSuggestionClick(product.id)}
                >
                  <Package className="h-4 w-4 text-muted-foreground" />
                  <span>{product.name}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

    