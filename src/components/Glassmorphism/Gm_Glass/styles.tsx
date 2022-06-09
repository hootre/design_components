import styled from "@emotion/styled";

type ListProps = {
  num: number;
};
export const Gm_GlassBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url("https://images.pexels.com/photos/386025/pexels-photo-386025.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-position: center;
  background-size: cover;
  overflow: hidden;
  h2 {
    font-size: 5em;
    color: #fff;
    pointer-events: none;
    text-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  }
  .glass {
    position: absolute;
    transform: translate(-50%, -50%);
    pointer-events: none;
    width: 300px;
    height: 200px;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
    background: transparent;
    backdrop-filter: blur(10px);
    transition: 0.5s;
  }
`;
export const Gm_GlassBox_ListItem = styled.li<ListProps>``;
