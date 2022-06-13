import styled from '@emotion/styled';

type ListProps = {};
export const ClaymorphismList_1Box = styled.div`
  .container {
    position: relative;
    width: 350px;
    min-height: 500px;
    background: #2f363e;
    border-radius: 30px;
    padding: 50px;
    box-shadow: 25px 25px 75px rgba(0, 0, 0, 0.25), 10px 10px 70px rgba(0, 0, 0, 0.25),
      inset 5px 5px 10px rgba(0, 0, 0, 0.5), inset 5px 5px 20px rgba(255, 255, 255, 0.2),
      inset -5px -5px 15px rgba(0, 0, 0, 0.75);
    h3 {
      color: #fff;
      font-weight: 700;
      font-size: 1.2rem;
    }
    .list {
      position: relative;
      display: flex;
      margin: 20px 0;
      cursor: pointer;
      &:before {
        content: '';
        position: absolute;
        width: 45px;
        height: 45px;
        background: #1f83f2;
        border-radius: 22.5px;
        box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.25), inset 2px 2px 5px rgba(255, 255, 255, 0.25),
          inset -3px -3px 5px rgba(0, 0, 0, 0.5);
        transition: 0.5s;
      }
      .rank {
        position: relative;
        min-width: 45px;
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        margin-right: 10px;
        &:before {
          content: '';
          position: absolute;
          width: 30px;
          height: 30px;
          background: #2f363e;
          border-radius: 50%;
          transform: scale(0);
          transition: 0.5s;
        }
        span {
          position: relative;
          font-weight: 600;
          font-size: 1rem;
          color: #fff;
          transition: 0.5s;
        }
      }
      &:hover {
        &:before {
          width: 100%;
        }
        .rank:before {
          transform: scale(1);
        }
        .creator h4,
        .creator p {
          color: #fff;
        }
      }
      .creator {
        position: relative;
        line-height: 1.15rem;
        padding: 3px;
        h4 {
          font-weight: 600;
          color: #bcbcc0;
          transition: 0.5s;
        }
        p {
          font-weight: 400;
          color: #95999d;
          font-size: 0.85rem;
          transition: 0.5s;
        }
      }
    }
  }
`;
export const ListItem = styled.li<ListProps>``;
