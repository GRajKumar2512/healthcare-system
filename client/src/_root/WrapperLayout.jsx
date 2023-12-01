import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const WrapperLayout = () => {
  const {
    name: currentName,
    email: currentEmail,
    role,
  } = useContext(UserContext);
  return (
    <section className="h-screen flex flex-col">
      <nav className="flex justify-between py-4">
        <div className="px-4 ">
          <h1 className="text-3xl font-bold tracking-wider text-primary">
            Healthcare
          </h1>
        </div>
        <div className="px-4 flex gap-4 items-center">
          <div>
            <p className="text-semibold">Welcome! {currentName}</p>
            <p className="text-semibold text-sm">{currentEmail}</p>
          </div>

          <button className="bg-primary px-2 py-1 rounded-md text-white">
            Logout
          </button>
        </div>
      </nav>
      <div className="flex-1 flex">
        <Sidebar>
          <Menu
            menuItemStyles={{
              button: {
                [`&.active`]: {
                  backgroundColor: "#13395e",
                  color: "#b6c8d9",
                },
              },
            }}
          >
            <MenuItem component={<Link to="/record/new" />}>Profile</MenuItem>
            <MenuItem component={<Link to="/bookings" />}>Bookings</MenuItem>
          </Menu>
        </Sidebar>
        <div className="flex-1 bg-green-100" id="container">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default WrapperLayout;
