'use client'
import { useState } from "react";
import { $cart as cart, subtotal, removeFromCart } from "@/stores/cart";
import { useStore } from "@nanostores/react";


function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    currency: "usd",
    style: "currency",
  }).format(amount);
}

const EmptyState = () => {
  return (
    <div className="space-y-5 mt-5">
      <p className="text-center text-4xl">🌭</p>
      <p>
        Your cart is empty! Add a sandwich kit or two and give flavor a chance.
      </p>
    </div>
  );
};

const Cart = () => {
  const [notice, setNotice] = useState(false);
  const $cart = useStore(cart);
	const $subtotal = useStore(subtotal);

  return (
    <div>
      <p className="text-2xl font-cursive mb-5">Your Cart</p>
      {Object.values($cart).length <= 0 && <EmptyState />}
      {Object.values($cart).length > 0 && (
        <div>
          <div className="divide-y divide-gray-200 border-gray-200 border-t-[1px] border-b-[1px]">
            {Object.values($cart).map((item) => (
              <div
                key={item.item.id}
                className="flex items-baseline gap-2 py-3"
              >
                <p>{item.quantity}</p>
                <p className="w-[60%]">{item.item.title}</p>
                <button
                  onClick={() => removeFromCart(item.item.id)}
                  className="font-cursive text-sm"
                >
                  X
                </button>
                <p className="flex-1 text-right">
                  {formatCurrency(item.quantity * item.item.price)}
                </p>
              </div>
            ))}
          </div>
          <div className="space-y-5 py-5">
            <div className="space-y-2">
              <div className="flex justify-between">
                <p>Subtotal:</p>
                <p>{formatCurrency($subtotal)}</p>
              </div>
              <div className="flex justify-between">
                <p>Shipping:</p>
                <p>
                  <del>$10.00</del>
                  <ins className="no-underline pl-2">FREE</ins>
                </p>
              </div>
              <div className="flex justify-between">
                <p>Total:</p>
                <p>{formatCurrency($subtotal)}</p>
              </div>
            </div>
            <button
              onClick={() => setNotice(true)}
              className="bg-black text-white font-bold text-lg self-start px-6 py-2 rounded-md"
            >
              Check Out
            </button>
            {notice && <p>Checkout is not implemented</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
