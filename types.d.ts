type ShopItem = {
    id: number;
    title: string;
    description: string;
    image: {
      src: string;
      alt: string;
    };
    price: number;
  };

  type CartItem = {
    item: ShopItem;
    quantity: number;
  };
