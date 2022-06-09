import React, { useCallback, useState } from "react";
import { Gm_ResMenuBox, ListItem, ListItem2 } from "./styles";

const itemList = ["home", "person", "settings"];
const itemList2 = ["home", "About", "Tour", "contact"];
export const Gm_ResMenu = () => {
  const [menuState, setMenuState] = useState(false);
  const onToggleActive = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setMenuState((prev) => !prev);
    },
    [menuState]
  );
  return (
    <Gm_ResMenuBox>
      <div className={menuState ? "container open" : "container"}>
        <header>
          <a href="#" className="logo">
            Water.
          </a>
          <div id="toggle" onClick={onToggleActive}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </header>
        <div className={"glass"}></div>
        <div className="content">
          <h2>
            Hapiness...
            <br />
            <span>Crystal clear ocean water.</span>
          </h2>
        </div>
        <img
          className="BGimg"
          src="https://i.pinimg.com/originals/53/76/ed/5376ed0ba13ea516274e975f79806932.png"
          alt=""
        />
        <ul className="sci">
          {itemList.map((item, index) => {
            return (
              <ListItem key={index} num={index}>
                <a href="#">{item}</a>
              </ListItem>
            );
          })}
        </ul>
        <ul className="navigation">
          {itemList2.map((item, index) => {
            return (
              <ListItem2 key={index} num={index}>
                <a href="#">{item}</a>
              </ListItem2>
            );
          })}
        </ul>
      </div>
    </Gm_ResMenuBox>
  );
};
