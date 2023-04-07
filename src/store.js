//code here
import { createStore, combineReducers } from "redux";
import tellZodiac from "./zodiac";

const rootReducer = combineReducers({
  tellZodiac,
});

const store = createStore(rootReducer);

export default store;
