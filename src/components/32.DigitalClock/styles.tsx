import styled from '@emotion/styled';

type Props = {
  number: number;
  color: String;
  date: number;
};

export const DigitalClockBox = styled.div`
  .container {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    .clock {
      position: relative;
      width: 450px;
      height: 450px;
      background: #2f363e;
      border-radius: 50%;
      box-shadow: 10px 50px 70px rgba(0, 0, 0, 0.25), inset 5px 5px 10px rgba(0, 0, 0, 0.5),
        inset 5px 5px 20px rgba(0, 0, 0, 0.2), inset -5px -5px 15px rgba(0, 0, 0, 0.75);
      display: flex;
      justify-content: center;
      align-items: center;
      &:before {
        content: '';
        position: absolute;
        width: 8px;
        height: 8px;
        background: #2f363e;
        border: 3px solid #fff;
        border-radius: 50%;
        z-index: 100;
      }
      .circle1 {
        width: 240px;
        height: 240px;
        z-index: 8;
      }
      .circle2 {
        width: 180px;
        height: 180px;
        z-index: 7;
      }
    }
  }
`;

export const Item = styled.span<Props>`
  position: absolute;
  inset: 20px;
  color: #fff;
  text-align: center;
  transform: rotate(calc(30deg * ${Props => Props.number}));
  b {
    font-size: 2em;
    opacity: 0.25;
    font-weight: 600;
    display: inline-block;
    transform: rotate(calc(-30deg * ${Props => Props.number}));
  }
`;

export const Circle = styled.div<Props>`
  position: absolute;
  width: 300px;
  height: 300px;
  border: 2px solid rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 10;
  transform: rotateZ(${Props => Props.date}deg);
  i {
    position: absolute;
    width: 6px;
    height: 50%;
    background: ${Props => Props.color};
    opacity: 0.75;
    transform-origin: bottom;
    transform: scaleY(0.5);
  }
  &:nth-of-type(1) i {
    width: 2px;
  }
  &:nth-of-type(2) i {
    width: 6px;
  }
  &:before {
    content: '';
    position: absolute;
    top: -8.5px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: ${Props => Props.color};
    box-shadow: 0 0 20px ${Props => Props.color}, 0 0 60px ${Props => Props.color};
  }
`;
