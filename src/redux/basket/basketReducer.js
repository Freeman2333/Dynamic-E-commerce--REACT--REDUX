import {
  ADD_TO_BASKET,
  RESET_BASKET,
  ADD_TO_BASKET_ITEM
} from "./basketlistType";

const initOrder = {
  orderNumber: Math.floor(Math.random() * 100),
  numberOfUnits: 0,
  unitArray: []
};

const basketlistReducer = (state = initOrder, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        numberOfUnits: state.numberOfUnits + action.bought,
        unitArray: [...state.unitArray, action.payload]
      };
    case ADD_TO_BASKET_ITEM:
      return {
        ...state,
        numberOfUnits: state.numberOfUnits + 1,
        unitArray: state.unitArray.map(item =>
          item.SKU === action.id ? action.payload : item
        )
      };
    case RESET_BASKET:
      return initOrder;
    default:
      return state;
  }
};

export default basketlistReducer;
