import styled from "@emotion/styled";

type ListProps = {
  num: number;
  length: number;
};
export const CircularNavBox = styled.ul`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .menu {
    position: relative;
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .toggle {
    position: absolute;
    width: 75px;
    height: 75px;
    background: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.5s;
  }

  .toggle.active {
    transform: rotate(315deg);
    box-shadow: 0 0 0 68px;
    background: #222237;
    color: #fff;
  }
  .menu.active li {
    visibility: visible;
    opacity: 1;
  }
  .indicator {
    position: absolute;
    transform-origin: right;
    left: calc(50%);
    width: 100px;
    height: 1px;
    pointer-events: none;
    transition: 0.5s;
  }

  .indicator:before {
    content: "";
    position: absolute;
    top: -27.5px;
    left: -27.5px;
    width: 55px;
    height: 55px;
    background: #222237;
    box-shadow: 0 0 0 6px #29fd53;
    border-radius: 50%;
    transition: 0.5s;
    opacity: 0;
  }
  .menu.active .indicator::before {
    opacity: 1;
    top: -27.5px;
    left: -27.5px;
    background: #29fd53;
    box-shadow: 0 0 0 6px #222237;
  }
`;
export const ListItem = styled.li<ListProps>`
  position: absolute;
  left: 10px;
  list-style: none;
  visibility: hidden;
  opacity: 0;
  transform: rotate(calc(${(props) => (360 / props.length) * props.num}deg))
    translateX(40px);
  transform-origin: 140px;
  transition: 0.5s;
  z-index: 10;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55px;
    height: 55px;
    font-size: 1.75rem;
    color: #000;
    border-radius: 50%;
    transform: rotate(calc(${(props) => (360 / -props.length) * props.num}deg));
  }
  &.active {
    transform: rotate(calc(${(props) => (360 / props.length) * props.num}deg))
      translateX(12px);
  }

  &.active ~ .indicator {
    left: calc(50% + 2.5px);
    transform: translateX(-103px)
      rotate(${(props) => (props.num * 360) / props.length}deg);
  }
`;
