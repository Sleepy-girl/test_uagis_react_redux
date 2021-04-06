import styled from "styled-components";
import { colors } from "../../stylesheet/vars";

export const ELemListStyled = styled.ul`
  input,
  .item {
    text-align: center;
  }
  .item {
    position: relative;
    width: 220px;
    min-height: 95px;
    border-radius: 10px;
    box-shadow: 0px 2px 10px rgba(209, 209, 209, 0.23);
  }
  span {
    display: block;
  }
  span,
  input {
    line-height: 26px;
  }
  input {
    width: 100%;
    border: none;
  }
  .title {
    border-radius: 10px 10px 0 0;
    color: ${colors.title};
    background-color: ${colors.titleBackground};
  }
  .description {
    color: ${colors.description};
    border-bottom: solid 0.5px ${colors.descriptionBorder};
  }

  .systemEventList {
    padding: 8px 8px 8px 10px;
  }
  .systemEventItem {
    display: flex;
    align-items: baseline;
  }
  .systemEventItem:nth-child(even) {
    justify-content: flex-end;
  }
  .systemEventItem:not(:last-child) {
    margin-bottom: 5px;
  }
  .systemEvent {
    font-size: 10px;
    line-height: 12px;
    color: ${colors.systemEvent};
  }
  .systemEventItem:nth-child(odd)::before,
  .systemEventItem:nth-child(even)::after {
    content: "";
    display: inline-block;
    height: 9px;
    width: 9px;
    border-radius: 50pc;
  }
  .systemEventItem:nth-child(odd)::before {
    background-color: ${colors.circleGreen};
    margin-right: 4px;
  }
  .systemEventItem:nth-child(even)::after {
    background-color: ${colors.circleEyellow};
    margin-left: 4px;
  }
  .add {
    width: 220px;
    min-height: 95px;
    border-radius: 10px;
    box-shadow: 0px 2px 10px rgba(209, 209, 209, 0.23);
  }
  .add:hover,
  .add:focus {
    background-color: ${colors.circleGreen};
  }
  .remove {
    position: absolute;
    top: 0;
    right: 0;
    width: 28px;
    height: 28px;
    font-size: 10px;
    background-color: rgba(0, 0, 0, 0);
  }
`;
