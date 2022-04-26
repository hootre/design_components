import { Icon } from "@mui/material";
import React, { useCallback, useState } from "react";
import { Gm_TransitionIconBox } from "./styles";

const itemList = ["home", "person", "settings", "email", "videocam"];
export const Gm_TransitionIcon = () => {
  const [navItmeActiveState, setItmeActiveState] = useState(0);
  const onToggleNavItemActive = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setItmeActiveState(e.currentTarget.id);
    },
    [navItmeActiveState]
  );
  return (
    <Gm_TransitionIconBox>
      <section>
        <div className="color"></div>
        <div className="color"></div>
        <div className="color"></div>
        <ul>
          {itemList.map((item, index) => {
            return (
              <li
                key={index}
                id={"" + index}
                className={navItmeActiveState == index ? "active" : ""}
                onClick={onToggleNavItemActive}
              >
                <a href="#">
                  <Icon
                    className="icon"
                    baseClassName="material-icons-outlined"
                  >
                    {item}
                  </Icon>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </Gm_TransitionIconBox>
  );
};
