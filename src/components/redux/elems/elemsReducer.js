import { combineReducers } from "redux";
import elemsTypes from "./elemsTypes";

const elemsReduser = (state = [], { type, payload }) => {
  switch (type) {
    case elemsTypes.GET_SUCCESS:
      return payload;

    case elemsTypes.ADD_SUCCESS:
      return [...state, payload];

    case elemsTypes.REMOVE_CONTACT:
      return [...state.filter((elem) => elem.id !== payload.id)];

    default:
      return state;
  }
};

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case elemsTypes.ADD_ERROR:
    case elemsTypes.GET_ERROR:
    case elemsTypes.REMOVE_ERROR:
      return action.payload;

    case elemsTypes.ADD_REQUEST:
    case elemsTypes.GET_REQUEST:
    case elemsTypes.REMOVE_CONTACT:
      return null;

    default:
      return state;
  }
};

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case elemsTypes.LOADER_ON:
      return true;

    case elemsTypes.LOADER_OFF:
      return false;

    default:
      return state;
  }
};

export default combineReducers({
  elems: elemsReduser,
  error: errorReducer,
  loading: loadingReducer,
});
