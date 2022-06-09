import styled from "@emotion/styled";

type ListProps = {
  num: number;
};
export const Gm_CalculatorBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#e91e63, #ffc107);
    clip-path: circle(22% at 30% 20%);
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#ffffff, #da00ff);
    clip-path: circle(20% at 70% 90%);
  }
  .tilt {
    z-index: 10;
  }
  .container {
    position: relative;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 6px;
    overflow: hidden;
    width: 300px;
    z-index: 10;
    backdrop-filter: blur(15px);
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);
    .calculator {
      position: relative;
      display: grid;
      .expression {
        grid-column: span 4;
        text-align: right;
        height: 20px;
        padding-right: 10px;
        padding-top: 10px;
        color: #555;
      }
      .value {
        grid-column: span 4;
        height: 70px;
        border: none;
        outline: none;
        text-align: right;
        padding: 10px;
        font-size: 30px;
        background: transparent;
        color: #fff;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        border-right: 1px solid rgba(255, 255, 255, 0.05);
      }
      button {
        display: grid;
        place-items: center;
        width: 75px;
        height: 75px;
        color: #fff;
        font-weight: 400;
        cursor: pointer;
        font-size: 20px;
        user-select: none;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        border-right: 1px solid rgba(255, 255, 255, 0.05);
        &:hover {
          transition: 0s;
          background: rgba(255, 255, 255, 0.05);
        }
        &:active {
          background: #14ff47;
          color: #192f00;
          font-size: 24px;
          font-weight: 500;
        }
      }
      .clear {
        grid-column: span 2;
        width: 150px;
        background: rgba(255, 255, 255, 0.05);
      }
      .plus {
        grid-row: span 2;
        height: 150px;
      }
      .equal {
        grid-column: span 2;
        width: 150px;
        background: rgba(255, 255, 255, 0.05);
      }
    }
  }
`;
export const BackSquareBox = styled.div<ListProps>``;
