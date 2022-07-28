import { text } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import { TextAnimationBox, Item, Text } from './styles';

const num = [
  [2, 3, 4, 5],
  [0, 1, 2, 3],
  [2, 3, 4, 5],
  [2, 3, 4, 5],
];

export const TextAnimation = () => {
  return (
    <TextAnimationBox>
      <div className="container">
        {num.map((item, index) => {
          return (
            <Item key={index} number={index} id={'' + index} className={'text'}>
              {num.map((item, second) => {
                return (
                  <Text key={second} number={second} id={'' + second}>
                    {num[index][second]}
                  </Text>
                );
              })}
            </Item>
          );
        })}
      </div>
    </TextAnimationBox>
  );
};
