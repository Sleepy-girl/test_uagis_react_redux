import React from "react";
import { connect } from "react-redux";
import ElemItem from "./ElemItem";
import elemsActions from "../redux/elems/elemsActions";
import { elemsSelector } from "../redux/elems/elemsSelector";
import { ELemListStyled } from "./ElemListStyled";

function ElemList({ elems, onAddElem }) {
  const addElem = () => onAddElem();

  return (
    <ELemListStyled>
      {elems.map(({ id }) => (
        <ElemItem className="listItem" key={id} id={id} />
      ))}

      <li className="item">
        <button className="add" type="button" onClick={addElem}>
          Add element
        </button>
      </li>
    </ELemListStyled>
  );
}

const mapStateToProps = (state) => {
  return {
    elems: elemsSelector(state),
  };
};
const mapDispatchToProps = {
  onAddElem: elemsActions.addElem,
};
export default connect(mapStateToProps, mapDispatchToProps)(ElemList);
