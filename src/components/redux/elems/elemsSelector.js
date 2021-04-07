export const elemsSelector = (state) => state.elems;

export const elemSelector = (state, id) =>
  state.elems.find((elem) => elem.id === id);
