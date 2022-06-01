import React, { useRef } from "react";
import { ListArrowBox, Item } from "./styles";

const content = [
  "Home",
  "About Us",
  "Our Service",
  "Portfoilo",
  "Team",
  "Contact",
];

export const ListArrow = () => {
  const markerRef = useRef<any>();
  const mouseOn = (e: any) => {
    const itemTop = e.target.offsetTop;
    const itemWidth = e.target.clientWidth;

    markerRef.current.style =
      "top : " + itemTop + "px;" + "width :" + itemWidth + "px;";
  };
  const rendering = () => {
    const result = [];
    for (let i = 0; i < content.length; i++) {
      result.push(
        <Item key={i}>
          <a href="#!" onMouseEnter={(e) => mouseOn(e)}>
            {content[i]}
          </a>
        </Item>
      );
    }
    return result;
  };
  return (
    <ListArrowBox>
      <div className="container">
        <ul>
          <span id="marker" ref={markerRef}></span>
          {rendering()}
        </ul>
      </div>
    </ListArrowBox>
  );
};
