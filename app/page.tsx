import { getProducts, getCategories } from '@/lib/api';
import ProductGrid from '@/components/ProductGrid';
import { Button } from '@/components/ui/button';
import MySlider from '@/components/slider';
export default async function Home() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  return (
    <div className="container py-8">
      <section>
        // create silder for offer and discount
        <div className="flex gap-2">
          <div className="w-1/2">
         <MySlider/>
          </div>
        </div>
        <div className="w-1/2"></div>
      </section>
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