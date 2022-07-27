import React from 'react';
import { useState, useEffect } from 'react';
import { DigitalClockBox, Item, Circle } from './styles';

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const clr = ['#04fc43', '#fee800', '#ff2972'];

export const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  const hh = time.getHours() * 30;
  const mm = time.getMinutes() * 6;
  const ss = time.getSeconds() * 6;
  const date = [ss, mm, hh];

  return (
    <DigitalClockBox>
      <div className="container">
        <div className="clock">
          {clr.map((item, index) => {
            return (
              <Circle
                key={index}
                color={clr[index]}
                number={num[index]}
                className={'circle' + index}
                date={date[index]}
              >
                <i></i>
              </Circle>
            );
          })}
          {num.map((item, index) => {
            return (
              <Item key={index} number={num[index]} id={'' + index} color={clr[index]} date={date[index]}>
                <b>{num[index]}</b>
              </Item>
            );
          })}
        </div>
      </div>
    </DigitalClockBox>
  );
};
