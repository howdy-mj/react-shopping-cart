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
