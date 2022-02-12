export interface ProductRequestI {
  price: number;
  name: string;
  imageUrl: string;
}

export interface ProductI extends ProductRequestI {
  id: number;
}
