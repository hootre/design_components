import styled from "@emotion/styled";

type ListProps = {};
export const CirCleLoaderBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .loader {
    position: relative;
    width: 400px;
    height: 400px;
    background: #2a2a2a;
    display: flex;
    justify-content: center;
    align-items: center;
    .circle {
      position: absolute;
      width: 300px;
      height: 300px;
      border: 2px solid #191919;
      border-radius: 50%;
      animation: animate 3s linear infinite;
      @keyframes animate {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      &:before {
        content: "";
        position: absolute;
        top: -12px;
        left: 50%;
        transform: translateX(-50%);
        width: 20px;
        height: 20px;
        background: green;
        border-radius: 50%;
        box-shadow: 0 0 20px green, 0 0 60px green;
      }
    }
    .circle2 {
      width: 200px;
      height: 200px;
      animation: animate 6s linear infinite;
      &:before {
        background: red;
        box-shadow: 0 0 20px red, 0 0 60px red;
      }
    }
    .circle3 {
      width: 100px;
      height: 100px;
      animation: animate 9s linear infinite;
      &:before {
        background: blue;
        box-shadow: 0 0 20px blue, 0 0 60px blue;
      }
    }
  }
`;
export const ListItem = styled.li<ListProps>``;
