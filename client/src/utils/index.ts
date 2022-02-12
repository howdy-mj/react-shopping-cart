export const formattedPrice = (price: number) => {
  if (price) {
    return price.toLocaleString();
  }
  return 0;
};
