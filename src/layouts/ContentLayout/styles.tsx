import styled from "@emotion/styled";

export const Section_contaioner = styled.section`
  height: 30rem;
  padding: 2rem;

  header {
    display: inline;
  }
  .content {
    background-color: #7f53ac;
    background-image: linear-gradient(315deg, #7f53ac 0%, #647dee 74%);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .titleNum {
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 0.5rem 0 0.5rem 1rem;
  }
  .titleText {
    font-size: 1.1rem;
    margin-left: 1rem;
  }
`;
