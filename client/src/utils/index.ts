import { CartItemI } from '@/models/cart';

export const formattedPrice = (price: number, locale = 'ko-KR') => {
  if (price) {
    return price.toLocaleString(locale);
  }
  return 0;
};

export const getCartTotalPrice = (items: CartItemI[] = []) => {
  return items.reduce((acc, curr) => acc + curr.product.price, 0);
};
