import React from 'react';
import './styles.tsx';
import { ChangeButtonBox, Content } from './styles';
import { useState } from 'react';

export const ChangeButton = () => {
  const [toggle, setToggle] = useState(false);
  const clickedToggle = () => {
    setToggle(prev => !prev);
    console.log(toggle);
  };
  return (
    <ChangeButtonBox>
      <Content className={!toggle ? '' : 'active'}>
        <div className="container">
          <div className="textArea">
            <h2>Heading...</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, amet corporis dolores nulla mollitia
              aspernatur eaque debitis illo perspiciatis cumque, quo necessitatibus fugiat rem. Architecto
              necessitatibus esse sed nulla aspernatur?
            </p>
          </div>
          <div className="toggleBtn" onClick={clickedToggle}></div>
        </div>
      </Content>
    </ChangeButtonBox>
  );
};
