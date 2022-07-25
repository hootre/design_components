import styled from '@emotion/styled';

type Props = {
  color: String;
};

export const IconHoverBox = styled.div`
  .container {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    ul {
      position: relative;
      display: flex;
      gap: 40px;
    }
  }
`;

export const Item = styled.li<Props>`
  position: relative;
  width: 100px;
  height: 100px;
  margin: 20px;
  display: flex;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 15px 15px 35px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  .icon {
    font-size: 6em;
  }
  span {
    position: absolute;
    padding: 2px;
    display: flex;
    width: 100%;
  }
  .one {
    color: transparent;
    height: 100%;
  }
  .two {
    z-index: 1;
    height: 0;
    transition: 0.5s ease-in-out;
    overflow: hidden;
    color: ${Props => Props.color};
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      font-family: 'fontawesome';
      border-bottom: 4px solid ${Props => Props.color};
      border-radius: 5px;
    }
  }
  &:hover {
    .two {
      height: 100%;
    }
  }
`;
