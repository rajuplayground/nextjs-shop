import { computed, map } from "nanostores";

export const $cart = map<Record<number, CartItem | undefined>>({});

export const addItemToCart = (item: ShopItem) => {
  const cartItem = $cart.get()[item.id];
  const quantity = cartItem ? cartItem.quantity : 0;

  $cart.setKey(item.id, { item, quantity: quantity + 1 });
};

export const removeFromCart = (itemId: number) => {
  $cart.setKey(itemId, undefined);
};

export const subtotal = computed($cart, (entries) => {
  return Object.values(entries).reduce((acc, item) => {
    if (!item) {
      return acc;
    }
    const itemtotal = item.item.price * item.quantity;
    return acc + itemtotal;
  }, 0);
});
