import { combineReducers } from "redux";
import { MyAddReducer } from "./ItemsChoice";

export const reducer = combineReducers({
  AllItems: MyAddReducer,
});
