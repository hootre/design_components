import styled from '@emotion/styled';

type Props = {
  string: String;
};

export const FocusHoverBox = styled.div`
  .container {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    h2 {
      position: relative;
      display: flex;
      gap: 5px;
      color: #fff;
      font-size: 4em;
      text-transform: uppercase;
      cursor: pointer;
    }
  }
`;

export const Item = styled.span<Props>`
  position: relative;
  filter: blur(5px);
  padding: 0 5px;
  transition: 0.5s;
  display: block;
  width: 60px;
  text-align: center;
  i {
    position: absolute;
    inset: 0;
    background: transparent;
  }
  &:hover {
    filter: blur(0px);
    transition: 0s;
    i {
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 2px;
        height: 8px;
        background: #fff;
        box-shadow: 0 88px #fff, 58px 88px #fff, 58px 0 #fff;
      }
      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 8px;
        height: 2px;
        background: #fff;
        box-shadow: 0 94px #fff, 52px 94px #fff, 52px 0 #fff;
      }
    }
  }
`;
