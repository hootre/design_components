import styled from '@emotion/styled';

type CircleLine = {
  num: number;
};
export const Safari3DBox = styled.div`
  .safari {
    position: relative;
    width: 200px;
    height: 200px;
    background: #fff;
    border-radius: 50px;
    box-shadow: 0 20px 10px #ccc, 0 30px 30px rgba(204, 21, 21, 0.25), 0 18px 0 rgba(184, 91, 202, 0.5),
      0 50px 60px rgba(226, 79, 206, 0.1);
  }

  .circle_lines {
    position: absolute;
    inset: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(#1ec9ff, #2971e7);
    box-shadow: 0 -5px 0 5px rgba(0, 0, 0, 0.15), inset 0 10px 0 rgba(0, 0, 0, 0.1);
  }
  .circle_lines span:before {
    content: '';
    position: absolute;
    width: 2px;
    height: 6px;
    background: #fff;
    transform-origin: 0 150px;
    transform: rotate(3deg);
  }
  .niddle {
    position: absolute;
    width: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    inset: 55px;
    transform: translateX(30px) rotate(90deg);
    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.25));
    transition: 2s cubic-bezier(0.47, -0.48, 0.46, 1.54);
  }
  .safari:hover .niddle {
    transform: translateX(30px) rotate(405deg);
  }
  .niddle:before {
    content: '';
    position: absolute;
    top: -50px;
    height: 100px;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 70px solid #fb3b2e;
  }
  .niddle:after {
    content: '';
    position: absolute;
    top: 50px;
    height: 100px;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 70px solid #fff;
  }
`;
export const CircleLine = styled.span<CircleLine>`
  position: absolute;
  width: 1px;
  height: 12px;
  background: #fff;
  transform: translateY(-70px) rotate(calc(10deg * ${props => props.num}));
  transform-origin: 1px 75px;
  transition: 0.5s;
  filter: drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.15));
`;
