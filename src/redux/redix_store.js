import { combineReducers, createStore } from "redux";
import cells_reducer from './cells_reducer';

let reducers=combineReducers({
  cellsState:cells_reducer
})
let store=createStore(reducers);
window.store=store;
export default store;