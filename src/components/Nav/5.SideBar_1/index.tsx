import { Icon } from "@mui/material";
import React, { useCallback, useState, VFC } from "react";
import { ListItem, SideBar_1Box } from "./styles";

const itemList = ["home", "person", "settings", "email", "videocam"];
const logoColor = ["#f44336", "#ffa117", "#0fc70f", "#2196f3", "#b145e9"];
export const SideBar_1: VFC = () => {
  const [navActiveState, setNavActiveState] = useState(false);
  // menu item active
  const [navItmeActiveState, setItmeActiveState] = useState(0);
  const onToggleNavItemActive = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setItmeActiveState(e.currentTarget.id);
    },
    [navItmeActiveState]
  );
  const onToggleNavActive = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setNavActiveState((prev) => !prev);
    },
    [navActiveState]
  );

  return (
    <SideBar_1Box>
      <div className={navActiveState ? "navigation open" : "navigation"}>
        <div className="menuToggle" onClick={onToggleNavActive}></div>
        <ul>
          {itemList.map((item, index) => {
            return (
              <ListItem
                key={index}
                id={"" + index}
                logoColor={logoColor[index]}
                className={navItmeActiveState == index ? "active" : ""}
                onClick={onToggleNavItemActive}
              >
                <a href="#">
                  <Icon
                    className="icon"
                    baseClassName="material-icons-outlined"
                  >
                    {itemList[index]}
                  </Icon>
                  <span className="text">{itemList[index]}</span>
                </a>
              </ListItem>
            );
          })}
        </ul>
      </div>
    </SideBar_1Box>
  );
};
