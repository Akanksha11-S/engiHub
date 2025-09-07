
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import type { Product } from '@/lib/mock-data';

interface ProductFiltersProps {
  allProducts: Product[];
  setFilteredProducts: (products: Product[]) => void;
}

const categories = ['Textbooks', 'Electronics', 'Stationery', 'Other'];
const conditions = ['New', 'Like New', 'Used'];

export default function ProductFilters({ allProducts, setFilteredProducts }: ProductFiltersProps) {
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedCondition, setSelectedCondition] = useState<string>('All');

  useEffect(() => {
    let products = [...allProducts];

    products = products.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (selectedCategories.length > 0) {
      products = products.filter(p => selectedCategories.includes(p.category));
    }

    if (selectedCondition !== 'All') {
      products = products.filter(p => p.condition === selectedCondition);
    }

    setFilteredProducts(products);
  }, [priceRange, selectedCategories, selectedCondition, allProducts, setFilteredProducts]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };
  
  const clearFilters = () => {
    setPriceRange([0, 2000]);
    setSelectedCategories([]);
    setSelectedCondition('All');
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div>
          <h3 className="mb-2 font-semibold">Price Range</h3>
          <Slider
            min={0}
            max={2000}
            step={100}
            value={priceRange}
            onValueChange={setPriceRange}
          />
          <div className="mt-2 flex justify-between text-sm text-muted-foreground">
            <span>₹{priceRange[0]}</span>
            <span>₹{priceRange[1]}</span>
          </div>
        </div>
        <div>
          <h3 className="mb-2 font-semibold">Category</h3>
          <div className="grid gap-2">
            {categories.map(category => (
              <div key={category} className="flex items-center gap-2">
                <Checkbox
                  id={category}
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={() => handleCategoryChange(category)}
                />
                <Label htmlFor={category}>{category}</Label>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-2 font-semibold">Condition</h3>
          <RadioGroup value={selectedCondition} onValueChange={setSelectedCondition}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="All" id="cond-all" />
              <Label htmlFor="cond-all">All</Label>
            </div>
            {conditions.map(condition => (
              <div key={condition} className="flex items-center space-x-2">
                <RadioGroupItem value={condition} id={`cond-${condition}`} />
                <Label htmlFor={`cond-${condition}`}>{condition}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
        <Button variant="ghost" onClick={clearFilters}>Clear Filters</Button>
      </CardContent>
    </Card>
  );
}
