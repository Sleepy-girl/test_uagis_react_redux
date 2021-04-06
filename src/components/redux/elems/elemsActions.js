import elemsTypes from "./elemsTypes";
import { v4 as uuidv4 } from "uuid";

const addElem = () => ({
  type: elemsTypes.ADD_ELEM,
  payload: { id: uuidv4() },
});

const editElem = (elem) => ({
  type: elemsTypes.EDIT_ELEM,
  payload: elem,
});

const removeElem = (id) => ({
  type: elemsTypes.REMOVE_ELEM,
  payload: {
    id,
  },
});

const loaderOn = () => ({
  type: elemsTypes.LOADER_ON,
});

const loaderOff = () => ({
  type: elemsTypes.LOADER_OFF,
});

export default { addElem, editElem, removeElem, loaderOn, loaderOff };
