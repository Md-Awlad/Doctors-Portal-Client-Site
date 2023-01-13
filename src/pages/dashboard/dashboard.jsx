import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const { user } = useAuthState(auth);
  const [admin] = useAdmin(user);
  console.log(admin);
  return (
    <div className="drawer drawer-mobile mt-[4.3rem]">
      <input id="dashboardSidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content mx-6 my-1">
        <h2 className="text-3xl font-bold text-secondary">
          Welcome to Dashboard
        </h2>
        <Outlet />
      </div>
      <div className="drawer-side border-r border-primary">
        <label htmlFor="dashboardSidebar" className="drawer-overlay"></label>
        <ul className="menu overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard" className="text-lg font-bold text-center">
              Appointment
            </Link>
          </li>
          <li>
            <Link to="/dashboard/review" className="text-lg font-bold">
              My Reviews
            </Link>
          </li>
          <li>
            <Link to="/dashboard/history" className="text-lg font-bold">
              My History
            </Link>
          </li>
          {admin ? (
            <li>
              <Link to="/dashboard/users" className="text-lg font-bold">
                All Users
              </Link>
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
