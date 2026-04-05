export type Product = {
  title: string;
  category: string;
  reviews: number;
  description: string;
  rating: number;
  price: number;
  discountedPrice: number;
  id: number;
  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
};
