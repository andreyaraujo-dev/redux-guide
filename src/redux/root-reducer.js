import { combineReducers } from "redux";

import { userReducer } from "./user/slice";
import { cartReducer } from "./cart/slice";

export const rootReducer = combineReducers({ userReducer, cartReducer });
