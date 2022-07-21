import styled from '@emotion/styled';

type Props = {
  num: number;
};

export const CircularNavigationBox = styled.div`
  .container {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .menu {
      position: relative;
      width: 300px;
      height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      .toggle {
        position: absolute;
        width: 75px;
        height: 75px;
        background: #fff;
        color: #222327;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3em;
        cursor: pointer;
        transition: 0.5s;
      }
      .toggle.active {
        transform: rotate(315deg);
        box-shadow: 0 0 0 68px #fff;
        background: #222327;
        color: #fff;
      }
      .indicator {
        position: absolute;
        left: calc(50% + 2.5px);
        transform-origin: right;
        width: 100px;
        height: 1px;
        pointer-events: none;
        transition: 0.5s;
        &:before {
          content: '';
          position: absolute;
          top: -27.5px;
          left: 72px;
          width: 55px;
          height: 55px;
          background: #222327;
          box-shadow: 0 0 0 6px #29fd53;
          border-radius: 50%;
          transition: 0.5s;
          opacity: 0;
        }
      }
    }
    .menu.active .indicator {
      &:before {
        opacity: 1;
        top: -27.5px;
        left: -27.5px;
        background: #29fd53;
        box-shadow: 0 0 0 6px #222327;
      }
    }
    .menu.active li {
      visibility: visible;
      opacity: 1;
    }
    .menu li:nth-of-type(1).active ~ .indicator {
      transform: translateX(-103px) rotate(0deg);
    }
    .menu li:nth-of-type(2).active ~ .indicator {
      transform: translateX(-103px) rotate(45deg);
    }
    .menu li:nth-of-type(3).active ~ .indicator {
      transform: translateX(-103px) rotate(90deg);
    }
    .menu li:nth-of-type(4).active ~ .indicator {
      transform: translateX(-103px) rotate(135deg);
    }
    .menu li:nth-of-type(5).active ~ .indicator {
      transform: translateX(-103px) rotate(180deg);
    }
    .menu li:nth-of-type(6).active ~ .indicator {
      transform: translateX(-103px) rotate(225deg);
    }
    .menu li:nth-of-type(7).active ~ .indicator {
      transform: translateX(-103px) rotate(270deg);
    }
    .menu li:nth-of-type(8).active ~ .indicator {
      transform: translateX(-103px) rotate(315deg);
    }
  }
`;

export const Item = styled.li<Props>`
  &.active {
    transform: rotate(calc(360deg / 8 * ${Props => Props.num})) translateX(12px);
  }
  position: absolute;
  left: 10px;
  transform: rotate(calc(360deg / 8 * ${Props => Props.num})) translateX(40px);
  transform-origin: 140px;
  transition: 0.5s;
  visibility: hidden;
  opacity: 0;
  z-index: 10;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55px;
    height: 55px;
    font-size: 1.75em;
    color: #222327;
    transform: rotate(calc(360deg / -8 * ${Props => Props.num}));
    border-radius: 50%;
  }
`;
