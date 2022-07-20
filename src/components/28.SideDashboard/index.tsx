import React from 'react';
import { SideDahsbordBox, Item } from './styles';
import { useState } from 'react';
import {
  IoLogoApple,
  IoHomeOutline,
  IoPersonOutline,
  IoChatbubbleOutline,
  IoHelpOutline,
  IoSettingsOutline,
  IoLockClosedOutline,
} from 'react-icons/io5';

const content = ['Brand Name', 'Dashbord', 'Customers', 'Messages', 'Help', 'Setting', 'Password'];
const icons = [
  <IoLogoApple />,
  <IoHomeOutline />,
  <IoPersonOutline />,
  <IoChatbubbleOutline />,
  <IoHelpOutline />,
  <IoSettingsOutline />,
  <IoLockClosedOutline />,
];

export const SideDashbord = () => {
  const [toggle, setToggle] = useState(false);
  const clickedToggle = () => {
    setToggle(prev => !prev);
  };
  const rendering = () => {
    const result = [];
    for (let i = 0; i < content.length; i++) {
      result.push(
        <Item key={i}>
          <a href="#">
            <span className="icon">{icons[i]}</span>
            <span className="title">{content[i]}</span>
          </a>
        </Item>,
      );
    }
    return result;
  };
  return (
    <SideDahsbordBox>
      <div className="container">
        <div className={!toggle ? 'navigation' : 'navigation active'}>
          <ul>{rendering()}</ul>
          <div className="toggle" onClick={clickedToggle}></div>
        </div>
      </div>
    </SideDahsbordBox>
  );
};
