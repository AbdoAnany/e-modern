// app/product/[id]/ProductClient.tsx
'use client';

import { Button } from '@/components/ui/button';
import { ShoppingCart, Star } from 'lucide-react';
import Image from 'next/image';
import type { Product } from '@/lib/types';
import { useState } from 'react';

export default function ProductClient({ product }: { product: Product }) {
  const [cart, setCart] = useState<Product[]>([]);

  const handleAddToCart = () => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.title} has been added to your cart.`);
  };

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative aspect-square bg-white rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-8"
            priority
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center text-yellow-500">
              <Star className="fill-current h-5 w-5" />
              <span className="ml-1 text-lg font-semibold">
                {product.rating.rate}
              </span>
            </div>
            <span className="text-muted-foreground">
              ({product.rating.count} reviews)
            </span>
          </div>

          <div className="text-3xl font-bold mb-6">
            ${product.price.toFixed(2)}
          </div>

          <p className="text-muted-foreground mb-8">
            {product.description}
          </p>

          <div className="flex gap-4 mt-auto">
            <Button size="lg" className="flex-1" onClick={handleAddToCart}>
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}