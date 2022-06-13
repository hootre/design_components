import styled from '@emotion/styled';

export const ListArrowBox = styled.div`
  ul {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    #marker {
      position: absolute;
      top: 10px;
      width: 86px;
      margin-top: -3px;
      height: 50px;
      transition: 0.5s;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &:before {
        content: '';
        width: 15px;
        height: 15px;
        border-top: 4px solid #30a3ff;
        border-right: 4px solid #30a3ff;
        transform: rotate(45deg) translate(-20px, 20px);
      }
      &:after {
        content: '';
        width: 15px;
        height: 15px;
        border-top: 4px solid #30a3ff;
        border-right: 4px solid #30a3ff;
        transform: rotate(225deg) translate(-21px, 21px);
      }
    }
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

export const Item = styled.li`
  a {
    position: relative;
    font-size: 2em;
    color: #fff;
    text-decoration: none;
    margin: 10px 0;
    display: inline-block;
  }
`;
