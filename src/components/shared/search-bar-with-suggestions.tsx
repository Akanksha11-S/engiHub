'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search, Package, Tag } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const suggestions = [
  { type: 'product', name: 'Ergonomic Chair' },
  { type: 'product', name: 'Calculus Textbook' },
  { type: 'category', name: 'Electronics' },
  { type: 'category', name: 'Furniture' },
];

export default function SearchBarWithSuggestions() {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredSuggestions = query
    ? suggestions.filter((s) => s.name.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <div className="relative w-full max-w-sm">
      <form>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            className="w-full appearance-none bg-background pl-9 shadow-none text-foreground placeholder:text-muted-foreground"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
          />
        </div>
      </form>
      {showSuggestions && query && filteredSuggestions.length > 0 && (
        <Card className="absolute top-full mt-2 w-full z-10 shadow-lg">
          <CardContent className="p-2">
            <ul>
              {filteredSuggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent"
                  onMouseDown={() => setQuery(suggestion.name)}
                >
                  {suggestion.type === 'product' ? <Package className="h-4 w-4 text-muted-foreground" /> : <Tag className="h-4 w-4 text-muted-foreground" />}
                  <span>{suggestion.name}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
