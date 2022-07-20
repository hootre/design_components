import styled from '@emotion/styled';

export const SideDahsbordBox = styled.div`
  .container {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .navigation {
      position: absolute;
      background: #287bff;
      width: 80px;
      height: 55vh;
      border-left: 10px solid #287bff;
      border-radius: 50px;
      overflow: hidden;
      box-shadow: 15px 15px 25px rgba(0, 0, 0, 0.5);
      transition: 0.5s;
      .toggle {
        position: absolute;
        bottom: 15px;
        right: 15px;
        width: 50px;
        height: 50px;
        background: #fff;
        border-radius: 50%;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15);
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        &:before {
          content: '';
          position: absolute;
          width: 20px;
          height: 3px;
          border-radius: 3px;
          background: #365fa1;
          transform: translateY(-5px);
          transition: 1s;
        }
        &:after {
          content: '';
          position: absolute;
          width: 20px;
          height: 3px;
          border-radius: 3px;
          background: #365fa1;
          transform: translateY(5px);
          transition: 1s;
        }
      }
    }
    .navigation.active {
      width: 300px;
      border-radius: 20px;
      .toggle {
        &:before {
          transform: translateY(0px) rotate(-405deg);
        }
        &:after {
          transform: translateY(0px) rotate(225deg);
        }
      }
    }
    ul {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }
  }
`;

export const Item = styled.li`
  position: relative;
  list-style: none;
  width: 100%;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  &:hover {
    background: #fff;
    &:not(:first-of-type) a {
      color: #365fa1;
    }
  }
  &:nth-of-type(1) {
    top: 20px;
    margin-bottom: 40px;
    background: none;
  }
  &:not(:first-of-type) {
    &:hover {
      &:before {
        content: '';
        position: absolute;
        top: -20px;
        right: 0px;
        width: 20px;
        height: 20px;
        background: tranparent;
        border-bottom-right-radius: 20px;
        box-shadow: 7.5px 7.5px 0 7.5px #fff;
      }
      &:after {
        content: '';
        position: absolute;
        bottom: -20px;
        right: 0px;
        width: 20px;
        height: 20px;
        background: tranparent;
        border-top-right-radius: 20px;
        box-shadow: 7.5px -7.5px 0 7.5px #fff;
      }
    }
  }
  a {
    position: relative;
    display: flex;
    width: 100%;
    color: #fff;
    text-decoration: none;
    align-items: center;
    .icon {
      position: relative;
      display: flex;
      min-width: 60px;
      height: 60px;
      align-items: center;
      text-align: center;
      font-size: 1.75em;
      justify-content: center;
    }
    .title {
      position: relative;
      padding: 0 10px;
      text-align: start;
      white-space: nowrap;
    }
  }
`;
