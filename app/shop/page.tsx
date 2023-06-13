import { ShopItems, Cart } from "@/components";

const Shop = () => {
    return (
        <section className="px-5 max-w-7xl mx-auto">
        <h2 className="text-4xl font-cursive">Shop Sandwich Kits</h2>
        <div className="flex py-5 gap-5">
          <ShopItems />
          <div className="w-[300px] shrink-0 px-4">
          <Cart />
          </div>
        </div>
      </section>
    );
}

export default Shop;
