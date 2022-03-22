import { CircularNavBox, ListItem } from "./styles";
import Icon from "@mui/material/Icon";
import { useCallback, useState, VFC } from "react";

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
interface Props {
  itemList: string[];
}
//  menu item List

export const CircularNav: VFC<Props> = ({ itemList }) => {
  const [navActiveState, setNavActiveState] = useState(false);
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
      setNavActiveState((prev) => !prev);
    },
    [navActiveState]
  );

  // menu item active
  const onItemToggleActive = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      // menu li toggle
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
        className={navActiveState ? "menu active" : "menu"}
        onClick={onToggleActive}
      >
        <div className={navActiveState ? "toggle active" : "toggle"}>
          <Icon>add</Icon>
        </div>
        {itemList.map((item, index) => {
          return (
            <ListItem
              id={item}
              num={index}
              length={itemList.length}
              onClick={onItemToggleActive}
              className={itemState[item] ? " active " : ""}
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
