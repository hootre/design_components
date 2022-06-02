import styled from "@emotion/styled";

type Props = {
  num: number;
};

export const HoverEffectBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .loader {
      position: relative;
      transform: skewY(-15deg) translateX(50px) translateY(50px);
      animation: animateColor 2.5s linear infinite;
      &:before {
        content: "";
        position: absolute;
        top: 300px;
        height: 200px;
        width: 300px;
        background: #rgba(0, 0, 0, 0.1);
        transform-origin: bottom;
        transform: skewY(45deg);
        filter: blur(20px);
      }
    }
    @keyframes animateColor {
      0% {
        filter: hue-rotate(0deg);
      }
      100% {
        filter: hue-rotate(360deg);
      }
    }
  }
`;

export const Item = styled.span<Props>`
  position: relative;
  width: 200px;
  height: 40px;
  display: block;
  background: #3e3f46;
  transition: 0.5s;
  z-index: ${(Props) => Props.num};
  animation: moveAnimate 5s ease-in-out infinite;
  animation-delay: calc(-1s * ${(Props) => Props.num});
  &:hover {
    background: #33a3ee;
    transition: 0s;
    &:before {
      background: #1f5378;
      transition: 0s;
    }
    &:after {
      background: #2982b9;
      transition: 0s;
    }
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -150px;
    height: 100%;
    width: 150px;
    transform-origin: right;
    transform: skewY(45deg);
    transition: 0.5s;
    background: #2e3133;
  }
  &:after {
    content: "";
    position: absolute;
    top: -150px;
    left: 0;
    width: 100%;
    height: 150px;
    transform-origin: bottom;
    transform: skewX(45deg);
    transition: 0.5s;
    background: #35383e;
  }
  @keyframes moveAnimate {
    0%,
    100% {
      transform: translateX(-70px);
    }
    50% {
      transform: translateX(70px);
    }
  }
`;
