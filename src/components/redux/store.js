import { createStore } from "redux";
import elemsReducer from "./elems/elemsReducer";

const store = createStore(
  elemsReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
