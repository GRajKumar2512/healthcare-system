import React from "react";
import LeftSideBar from "../components/shared/LeftSideBar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="w-full md:flex">
      <LeftSideBar />
      <section className="flex-grow bg-green-100 w-4/5 overflow-y-auto">
        <Outlet />
      </section>
    </div>
  );
};

export default RootLayout;
