'use client';

import { Product } from '@/lib/types';
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="flex flex-col">
          <CardContent className="p-4">
            <Link href={`/product/${product.id}`}>
              <div className="aspect-square relative mb-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-lg line-clamp-2 mb-2">
                {product.title}
              </h3>
            </Link>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold">
                ${product.price.toFixed(2)}
              </span>
              <div className="flex items-center gap-1">
                <span className="text-yellow-500">★</span>
                <span>{product.rating.rate}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="mt-auto p-4 pt-0">
            <Button className="w-full" onClick={() => {}}>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}