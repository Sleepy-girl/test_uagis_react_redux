import React, { Component } from "react";
import { connect } from "react-redux";
import elemsActions from "../redux/elems/elemsActions";
import { elemSelector } from "../redux/elems/elemsSelector";

class ElemItem extends Component {
  state = {
    title: this.props.title,
    description: this.props.description,
    isTitleEdited: false,
    isDescriptionEdited: false,
  };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  editElem = (e) => {
    const { id } = e.target;
    this.setState((prevState) => ({ [id]: !prevState[id] }));
  };

  removeElem = () => {
    this.props.onRemoveContact(this.props.id);
  };

  onHandleSubmit = () => {
    this.setState({ isTitleEdited: false, isDescriptionEdited: false });

    this.props.onEditElem({
      title: this.state.title,
      description: this.state.description,
      id: this.props.id,
    });
  };

  render() {
    const { title, description } = this.props;
    const { isTitleEdited, isDescriptionEdited } = this.state;
    return (
      <li className="item">
        {!isTitleEdited ? (
          <span className="title" id="isTitleEdited" onClick={this.editElem}>
            {title}
          </span>
        ) : (
          <input
            className="title"
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.onHandleChange}
            onBlur={this.onHandleSubmit}
          />
        )}
        {!isDescriptionEdited ? (
          <span
            className="description"
            id="isDescriptionEdited"
            onClick={this.editElem}
          >
            {description}
          </span>
        ) : (
          <input
            className="description"
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.onHandleChange}
            onBlur={this.onHandleSubmit}
          />
        )}

        <ul className="systemEventList">
          <li className="systemEventItem">
            <span className="systemEvent">???????????????? ?????????? ????????????????</span>
          </li>
          <li className="systemEventItem">
            <span className="systemEvent">???????????????? ?????????? ????????????????</span>
          </li>
        </ul>

        <button className="remove" type="button" onClick={this.removeElem}>
          &#10060;
        </button>
      </li>
    );
  }
}
const mapStateToProps = (state, { id }) => {
  const elem = elemSelector(state, id);
  return { ...elem };
};
const mapDispatchToProps = {
  onEditElem: elemsActions.editElem,
  onRemoveContact: elemsActions.removeElem,
};

export default connect(mapStateToProps, mapDispatchToProps)(ElemItem);
