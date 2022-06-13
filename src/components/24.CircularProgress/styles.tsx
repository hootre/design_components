import styled from '@emotion/styled';

type Props = {
  clr: string;
  num: number;
};

export const CircularProgressBox = styled.div`
  .container {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px 120px;
  }
`;

export const Item = styled.div<Props>`
  position: relative;
  width: 220px;
  height: 250px;
  background: #2a2a2a;
  display: flex;
  justify-content: center;
  align-items: center;
  .percent {
    position: relative;
    width: 150px;
    height: 150px;
    .dot {
      position: absolute;
      z-index: 10;
      inset: 5px;
      transform: rotate(calc(3.6deg * ${Props => Props.num}));
      animation: animateDot 2s linear forwards;
      @keyframes animateDot {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(3.6deg * ${Props => Props.num});
        }
      }
      &:before {
        content: '';
        position: absolute;
        top: -5px;
        left: 50%;
        width: 10px;
        height: 10px;
        background: ${Props => Props.clr};
        transform: translateX(-50%);
        border-radius: 50%;
        box-shadow: 0 0 10px ${Props => Props.clr}, 0 0 30px ${Props => Props.clr};
      }
    }
    svg {
      position: relative;
      width: 150px;
      height: 150px;
      transform: rotate(270deg);
      circle {
        width: 100%;
        height: 100%;
        fill: transparent;
        stroke-width: 2;
        stroke: #191919;
        transform: translate(5px, 5px);
        &:nth-of-type(2) {
          stroke: ${Props => Props.clr};
          stroke-dasharray: 440;
          stroke-dashoffset: calc(440 - (440 * ${Props => Props.num}) / 100);
          animation: fadeIn 1s linear forwards;
          animation-delay: 2.5s;
          opacity: 0;
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        }
      }
    }
    .number {
      position: absolute;
      inset: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      animation: fadeIn 1s linear forwards;
      animation-delay: 2.5s;
      h2 {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-weight: 700;
        font-size: 2.5em;
        span {
          font-weight: 300;
          color: #fff;
          font-size: 0.5em;
        }
      }
      p {
        font-weight: 300;
        color: #fff;
        font-size: 0.75em;
        letter-spacing: 2px;
        color: rgba(255, 255, 255, 0.75);
        text-transform: uppercase;
      }
    }
  }
`;
