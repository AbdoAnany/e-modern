import { getProducts, getCategories } from '@/lib/api';
import ProductGrid from '@/components/ProductGrid';
import { Button } from '@/components/ui/button';

export default async function Home() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  return (
    <div className="container py-8">
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Categories</h2>
        <div className="flex gap-2 flex-wrap">
          {categories.map((category: string) => (
            <Button
              key={category}
              variant="outline"
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
        <ProductGrid products={products} />
      </section>
    </div>
  );
}