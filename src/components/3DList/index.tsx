import React from "react";
import { ListBox, Item } from "./styles";

const content = ["Home", "About", "Service", "Portfoilo", "OurTeam", "Contact"];
const number = [6, 5, 4, 3, 2, 1];

export const List = () => {
  const rendering = () => {
    const result = [];
    for (let i = 0; i < content.length; i++) {
      result.push(
        <Item key={i} num={number[i]}>
          <a href="#">{content[i]}</a>
        </Item>
      );
    }
    return result;
  };
  return (
    <ListBox>
      <div className="container">
        <ul>{rendering()}</ul>
      </div>
    </ListBox>
  );
};
