import styled from "@emotion/styled";

export const Card_1Box = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    position: relative;
    width: 1100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 30px;
    .card {
      position: relative;
      max-width: 300px;
      height: 215px;
      background: #fff;
      margin: 30px 10px;
      padding: 20px 15px;
      display: flex;
      flex-direction: column;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
      transition: 0.3s ease-in-out;
      &:hover {
        height: 420px;
        .content {
          visibility: visible;
          opacity: 1;
          margin-top: -40px;
          transition-delay: 0.3s;
        }
      }
      .imgBx {
        position: relative;
        width: 260px;
        height: 260px;
        top: -60px;
        left: 5px;
        img {
          max-width: 100%;
          border-radius: 4px;
        }
      }
      .content {
        h2 {
          font-size: 1.2rem;
          font-weight: bold;
        }
        position: relative;
        margin-top: -140px;
        padding: 10px 15px;
        text-align: center;
        color: #111;
        visibility: hidden;
        opacity: 0;
        transition: 0.3s ease-in-out;
      }
    }
  }
`;
