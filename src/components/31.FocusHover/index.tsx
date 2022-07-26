import React from 'react';
import { FocusHoverBox, Item } from './styles';

const str = ['z', 'z', 'a', 'n', 'g', 'd', 'o', 'n', 'g', 'j', 'u', 'n'];

export const FocusHover = () => {
  return (
    <FocusHoverBox>
      <div className="container">
        <h2>
          {str.map((item, index) => {
            return (
              <Item key={index} string={str[index]} id={'' + index}>
                <i></i>
                {str[index]}
              </Item>
            );
          })}
        </h2>
      </div>
    </FocusHoverBox>
  );
};
