import styled from "@emotion/styled";

type ListProps = {
  num: number;
};
export const LoginFormBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom, #f1f4f9, #dff1ff);
    .color {
      position: absolute;
      filter: blur(150px);
      &:nth-of-type(1) {
        top: -350px;
        width: 100%;
        height: 600px;
        background: #ff359b;
      }
      &:nth-of-type(2) {
        bottom: -150px;
        left: 0px;
        width: 500px;
        height: 500px;
        background: #c7c571;
      }
      &:nth-of-type(3) {
        bottom: 50px;
        right: 100px;
        width: 300px;
        height: 300px;
        background: #00d2ff;
      }
    }
    .box {
      position: relative;
      .container {
        position: relative;
        width: 400px;
        min-height: 400px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        backdrop-filter: blur(5px);
        box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-right: 1px solid rgba(255, 255, 255, 0.2);
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        .form {
          position: relative;
          width: 100%;
          height: 100%;
          padding: 40px;
          h2 {
            position: relative;
            color: #fff;
            font-size: 24px;
            font-weight: 600;
            letter-spacing: 1px;
            margin-bottom: 40px;
            &:before {
              content: "";
              position: absolute;
              width: 80px;
              height: 4px;
              background: #fff;
              left: 0;
              bottom: -10px;
            }
          }
          .inputBox {
            width: 100%;
            margin-top: 20px;
            .label {
              top: -5px;
              left: 5px;
              color: #fff;
              &[data-shrink="true"] {
                color: #1976d2;
                & ~ .inputBack input {
                  border: 2px solid #69a5e0;
                }
              }
            }
            .inputBack {
              background: none;
              &:before,
              &:after {
                display: none;
              }
            }
            input {
              width: 100%;
              background: rgba(255, 255, 255, 0.2);
              border: none;
              outline: none;
              padding: 10px 20px;
              border-radius: 35px;
              border: 1px solid rgba(255, 255, 255, 0.5);
              border-right: 1px solid rgba(255, 255, 255, 0.2);
              border-bottom: 1px solid rgba(255, 255, 255, 0.2);
              font-size: 16px;
              letter-spacing: 1px;
              color: #fff;
              box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
              transition: 0.2s;
              &[type="submit"] {
                background: #fff;
                color: #666;
                max-width: 100px;
                cursor: pointer;
                margin-bottom: 20px;
                font-weight: 600;
              }
            }
          }
          .forget {
            margin-top: 5px;
            color: #fff;
            a {
              color: #fff;
              font-weight: 600;
            }
          }
        }
      }
    }
  }
`;
export const BackSquareBox = styled.div<ListProps>`
  position: absolute;
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  animation: animate 10s linear infinite;
  animation-delay: calc(-1s * ${(props) => props.num});
  @keyframes animate {
    0%,
    100% {
      transform: translateY(-20px);
    }
    50% {
      transform: translateY(20px);
    }
  }
  &:nth-of-type(1) {
    top: -50px;
    right: -60px;
    width: 100px;
    height: 100px;
  }
  &:nth-of-type(2) {
    top: 150px;
    left: -100px;
    width: 120px;
    height: 120px;
    z-index: 2;
  }
  &:nth-of-type(3) {
    bottom: 50px;
    right: -60px;
    width: 80px;
    height: 80px;
  }
  &:nth-of-type(4) {
    bottom: -80px;
    left: 100px;
    width: 50px;
    height: 50px;
  }
  &:nth-of-type(5) {
    top: -80px;
    left: 140px;
    width: 60px;
    height: 60px;
  }
`;
