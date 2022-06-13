import styled from '@emotion/styled';

export const SearchInputBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #2c3441;
  height: 60px;
  border-radius: 40px;
  padding: 10px;
  input {
    width: 0;
    border: none;
    outline: none;
    padding: 0;
    background: none;
    font-size: 1.1rem;
    transition: 0.5s ease;
    height: 40px;
    line-height: 40px;
    color: #fff;
  }
  &:hover {
    input {
      width: 200px;
      padding: 0 10px;
    }
    .icon {
      background: #536179;
    }
  }

  .icon:hover {
    transform: rotate(360deg) scale(0.8);
  }

  .icon {
    color: #21dfcd;
    float: right;
    width: 40px;
    font-size: 1.3rem;
    height: 40px;
    border-radius: 50%;
    background: #2f3640;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
    cursor: pointer;
  }
`;
