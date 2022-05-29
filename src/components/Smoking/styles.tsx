import styled from "@emotion/styled";

type Props = {
  num: number;
};

export const SmokingBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .cigarette {
    transform-style: preserve-3d;
    animation: animate 15s linear infinite;
  }
  @keyframes animate {
    0% {
      transform: perspective(1000px) rotateX(0deg);
    }
    100% {
      transform: perspective(1000px) rotateX(360deg);
    }
  }
`;

export const Item = styled.span<Props>`
  position: absolute;
  color: #fff;
  font-size: 1.35em;
  font-weight: 900;
  text-transform: uppercase;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  line-height: 0.76em;
  background: rgba(0, 0, 0, 0.25);
  transform: translate(-50%, -50%)
    rotateX(calc(${(Props) => Props.num} * 36deg)) translateZ(25px);
  i {
    font-style: normal;
    color: #ec9535;
    &:nth-of-type(1):after {
      content: "L";
      color: #ccc;
      text-transform: lowercase;
    }
    &:last-child {
      color: #f00;
      filter: blur(2px);
      text-shadow: -4px 0 2px #000, 8px 0 20px #f00, 8px 0 24px #f00,
        8px 0 0 #222, 12px 0 #555, 16px 0 #666, 20px 0 #888, 24px 0 #999;
    }
  }
`;
