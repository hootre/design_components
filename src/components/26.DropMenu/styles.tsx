import styled from '@emotion/styled';

export const DropMenuBox = styled.div`
  position: relative;
  width: 300px;
  top: -150px;
  height: 50px;
  &:before {
    content: '';
    position: absolute;
    right: 20px;
    top: 15px;
    z-index: 100;
    width: 8px;
    height: 8px;
    border: 2px solid #333;
    border-top: 2px solid #fff;
    border-right: 2px solid #fff;
    transform: rotate(-45deg);
    transition: 0.5s;
    pointer-events: none;
  }
  &.active {
    &:before {
      top: 22px;
      transform: rotate(-225deg);
    }
    .option {
      display: block;
    }
  }
  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    background: #fff;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
    padding: 12px 20px;
    border-radius: 10px;
  }
  .option {
    position: absolute;
    top: 70px;
    width: 100%;
    background: #fff;
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    overflow: hidden;
    display: none;
    div {
      padding: 12px 20px;
      cursor: pointer;
      &:hover {
        background: #62baea;
        color: #fff;
      }
      span {
        position: relative;
        top: 4px;
        font-size: 1.2rem;
        margin-right: 10px;
      }
    }
  }
`;
