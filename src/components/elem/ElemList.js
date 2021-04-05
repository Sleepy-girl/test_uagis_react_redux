import React from "react";
import { ELemListStyled } from "./ElemListStyled";

function ElemList() {
  return (
    <ELemListStyled>
      <ul>
        <li className="item">
          <span className="title" id="title" onChange={() => {}}>
            Test
          </span>
          <span className="description" id="description" onChange={() => {}}>
            test description
          </span>

          <ul className="systemEventList">
            <li className="systemEventItem">
              <span className="systemEvent">Системна подія створена</span>
            </li>
            <li className="systemEventItem">
              <span className="systemEvent">Системна подія створена</span>
            </li>
          </ul>
        </li>
      </ul>
      <button type="button" onClick={() => {}}></button>
    </ELemListStyled>
  );
}

export default ElemList;

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
