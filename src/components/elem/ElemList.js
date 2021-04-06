import React, { Component } from "react";
import { connect } from "react-redux";
import elemsActions from "../redux/elems/elemsActions";
import ElemItem from "./ElemItem";
import { ELemListStyled } from "./ElemListStyled";

export class ElemList extends Component {
  addElem = () => {
    this.props.onAddElem();
  };

  render() {
    return (
      <ELemListStyled>
        {this.props.elems.map((item) => (
          <ElemItem {...item} />
        ))}

        <li>
          <button type="button" onClick={this.addElem}>
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

/* <svg>
          <circle
            cx="50"
            cy="50"
            r="5"
            // stroke="green"
            // stroke-width="4"
            fill="yellow"
          />
        </svg>
        <svg viewBox="0 0 20 10" xmlns="http://www.w3.org/2000/svg">
          <title>I'm a circle</title>
          <circle cx="5" cy="5" r="4">
            <desc>
              I'm a circle and that description is here to demonstrate how I can
              be described, but is it really necessary to describe a simple
              circle like me?
            </desc>
          </circle>

          <rect x="11" y="1" width="8" height="8">
            <title>I'm a square</title>
          </rect>
        </svg> */
