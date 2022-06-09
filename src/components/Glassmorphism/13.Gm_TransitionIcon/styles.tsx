import styled from "@emotion/styled";

export const Gm_TransitionIconBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  section {
    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 50%;
      bottom: 0;
      z-index: 10;
      border-top: 1px solid rgba(255, 255, 255, 0.5);
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
    }
    .color {
      position: absolute;
      filter: blur(150px);
      &:nth-of-type(1) {
        left: 0;
        top: -350px;
        background: #ff359b;
        width: 100%;
        height: 600px;
      }
      &:nth-of-type(2) {
        right: 0;
        bottom: -150px;
        background: #fffd87;
        width: 500px;
        height: 450px;
      }
      &:nth-of-type(3) {
        right: 0;
        bottom: -50px;
        background: #00d2ff;
        width: 300px;
        height: 300px;
      }
    }
    ul {
      position: relative;
      display: flex;
      li {
        position: relative;
        list-style: none;
        margin: 10px;
        a {
          position: relative;
          top: 0;
          width: 80px;
          height: 80px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          font-size: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-right: 1px solid rgba(255, 255, 255, 0.2);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(4px);
          z-index: 1;
          box-shadow: 0 5px 45px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: top 0.5s, z-index 0s, transform 0.5s;
          transition-delay: 0.5s 0.5s 0s;
          &:hover {
            transition-delay: 0s, 0.5s, 0.5s;
            top: -50px;
            transform: translateY(50px);
            z-index: 11;
            &:before {
              transform: skewX(45deg) translateX(-150px);
            }
          }
          &:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 50px;
            height: 100%;
            background: rgba(255, 255, 255, 0.5);
            transform: skewX(45deg) translateX(150px);
            transition: 0.5s;
          }
        }
      }
    }
  }
`;
