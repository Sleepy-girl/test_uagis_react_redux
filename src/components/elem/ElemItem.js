import React, { Component } from "react";
import { connect } from "react-redux";
import elemsActions from "../redux/elems/elemsActions";

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
          <span className="title" id="isTitleEdited" onClick={this.edit}>
            {title}
          </span>
        ) : (
          <input
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
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.onHandleChange}
            onBlur={this.onHandleSubmit}
          />
        )}

        <ul className="systemEventList">
          <li className="systemEventItem">
            <span className="systemEvent">Системна подія створена</span>
          </li>
          <li className="systemEventItem">
            <span className="systemEvent">Системна подія створена</span>
          </li>
        </ul>

        <button type="button" onClick={this.removeElem} className="remove">
          &#10060;
        </button>
      </li>
    );
  }
}
const mapDispatchToProps = {
  onEditElem: elemsActions.editElem,
  onRemoveContact: elemsActions.removeElem,
};

export default connect(null, mapDispatchToProps)(ElemItem);
