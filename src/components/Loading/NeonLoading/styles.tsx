import styled from "@emotion/styled";

type ListItemProps = {
  num: number;
};
export const NeonLoadingBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NeonLoadingBox_ListItem = styled.span<ListItemProps>``;
