import {
  ADD_PRODUCT,
  DECREASE_PRODUCT_STOCK,
  RESET_PRODUCTS
} from "./productlistType";

const initProduct = {
  numberOfProducts: 0,
  productArray: []
};

const productlistReducer = (state = initProduct, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        numberOfProducts: state.numberOfProducts + 1,
        productArray: [...state.productArray, action.payload]
      };
    case DECREASE_PRODUCT_STOCK:
      return {
        ...state,
        productArray: [...action.payload]
      };
    case RESET_PRODUCTS:
      return {
        ...initProduct
      };
    default:
      return state;
  }
};

export default productlistReducer;
