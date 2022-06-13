import styled from '@emotion/styled';
type ListProps = {
  num: number;
};
export const Gm_ResMenuBox = styled.div`
  .container {
    .BGimg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    header {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      padding: 20px 100px;
      z-index: 100;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo {
        position: relative;
        font-size: 2em;
        color: #fff;
        text-transform: uppercase;
        font-weight: 700;
        text-decoration: none;
        text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
        transition: 0.5s;
      }
      #toggle {
        width: 40px;
        height: 40px;
        position: relative;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: 0.5s ease-in-out;
        -moz-transition: 0.5s ease-in-out;
        -o-transition: 0.5s ease-in-out;
        transition: 0.5s ease-in-out;
        cursor: pointer;
        span {
          display: block;
          position: absolute;
          height: 6px;
          width: 100%;
          background: #d3531a;
          border-radius: 9px;
          opacity: 1;
          left: 0;
          -webkit-transform: rotate(0deg);
          -moz-transform: rotate(0deg);
          -o-transform: rotate(0deg);
          transform: rotate(0deg);
          -webkit-transition: 0.25s ease-in-out;
          -moz-transition: 0.25s ease-in-out;
          -o-transition: 0.25s ease-in-out;
          transition: 0.25s ease-in-out;
        }
        span:nth-of-type(1) {
          top: 0px;
        }

        span:nth-of-type(2),
        span:nth-of-type(3) {
          top: 12px;
        }

        span:nth-of-type(4) {
          top: 24px;
        }
        &:before {
          content: 'Menu';
          position: absolute;
          right: 45px;
          text-transform: uppercase;
          color: #111;
          letter-spacing: 2px;
          font-size: 14px;
          padding: 4px 5px;
          background: #fff;
        }
      }
    }
    .glass {
      position: absolute;
      top: 0;
      left: 0;
      width: 40%;
      height: 100%;
      backdrop-filter: blur(15px);
      z-index: 1;
      box-shadow: 10px 0 15px rgba(0, 0, 0, 0.1);
      transition: 0.5s;
      transition-delay: 0s;
    }
    .content {
      position: relative;
      z-index: 10;
      text-align: center;
      transition: 0.5s;
      h2 {
        position: relative;
        color: #fff;
        font-size: 5vw;
        line-height: 0.55em;
        text-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
        font-family: 'Dancing Script', cursive;
        span {
          font-size: 0.2em;
          font-weight: 300;
          letter-spacing: 5px;
          background: #fff;
          color: #111;
          padding: 0 10px;
          text-shadow: 0 5px 5px rgba(0, 0, 0, 0);
          box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
          text-transform: uppercase;
        }
      }
    }
    .sci {
      position: absolute;
      bottom: 40px;
      right: 100px;
      display: flex;
      z-index: 100;
      li {
        margin: 5px;
        padding: 0 6px;
        background: #fff;
        a {
          color: #111;
          display: inline-block;
          letter-spacing: 2px;
          font-weight: 500;
          font-size: 12px;
          text-transform: uppercase;
        }
      }
    }
    .navigation {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 100;
      li {
        text-align: center;
        margin: 15px 0;
        opacity: 0;
        visibility: hidden;
        a {
          color: #111;
          font-size: 1.5em;
          letter-spacing: 4px;
          font-weight: 300;
          text-transform: uppercase;
          background: #fff;
          padding: 4px 10px;
          display: inline-block;
          transition: 0.5s;
          &:hover {
            background: #111;
            color: #fff;
            letter-spacing: 10px;
            text-transform: lowercase;
          }
        }
      }
    }
    &.open {
      #toggle {
        span:nth-of-type(1) {
          top: 18px;
          width: 0%;
          left: 50%;
        }
        span:nth-of-type(2) {
          -webkit-transform: rotate(45deg);
          -moz-transform: rotate(45deg);
          -o-transform: rotate(45deg);
          transform: rotate(45deg);
        }
        span:nth-of-type(3) {
          -webkit-transform: rotate(-45deg);
          -moz-transform: rotate(-45deg);
          -o-transform: rotate(-45deg);
          transform: rotate(-45deg);
        }
        span:nth-of-type(4) {
          top: 18px;
          width: 0%;
          left: 50%;
        }
        &:before {
          content: 'close';
        }
      }
      .glass {
        width: 100%;
        backdrop-filter: blur(20px);
        box-shadow: 10px 0 15px rgba(0, 0, 0, 0.5);
        transition-delay: 0s;
      }
      .content {
        opacity: 0;
        visibility: hidden;
        transform: translateX(-200px);
        transition-delay: 0s;
      }
      .sci {
        li {
          opacity: 0;
          visibility: hidden;
          transform: translateY(100px);
        }
      }
      .navigation {
        li {
          opacity: 1;
          visibility: visible;
          transform: translateX(0px);
        }
      }
    }
  }
  @media (max-width: 1200px) {
    .container {
      header {
        padding: 50px;
      }
      .sci {
        bottom: 20px;
        right: 20px;
      }
      .glass {
        width: 50%;
      }
      .content {
        h2 {
          font-size: 5em;
          span {
            font-size: 0.25em;
            font-weight: 300;
            letter-spacing: 2px;
            background: #fff;
            color: #111;
            padding: 0 5px;
          }
        }
      }
    }
  }
`;
export const ListItem = styled.li<ListProps>`
  transition: 0.5s;
  transition-delay: calc(0.2s * ${props => props.num});
`;
export const ListItem2 = styled.li<ListProps>`
  transition: 0.5s;
  transform: translateX(200px);
  transition-delay: calc(0.2s * ${props => props.num});
`;
