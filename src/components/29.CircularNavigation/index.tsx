import React from 'react';
import { CircularNavigationBox, Item } from './styles';
import { useCallback, useState } from 'react';
import {
  IoAdd,
  IoHomeOutline,
  IoPersonOutline,
  IoSettingsOutline,
  IoMailOutline,
  IoVideocamOutline,
  IoKeyOutline,
  IoGameControllerOutline,
  IoCameraOutline,
} from 'react-icons/io5';

const number = [0, 1, 2, 3, 4, 5, 6, 7];
const icons = [
  <IoHomeOutline />,
  <IoPersonOutline />,
  <IoSettingsOutline />,
  <IoMailOutline />,
  <IoVideocamOutline />,
  <IoKeyOutline />,
  <IoGameControllerOutline />,
  <IoCameraOutline />,
];

export const CircularNavigation = () => {
  const [toggle, setToggle] = useState(false);
  const [navItmeActiveState, setItmeActiveState] = useState(0);
  const clickedToggle = () => {
    setToggle(prev => !prev);
  };
  const onToggleNavItemActive = useCallback(
    e => {
      e.preventDefault();
      e.stopPropagation();
      setItmeActiveState(e.currentTarget.id);
    },
    [navItmeActiveState],
  );
  return (
    <CircularNavigationBox>
      <div className="container">
        <ul className={!toggle ? 'menu' : 'menu active'}>
          <div className={!toggle ? 'toggle' : 'toggle active'} onClick={clickedToggle}>
            <IoAdd />
          </div>
          {number.map((item, index) => {
            return (
              <Item
                key={index}
                num={number[index]}
                id={'' + index}
                onClick={onToggleNavItemActive}
                className={navItmeActiveState == index ? 'active' : ''}
              >
                <a href="#!">
                  <span className="icon">{icons[index]}</span>
                </a>
              </Item>
            );
          })}
          <div className="indicator"></div>
        </ul>
      </div>
    </CircularNavigationBox>
  );
};
