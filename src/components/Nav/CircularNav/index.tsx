import { CircularNavBox, ListItem } from "./styles";
import Icon from "@mui/material/Icon";
import { useCallback, useState } from "react";

type itemId = {
  // Index Signature 선언하영 string으로 객체 접근
  // https://soopdop.github.io/2020/12/01/index-signatures-in-typescript/
  [key: string]: boolean;
  home: boolean;
  person: boolean;
  settings: boolean;
  email: boolean;
  videocam: boolean;
  vpn_key: boolean;
  sports_esports: boolean;
  photo_camera: boolean;
};

//  menu item List
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
export function CircularNav() {
  const [navState, setNavState] = useState(false);
  const [itemState, setItemState] = useState<itemId>({
    home: false,
    person: false,
    settings: false,
    email: false,
    videocam: false,
    vpn_key: false,
    sports_esports: false,
    photo_camera: false,
  });

  // menu on/off
  const onToggleActive = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setNavState((prev) => !prev);
    },
    [navState]
  );

  // menu item active
  const onItemToggleActive = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      const newItemState = { ...itemState };
      const { id } = e.currentTarget;
      for (let key in newItemState) {
        if (e.currentTarget.className.includes("active")) {
        } else {
          key === id ? (newItemState[key] = true) : (newItemState[key] = false);
          setItemState(newItemState);
        }
      }
    },
    [itemState]
  );
  return (
    <CircularNavBox>
      <div
        className={navState ? "menu active" : "menu"}
        onClick={onToggleActive}
      >
        <div className={navState ? "toggle active" : "toggle"}>
          <Icon>add</Icon>
        </div>
        {itemList.map((item, index) => {
          return (
            <ListItem
              id={item}
              num={index}
              onClick={onItemToggleActive}
              className={itemState[item] ? " active " : ""}
            >
              <a href="#">
                <Icon>{item}</Icon>
              </a>
            </ListItem>
          );
        })}

        <div className="indicator"></div>
      </div>
    </CircularNavBox>
  );
}
