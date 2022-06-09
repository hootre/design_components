import styled from '@emotion/styled'

type ListProps = {
  i: number
  x: number
  y: number
}
export const DotsMenuBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .navigation {
    position: relative;
    width: 70px;
    height: 70px;
    background: #212532;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    transition-delay: 0.8s;
    &.active {
      width: 200px;
      height: 200px;
      transition-delay: 0s;
    }
  }
`
export const MenuItem = styled.span<ListProps>`
  position: absolute;
  width: 7px;
  height: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 50%;
  transform: translate(calc(12px * ${props => props.x}), calc(12px * ${props => props.y}));
  transition: transform 0.5s, width 0.5s, height 0.5s, background 0.5s;
  transition-delay: calc(0.1s * ${props => props.i});
  & > span {
    transition: 0.5s;
    font-size: 0rem;
  }
  &.navActive {
    width: 45px;
    height: 45px;
    background: #333849;
    transform: translate(calc(60px * ${props => props.x}), calc(60px * ${props => props.y}));
    > span {
      font-size: 1.35rem;
      color: #fff;
      &:hover {
        color: #2dfc52;
        filter: drop-shadow(0 0 2px #2dfc52) drop-shadow(0 0 5px #2dfc52) drop-shadow(0 0 15px #2dfc52);
      }
    }
  }
`
