import { combineReducers } from "redux";
import elemsTypes from "./elemsTypes";

const defaultElem = {
  title: "Test",
  description: "test description",
  id: "testId",
};

const elemsReduсer = (state = [defaultElem], { type, payload }) => {
  switch (type) {
    case elemsTypes.EDIT_ELEM:
      return [
        ...state.map((elem) =>
          elem.id === payload.id ? { ...payload } : elem
        ),
      ];

    case elemsTypes.ADD_ELEM:
      return [...state, { ...defaultElem, id: payload.id }];

    case elemsTypes.REMOVE_ELEM:
      return [...state.filter((elem) => elem.id !== payload.id)];

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
  elems: elemsReduсer,
  loading: loadingReducer,
});
