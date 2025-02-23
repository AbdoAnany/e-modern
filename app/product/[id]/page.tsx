import { getProduct, getProducts } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star } from 'lucide-react';
import Image from 'next/image';
import type { Product } from '@/lib/types';

// This function runs at build time to generate all possible product pages
export async function generateStaticParams() {
  try {
    const products = await getProducts();
    return products.map((product: Product) => ({
      id: product.id.toString(),
    }));
  } catch (error) {
    // Fallback to a minimum set of products if API fails during build
    return Array.from({ length: 20 }, (_, i) => ({
      id: (i + 1).toString(),
    }));
  }
}

// This function runs at build time for each product page
export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = await getProduct(parseInt(params.id));
  return {
    title: product.title,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(parseInt(params.id));

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
            <Button size="lg" className="flex-1">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}