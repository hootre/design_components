import styled from '@emotion/styled';

type ListProps = {
  num: number;
};
export const Gm_CardHover2Box = styled.div`
  background-color: #161623;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#f00, #f0f);
    clip-path: circle(30% at right 70%);
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#2196f3, #e91e63);
    clip-path: circle(20% at 10% 10%);
  }
  .container {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .card {
      position: relative;
      width: 300px;
      height: 400px;
      background: rgba(255, 255, 255, 0.05);
      margin: 20px;
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
      border-radius: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      backdrop-filter: blur(10px);
      .content {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        opacity: 0.5;
        transition: 0.5s;
        h3 {
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 500;
          font-size: 18px;
          text-align: center;
          margin: 20px 0 10px;
          line-height: 1.1em;
          span {
            font-size: 12px;
            font-weight: 300;
            text-transform: initial;
          }
        }
      }
      .imgBx {
        position: relative;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        overflow: hidden;
        border: 10px solid rgba(0, 0, 0, 0.25);
        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .sci {
        position: absolute;
        bottom: 50px;
        display: flex;
        li {
          margin: 0 10px;
          opacity: 0;
          a {
            color: #fff;
            font-size: 24px;
          }
        }
      }
      &:hover {
        .content {
          opacity: 1;
          transform: translateY(-20px);
        }
        .sci li {
          transform: translateY(0);
          opacity: 1;
        }
      }
    }
  }
`;
export const Gm_CardHover2Box_ListItem = styled.li<ListProps>`
  transform: translateY(40px);
  transition: 0.5s;
  transition-delay: calc(0.1s * ${props => props.num});
`;
