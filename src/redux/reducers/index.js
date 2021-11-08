import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart/cart-reducer";
import productsReducer from "./products/products-reducer";
import userReducer from "./user/user-reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "user"],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  category: productsReducer,
});

export default persistReducer(persistConfig, rootReducer);
