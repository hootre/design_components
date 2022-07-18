import styled from '@emotion/styled';

type Props = {
  clr: string;
};

export const IconListBox = styled.div`
  ul {
    position: relative;
    display: flex;
    gap: 25px;
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
  width: 60px;
  height: 60px;
  background: #fff;
  cursor: pointer;
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 25px rgba(256, 256, 256, 0);
  transition: 0.5s;
  &:hover {
    width: 180px;
    box-shadow: 0 10px 25px rgba(256, 256, 256, 0.5);
    .icon-icon {
      transform: scale(0);
      color: #fff;
      transition-delay: 0;
    }
    .title {
      transform: scale(1);
      transition-delay: 0.25s;
    }
  }
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 60px;
    opacity: 0;
    transition: 0.5s;
    background: linear-gradient(45deg, ${Props => Props.clr});
  }
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 60px;
    background: linear-gradient(45deg, ${Props => Props.clr});
    transition: 0.5s;
    filter: blur(15px);
    z-index: -1;
    opacity: 0;
  }
  &:hover:before {
    opacity: 1;
  }
  &:hover:after {
    opacity: 0.5;
  }
  span {
    z-index: 1;
    position: absolute;
    .icon-icon {
      color: #777;
      font-size: 1.75em;
      transition: 0.5s;
      transition-delay: 0.25s;
    }
  }
  .title {
    color: #777;
    font-size: 1.1em;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transform: scale(0);
    transition: 0.5s;
  }
`;
