import styled from "@emotion/styled";

type ListProps = {
  num: number;
};
export const Gm_CardHoverBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    position: relative;
    width: 400px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 20px;
    padding: 20px 0;
    .card {
      position: relative;
      height: 250px;
      background: #fff;
      display: flex;
      width: 400px;
      margin: 30px 0;
      border-radius: 20px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      .imgBx {
        position: absolute;
        top: 10px;
        left: 10px;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        height: calc(100% - 20px);
        width: calc(100% - 20px);
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 5px 5px 30px rgba(0, 0, 0, 1);
        transition: 0.5s ease-in-out;
        img {
          max-width: 100px;
          transition: 0.5s ease-in-out;
        }
      }
      &:hover .imgBx {
        height: 150px;
        width: 150px;
        left: -75px;
        top: calc(50% - 80px);
        img {
          max-width: 75px;
        }
      }
      .content {
        position: absolute;
        right: 0;
        width: calc(100% - 75px);
        height: 100%;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        h3 {
          color: #ff0057;
          margin-bottom: 5px;
          font-size: 24px;
        }
        a {
          display: inline-block;
          margin-top: 10px;
          padding: 8px 20px;
          border-radius: 5px;
          background: #0095ff;
          text-decoration: none;
          color: #fff;
          font-weight: 500;
        }
      }
    }
  }
  @media (max-width: 992px) {
    .container {
      position: relative;
      width: 100%;
      flex-direction: column;
      align-items: center;
      .card {
        max-width: 300px;
        height: auto;
        flex-direction: column;
        background: transparent;
        margin: -20px 0;
        box-shadow: none;
        .imgBx {
          position: relative;
          width: 80%;
          height: 200px;
          top: 100px;
          left: 10%;
          img {
            max-width: 100px;
          }
        }
        &:hover {
          .imgBx {
            width: 80%;
            height: 200px;
            top: 100px;
            left: 10%;
            img {
              max-width: 100px;
            }
          }
        }
        .content {
          position: relative;
          width: 100%;
          background: #fff;
          box-shadow: none;
          border-radius: 20px;
          padding: 20px 40px;
          border-top: 100px solid #fff;
        }
      }
    }
  }
`;
export const BackSquareBox = styled.div<ListProps>``;
