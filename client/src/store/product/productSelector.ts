import { createSelector } from '@reduxjs/toolkit';
import { productAdapter } from './productSlice';
import { RootState } from '../rootReducer';

const selectProductsState = (state: RootState) => state.product;

const productSelectors = productAdapter.getSelectors();

export const getProductsAll = createSelector(
  selectProductsState,
  productSelectors.selectAll,
);

export const getProductsEntities = createSelector(
  selectProductsState,
  productSelectors.selectEntities,
);

export const getSelectedProduct = createSelector(
  selectProductsState,
  (state) => state.selectedProduct,
);

export const getRandomRecommendProducts = createSelector(
  getProductsAll,
  (products) => {
    const randomValue = Math.floor(Math.random() * products.length);
    const randomIndex =
      randomValue >= products.length - 2 ? randomValue - 4 : randomValue;
    return products.slice(randomIndex, randomIndex + 3);
  },
);
