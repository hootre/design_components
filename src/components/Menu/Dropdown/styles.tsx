import styled from "@emotion/styled";

type ListItemProps = {
  num: number;
};
export const DropdownBox = styled.div`
  display: gird;
  place-items: center;
  .dropdown {
    position: relative;
    .label {
      cursor: pointer;
      background: rgb(40, 40, 40);
      padding: 0.8rem 1rem;
      width: 100%;
      display: block;
      box-sizing: border-box;
      transition: all 0.3s;
    }
  }
  ul {
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
    a {
      color: #fff;
      display: flex;
      align-items: center;
      padding: 0.5rem 1rem;
      transition: all 0.2s;
      &:hover {
        border-left: 5px solid;
        background: rgb(37, 37, 37);
      }
    }
  }
`;
export const DropdownBox_ListItem = styled.li<ListItemProps>``;
