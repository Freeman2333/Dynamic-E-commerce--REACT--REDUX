import { ADD_PRODUCT, DECREASE_PRODUCT_STOCK } from "./productlistType";

export const addProduct = product => {
  return {
    type: ADD_PRODUCT,
    payload: product
  };
};

export const decreaseProductStock = product => { 
  return {
    type: DECREASE_PRODUCT_STOCK, 
    payload: product
  };
};
