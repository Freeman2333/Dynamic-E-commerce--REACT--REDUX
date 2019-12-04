import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import muffinReducer from "./muffin/muffinReducer";
import cookieReducer from "./cookie/cookieReducer";
import productlistReducer from "./products/productlistReducer";
import basketlistReducer from "./basket/basketReducer"

const rootReducer = combineReducers({
  cake: cakeReducer,
  muffin: muffinReducer,
  cookie: cookieReducer,
  productList: productlistReducer,
  basket: basketlistReducer
});

export default rootReducer;
