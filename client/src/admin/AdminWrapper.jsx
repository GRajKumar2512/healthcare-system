import React, { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Dropdown from "../components/shared/Dropdown";
import axios from "axios";

const AdminWrapper = () => {
  const navigate = useNavigate();
  const { name, email, setEmail, setRole, setName } = useContext(UserContext);

  async function handleLogout() {
    alert("are you sure ?");

    await axios.post("/logout");

    setRole(null);
    setEmail(null);
    setName(null);

    navigate("/");
  }

  return (
    <>
      <header className="bg-slate-400 fixed w-full">
        <nav className="py-4 flex justify-between px-10">
          <div>
            <h1 className="text-3xl">healthcare</h1>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <h3 className="text-xl font-semibold">Welcome! {name}</h3>
              <p className="text-sm font-semibold text-slate-700">{email}</p>
            </div>
            <button
              className="bg-gray-800 text-white px-4 py-1 rounded-md"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </nav>
      </header>

      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed top-0 left-0 pt-20 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to={"/admin"}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            <Dropdown value={"Patient"} route={"patient"} />
            <Dropdown value={"Nurse"} route={"nurse"} />
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <Outlet />
      </div>
    </>
  );
};

export default AdminWrapper;
