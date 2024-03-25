export interface IProduct {
    _id: string;
    title: string;
    price: string;
    ratings: string;
    brand: string;
    category: string;
    image: string;
    description: string;
    flashSale: boolean;
    flashSaleOffer?: string;
    discount?: string;
  }