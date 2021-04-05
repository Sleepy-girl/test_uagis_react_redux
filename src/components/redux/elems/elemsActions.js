import elemsTypes from "./elemsActions";

const getElemsRequest = (elem) => ({
  type: elemsTypes.GET_REQUEST,
  payload: { ...elem },
});

const getElemsSuccess = (elems) => ({
  type: elemsTypes.GET_SUCCESS,
  payload: [...elems],
});

const getElemsError = (error) => ({
  type: elemsTypes.GET_ERROR,
  payload: { error },
});

//---------------------

const addElemRequest = () => ({
  type: elemsTypes.ADD_REQUEST,
});

const addElemSuccess = (elem) => ({
  type: elemsTypes.ADD_SUCCESS,
  payload: { ...elem },
});

const addElemError = (error) => ({
  type: elemsTypes.ADD_ERROR,
  payload: { error },
});

//---------------------

const removeElem = (id) => ({
  type: elemsTypes.REMOVE_ELEM,
  payload: {
    id,
  },
});

const removeElemError = (error) => ({
  type: elemsTypes.REMOVE_ERROR,
  payload: { error },
});

export default {
  getElemsRequest,
  getElemsSuccess,
  getElemsError,

  addElemRequest,
  addElemSuccess,
  addElemError,

  removeElem,
  removeElemError,
};
