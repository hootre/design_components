import styled from "@emotion/styled";

type ListProps = {};
export const MagicIndicatorBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .navigation {
    position: relative;
    width: 400px;
    height: 60px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    ul {
      display: flex;
      width: 350px;
    }
    .indicator {
      position: absolute;
      top: -50%;
      width: 70px;
      height: 70px;
      background: #fff;
      border-radius: 50%;
      z-index: 1;
      transition: 0.5s;
      &:before {
        content: "";
        position: absolute;
        top: 0px;
        left: -25px;
        width: 30px;
        height: 30px;
        background: transparent;
        border-radius: 50%;
        box-shadow: 15px 18px #fff;
      }
      &:after {
        content: "";
        position: absolute;
        top: 0px;
        right: -25px;
        width: 30px;
        height: 30px;
        background: transparent;
        border-radius: 50%;
        box-shadow: -15px 18px #fff;
      }
    }
  }
`;
export const ListItem = styled.li<ListProps>`
  list-style: none;
  position: relative;
  /* 350 / 5 = 70 */
  width: 70px;
  height: 60px;
  z-index: 2;
  a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    text-align: center;
    font-weight: 500;
    .icon {
      position: relative;
      height: unset;
      display: block;
      line-height: 65px;
      font-size: 1.5rem;
      transition: 0.5s;
      color: #222327;
    }
    .text {
      position: absolute;
      background: #2196f3;
      color: #fff;
      padding: 2px 7px;
      border-radius: 12px;
      font-weight: 400;
      font-size: 0.75rem;
      letter-spacing: 0.05rem;
      transition: 0.5s;
      opacity: 0;
      transform: translateY(15px);
    }
  }
  &.active a {
    .icon {
      transform: translateY(-30px);
      color: #2196f3;
    }
    .text {
      transform: translateY(-4px);
      opacity: 1;
    }
  }
  &:nth-child(1).active ~ .indicator {
    transform: translateX(calc(70px * 0));
  }
  &:nth-child(2).active ~ .indicator {
    transform: translateX(calc(70px * 1));
  }
  &:nth-child(3).active ~ .indicator {
    transform: translateX(calc(70px * 2));
  }
  &:nth-child(4).active ~ .indicator {
    transform: translateX(calc(70px * 3));
  }
  &:nth-child(5).active ~ .indicator {
    transform: translateX(calc(70px * 4));
  }
`;
