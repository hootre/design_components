import styled from '@emotion/styled';

type Props = {
  number: number;
};

export const TextAnimationBox = styled.div`
  .container {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    gap: 10px;
    transform: rotateY(30deg) rotateX(10deg);
    &:hover .text {
      transform: rotateX(-360deg);
    }
    &:hover .text {
      &:last-of-type {
        transform: rotateX(630deg);
      }
    }
  }
`;

export const Item = styled.div<Props>`
  position: relative;
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  transition: 2.5s ease-in-out;
  transition-delay: calc(0.25s * ${Props => Props.number});
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #373737;
    transform-origin: left;
    transform: rotateY(90deg) translateX(-50px);
  }
  &:last-of-type span {
    background: linear-gradient(#29c040, #32ed4e);
    color: #333;
  }
  &: last-of-type {
    &:before {
      background: #29ab3c;
    }
  }
`;

export const Text = styled.span<Props>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(#434343, #535353);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4em;
  color: #fff;
  transform-style: preserve-3d;
  transform: rotateX(calc(90deg * ${Props => Props.number})) translateZ(50px);
`;
