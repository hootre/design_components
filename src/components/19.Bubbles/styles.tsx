import styled from '@emotion/styled'

type Props = {
  num: number
}

export const BubblesBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0c192c;
  overflow: hidden;
  .container {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    .bublles {
      position: relative;
      display: flex;
    }
  }
`

export const Item = styled.span<Props>`
  display: block;
  position: relative;
  width: 30px;
  height: 30px;
  background: #4fc3dc;
  margin: 0 4px;
  border-radius: 50%;
  box-shadow: 0 0 0 10px #4fc3dc44, 0 0 50px #4fc3dc, 0 0 100px #4fc3dc;
  animation: bubblesUp 15s linear infinite;
  animation-duration: calc(120s / ${Props => Props.num});
  &:nth-of-type(even) {
    background: #ff2d75;
    box-shadow: 0 0 0 10px #ff2d7544, 0 0 50px #ff2d75, 0 0 100px #ff2d75;
  }
  @keyframes bubblesUp {
    0% {
      transform: translateY(100vh) scale(0);
    }
    100% {
      transform: translateY(-10vh) scale(1);
    }
  }
`
