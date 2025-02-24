// app/product/[id]/page.tsx

'use client';
import ProductClient from '@/app/product/ProductClient';
import { getProduct, getProducts } from '@/lib/api';
import type { Product } from '@/lib/types';
import { useDispatch } from 'react-redux';
import { addItem } from '@/app/store';

// Server-side functions
export async function generateStaticParams() {
  try {
    const products = await getProducts();
    return products.map((product: Product) => ({
      id: product.id.toString(),
    }));
  } catch (error) {
    return Array.from({ length: 20 }, (_, i) => ({
      id: (i + 1).toString(),
    }));
  }
}

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
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ id: product.id.toString(), quantity: 1 }));
  };

  return (
    <div>
      <ProductClient product={product} />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}