import React, { FC } from "react";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";
const AppLayout: FC<{}> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="grid gap-4 grid-cols-2">
        <Outlet />
      </div>
    </>
  );
};
export default AppLayout;
