import apiClient from "@/services/ApiClient";
import AddToCart from "./AddToCart";
import axios from 'axios'

interface Props {
    count?: number;
    addToCart?: boolean;
  }

  function formatCurrency(amount: number) {
    return new Intl.NumberFormat("en-US", {
      currency: "usd",
      style: "currency",
    }).format(amount);
  }

  async function getProducts(){
    const res = await apiClient.get('/products')
    return res.data;
  }

  const ShopItems = async ({ count = Infinity, addToCart = true }: Props) => {

    const products = await getProducts()

    return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products &&
            products.slice(0, count).map((p) => (
              <div key={p.id} className="space-y-3">
                <img src={p.image.src} alt={p.image.alt} />
                <h3 className="text-xl font-cursive">{p.title}</h3>
                <p>{p.description}</p>
                <p>{formatCurrency(p.price)}</p>
                {addToCart && <AddToCart item={p} />}
              </div>
            ))}
        </div>
      </>
    );
  };

  export default ShopItems;
