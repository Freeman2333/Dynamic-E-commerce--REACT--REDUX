import { ADD_TO_BASKET, RESET_BASKET, ADD_TO_BASKET_ITEM } from "./basketlistType";

export const addToBasket = product => {
  return {
    type: ADD_TO_BASKET ,
    payload: product
  };
};

export const addToBasketItem = (product, SKU) => {
  return {
    type: ADD_TO_BASKET_ITEM ,
    payload: product,
    id:SKU
  };
};

export const resetBasket = () => {
  return {
    type: RESET_BASKET  
  };
};
 
