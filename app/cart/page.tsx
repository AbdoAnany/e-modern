import { ShoppingBag, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Shopping Cart',
  description: 'View and manage your shopping cart',
};

export default function CartPage() {
  // This will be replaced with real cart data in a future update
  const cartIsEmpty = true;

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {cartIsEmpty ? (
        <div className="text-center py-12">
          <div className="flex justify-center mb-4">
            <ShoppingBag className="h-12 w-12 text-muted-foreground" />
          </div>
          <h2 className="text-xl font-semibold mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8">
            Looks like you haven&apos;t added anything to your cart yet.
          </p>
          <Button asChild>
            <Link href="/">Continue Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {/* Example cart item - will be mapped over real cart items later */}
            <div className="bg-white rounded-lg p-4 flex items-center gap-4">
              <div className="relative w-24 h-24">
                <Image
                  src="/placeholder.jpg"
                  alt="Product"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">Product Name</h3>
                <p className="text-muted-foreground">$99.99</p>
                <div className="flex items-center gap-2 mt-2">
                  <select className="border rounded px-2 py-1">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$99.99</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>$99.99</span>
                </div>
              </div>
            </div>
            <Button className="w-full">Proceed to Checkout</Button>
          </div>
        </div>
      )}
    </div>
  );
}