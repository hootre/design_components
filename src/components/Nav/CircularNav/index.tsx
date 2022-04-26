import { CircularNavBox, ListItem } from "./styles";
import Icon from "@mui/material/Icon";
import { useCallback, useState, VFC } from "react";

const itemList = [
  "home",
  "person",
  "settings",
  "email",
  "videocam",
  "vpn_key",
  "sports_esports",
  "photo_camera",
];

export const CircularNav: VFC = () => {
  const [navActiveState, setNavActiveState] = useState(false);
  // menu on/off
  const onToggleActive = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setNavActiveState((prev) => !prev);
    },
    [navActiveState]
  );

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
  return (
    <CircularNavBox>
      <div
        className={navActiveState ? "menu active" : "menu"}
        onClick={onToggleActive}
      >
        <div className={navActiveState ? "toggle active" : "toggle"}>
          <Icon>add</Icon>
        </div>
        {itemList.map((item, index) => {
          return (
            <ListItem
              key={index}
              id={"" + index}
              num={index}
              length={itemList.length}
              onClick={onToggleNavItemActive}
              className={navItmeActiveState == index ? " active " : ""}
            >
              <a href="#">
                <Icon baseClassName="material-icons-outlined">{item}</Icon>
              </a>
            </ListItem>
          );
        })}

        <div className="indicator"></div>
      </div>
    </CircularNavBox>
  );
};
