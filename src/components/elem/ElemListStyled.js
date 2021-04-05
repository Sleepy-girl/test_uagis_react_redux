import styled from "styled-components";
import { colors } from "../../stylesheet/vars";

export const ELemListStyled = styled.ul`
  .item {
    width: 220px;
    height: 95px;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0px 2px 10px rgba(209, 209, 209, 0.23);
  }
  span {
    display: block;
    line-height: 26px;
  }
  .title {
    border-radius: 10px 10px 0 0;
    color: ${colors.title};
    background-color: ${colors.titleBackground};
  }

  .description {
    color: ${colors.description};
  }
  .description::after {
    top: 0;
    right: 0;
    height: 1px;
    width: 100%;
    background-color: ${colors.description};
  }
  .systemEventList {
    padding: 8px;
  }
  .systemEventItem {
    display: flex;
    align-items: center;
  }
  .cirсle {
    width: 9px;
    height: 9px;
    border-radius: 50pc;
    background-color: ${colors.circleGreen};
    margin-right: 4px;
  }
  .systemEvent {
    font-size: 10px;
    color: ${colors.systemEvent};
  }
`;
