import React, { useEffect, useState } from "react";

import { Gm_GlassBox } from "./styles";

export const Gm_Glass = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  useEffect(() => {
    const update = (e: MouseEvent): void => {
      setX(e.x);
      setY(e.y);
    };
    window.addEventListener("mousemove", update);
    return () => {
      window.removeEventListener("mousemove", update);
    };
  }, [setX, setY]);
  const pointStyle = {
    left: `${x}px`,
    top: `${y}px`,
  };
  return (
    <Gm_GlassBox id="glassBox">
      <h2>Frosted Glass</h2>
      <div className="glass" style={pointStyle}></div>
    </Gm_GlassBox>
  );
};
