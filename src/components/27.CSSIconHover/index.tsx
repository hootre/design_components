import React from 'react';
import { IconListBox, Item } from './styles';
import { faHome, faMessage, faHeart, faVideo, faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const content = ['Home', 'Messages', 'Favourite', 'Videos', 'Photos'];
const color = ['#a955ff , #ea51ff', '#56ccf2 , #2f80ed', '#ff9966 , #ff5e62', '#80ff72 , #7ee8fa', '#ffa9c6 , #f434e2'];
const icon = [faHome, faMessage, faHeart, faVideo, faCameraRetro];

export const IconList = () => {
  const rendering = () => {
    const result = [];
    for (let i = 0; i < content.length; i++) {
      result.push(
        <Item key={i} clr={color[i]}>
          <span className="icon">
            <div className="icon-icon">
              <FontAwesomeIcon icon={icon[i]} />
            </div>
          </span>
          <span className="title">{content[i]}</span>
        </Item>,
      );
    }
    return result;
  };
  return (
    <IconListBox>
      <div className="container">
        <ul>{rendering()}</ul>
      </div>
    </IconListBox>
  );
};
