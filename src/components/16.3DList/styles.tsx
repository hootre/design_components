import styled from '@emotion/styled';

type Props = {
  num: number;
};

export const ListBox = styled.div`
  ul {
    position: relative;
    transform: skewY(-15deg);
  }

  .container {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export const Item = styled.li<Props>`
  position: relative;
  list-style: none;
  width: 200px;
  background: #3e3f46;
  padding: 15px;
  z-index: ${Props => Props.num};
  transition: 0.5s;
  a {
    text-decoration: none;
    color: #999;
    display: block;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: 0.5s;
  }
  &:hover {
    background: #33a3ee;
    transform: translateX(-50px);
  }
  &:hover a {
    color: #fff;
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -40px;
    width: 40px;
    height: 100%;
    background: #2e3133;
    transform-origin: right;
    transform: skewY(45deg);
    transition: 0.5s;
  }
  &:hover:before {
    background: #1f5378;
  }
  &:after {
    content: '';
    position: absolute;
    top: -40px;
    left: 0;
    width: 100%;
    height: 40px;
    background: #35383e;
    transform-origin: bottom;
    transform: skewX(45deg);
    transition: 0.5s;
  }

  &:hover:after {
    background: #2982b9;
  }
  &:last-child:after {
    box-shadow: -120px 120px 20px rgba(0, 0, 0, 0.25);
  }
`;
