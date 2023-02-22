import { elementTypes } from '../types';

const { SELECT_ELEMENT } = productsTypes;

export const selectElement = (id) => ({
  type: SELECT_ELEMENT,
  productId: id,
});
