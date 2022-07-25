import React from 'react';
import { IconHoverBox, Item } from './styles';
import { FaTwitter, FaInstagram, FaPlaystation, FaYoutube } from 'react-icons/fa';

const clr = ['#1da1f2', '#dd2a7b', '#25d366', '#ff0000'];
const icons = [
  <FaTwitter className="icon" stroke="#1da1f2" strokeWidth="10px" />,
  <FaInstagram className="icon" stroke="#dd2a7b" strokeWidth="10px" />,
  <FaPlaystation className="icon" stroke="#25d366" strokeWidth="10px" />,
  <FaYoutube className="icon" stroke="#ff0000" strokeWidth="10px" />,
];

export const IconHover = () => {
  return (
    <IconHoverBox>
      <div className="container">
        <ul>
          {icons.map((item, index) => {
            return (
              <Item key={index} color={clr[index]} id={'' + index}>
                <span className="one">{icons[index]}</span>
                <span className="two">{icons[index]}</span>
              </Item>
            );
          })}
        </ul>
      </div>
    </IconHoverBox>
  );
};
