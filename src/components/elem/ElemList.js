import React, { Component } from "react";
import { connect } from "react-redux";
import elemsActions from "../redux/elems/elemsActions";
import ElemItem from "./ElemItem";
import LoaderComponent from "../loader/LoaderComponent";
import { ELemListStyled } from "./ElemListStyled";

export class ElemList extends Component {
  addElem = () => {
    this.props.onAddElem();
  };

  render() {
    return this.props.loading ? (
      <LoaderComponent />
    ) : (
      <ELemListStyled>
        {this.props.elems.map((elem) => (
          <ElemItem className="listItem" key={elem.id} {...elem} />
        ))}

        <li className="item">
          <button className="add" type="button" onClick={this.addElem}>
            Add element
          </button>
        </li>
      </ELemListStyled>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    elems: state.elems,
    loading: state.loading,
  };
};
const mapDispatchToProps = {
  onAddElem: elemsActions.addElem,
};
export default connect(mapStateToProps, mapDispatchToProps)(ElemList);
