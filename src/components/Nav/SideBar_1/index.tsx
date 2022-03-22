import { Icon } from "@mui/material";
import React, { useCallback, useState, VFC } from "react";
import { ListItem, SideBar_1Box } from "./styles";

type itemId = {
  // Index Signature 선언하영 string으로 객체 접근
  // https://soopdop.github.io/2020/12/01/index-signatures-in-typescript/
  [key: string]: boolean;
  home: boolean;
  person: boolean;
  settings: boolean;
  email: boolean;
  videocam: boolean;
};
interface Props {
  itemList: string[];
  logoColor: string[];
}
export const SideBar_1: VFC<Props> = ({ itemList, logoColor }) => {
  const [navActiveState, setNavActiveState] = useState(false);
  const [navItmeActiveState, setItmeActiveState] = useState<itemId>({
    home: false,
    person: false,
    settings: false,
    email: false,
    videocam: false,
    vpn_key: false,
  });
  const onToggleNavActive = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setNavActiveState((prev) => !prev);
    },
    [navActiveState]
  );
  const onToggleNavItemActive = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      // menu li toggle
      const newItemState = { ...navItmeActiveState };
      const { id } = e.currentTarget;
      for (let key in newItemState) {
        if (e.currentTarget.className.includes("active")) {
        } else {
          key === id ? (newItemState[key] = true) : (newItemState[key] = false);
          setItmeActiveState(newItemState);
        }
      }
      console.log(newItemState);
    },
    [navItmeActiveState]
  );
  return (
    <SideBar_1Box>
      <div className={navActiveState ? "navigation open" : "navigation"}>
        <div className="menuToggle" onClick={onToggleNavActive}></div>
        <ul>
          {itemList.map((item, index) => {
            return (
              <ListItem
                id={item}
                logoColor={logoColor[index]}
                className={navItmeActiveState[item] ? "active" : ""}
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
