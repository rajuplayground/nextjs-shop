'use client'

import { addItemToCart } from "@/stores/cart";

interface Props {
	item: ShopItem;
}

addItemToCart
const AddToCart = ({ item }: Props) => {
    return (
        <button
                    onClick={() => addItemToCart(item)}
                    className="bg-black text-white font-bold text-lg self-start px-6 py-2 rounded-md"
                  >
                    Add to Cart
                  </button>
    );
}

export default AddToCart;
