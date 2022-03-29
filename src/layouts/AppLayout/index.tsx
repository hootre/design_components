import React, { FC } from "react";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";
const AppLayout: FC<{}> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 ">
        <Outlet />
      </div>
    </>
  );
};
export default AppLayout;
