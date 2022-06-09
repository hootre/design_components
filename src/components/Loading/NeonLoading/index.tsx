import React from "react";
import { NeonLoadingBox, NeonLoadingBox_ListItem } from "./styles";

export const NeonLoading = () => {
  const rendering = () => {
    const result = [];
    for (let i = 0; i < 20; i++) {
      result.push(
        <NeonLoadingBox_ListItem key={i} num={i}>
          {i}
        </NeonLoadingBox_ListItem>
      );
    }
    return result;
  };
  return (
    <NeonLoadingBox>
      <div className="loader">{rendering()}</div>
    </NeonLoadingBox>
  );
};
