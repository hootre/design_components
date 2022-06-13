import styled from '@emotion/styled';

type ListProps = {
  logoColor: string;
};
export const ListItem = styled.li<ListProps>`
  list-style: none;
  position: relative;
  width: 100%;
  height: 60px;
  padding: 0 10px;
  transition: 0.5s;
  a {
    position: relative;
    display: flex;
    align-items: center;
    width: 100px;
    text-align: left;
    .icon {
      position: absolute;
      left: 0;
      display: block;
      min-width: 55px;
      height: 55px;
      line-height: 60px;
      border-radius: 10px;
      color: #222;
      &:before {
        content: '';
        position: absolute;
        top: 10px;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${props => props.logoColor};
        filter: blur(8px);
        opacity: 0;
        transition: 0.5s;
      }
    }
    .text {
      position: relative;
      align-items: center;
      padding: 0 15px 0 70px;
      height: 60px;
      display: flex;
      color: #333;
      opacity: 0;
      visibility: hidden;
      transition: 0.5s;
    }
  }
  &.active {
    transform: translateX(30px);
    a {
      .icon {
        color: #fff;
        z-index: 10;
        background: ${props => props.logoColor};
        box-shadow: 2px 10px 15px ${props => props.logoColor};
      }
      .text {
        color: ${props => props.logoColor};
      }
    }
  }
`;
export const SideBar_1Box = styled.div`
  .navigation {
    position: absolute;
    inset: 20px 0 20px 20px;
    width: 75px;
    background: #fff;
    transition: 0.5s;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &.open {
      width: 250px;
      .menuToggle:before {
        transform: translateY(0px) rotate(45deg);
      }
      .menuToggle:after {
        transform: translateY(0px) rotate(-45deg);
        box-shadow: 0 0 0 #333;
      }
      ul li.active {
        transform: translateX(10px);
      }
      ul li a .text {
        opacity: 1;
        visibility: visible;
      }
    }
    .menuToggle {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 60px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.25);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: left;
      padding: 0 23px;
      &:before {
        content: '';
        position: absolute;
        width: 30px;
        height: 2px;
        background: #333;
        transform: translateY(-8px);
        transition: 0.5s;
      }
      &:after {
        content: '';
        position: absolute;
        width: 30px;
        height: 2px;
        background: #333;
        transform: translateY(8px);
        transition: 0.5s;
        box-shadow: 0 -8px 0 #333;
      }
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
`;
