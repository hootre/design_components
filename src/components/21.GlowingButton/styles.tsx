import styled from '@emotion/styled';

type Props = {
  color: String;
};

export const GlowingButtonBox = styled.div`
  .container {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 60px;
  }
`;

export const Item = styled.a<Props>`
  position: relative;
  background: #444;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.5em;
  letter-spacing: 0.1em;
  padding: 10px 30px;
  transition: 0.5s;
  &:hover {
    letter-spacing: 0.25em;
    background: ${Props => Props.color};
    color: ${Props => Props.color};
    box-shadow: 0 0 35px ${Props => Props.color};
    i:before {
      width: 20px;
      left: 20%;
    }
    i:after {
      width: 20px;
      left: 80%;
    }
  }
  &:before {
    content: '';
    position: absolute;
    inset: 2px;
    background: #27282c;
  }
  span {
    position: relative;
    z-index: 1;
  }
  i {
    position: absolute;
    inset: 0;
    display: block;
    &:before {
      content: '';
      position: absolute;
      top: -3.5px;
      left: 80%;
      width: 10px;
      height: 5px;
      border: 2px solid ${Props => Props.color};
      background: #27282c;
      transform: translateX(-50%);
      transition: 0.5s;
    }
    &:after {
      content: '';
      position: absolute;
      bottom: -3.5px;
      left: 20%;
      width: 10px;
      height: 5px;
      border: 2px solid ${Props => Props.color};
      background: #27282c;
      transform: translateX(-50%);
      transition: 0.5s;
    }
  }
`;
