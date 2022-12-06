import { createStore, combineReducers } from "redux";
import CategoryReducer from "./reducers/category.reducer";
import HambReducer from "./reducers/hamb.reducer";

const RootReducer = combineReducers ({
    categories: CategoryReducer,
    hamb: HambReducer,
})

export default createStore(RootReducer)