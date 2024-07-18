import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

function HostLayout({}) {
  return (
    <>
      <div className="mt-8 flex text-slate-600 px-5">
        <NavLink
          end
          className={({ isActive }) =>
            isActive
              ? " myLink me-5 hover:text-lg text-slate-600 hover:text-slate-900  hover:underline underline-offset-2"
              : "me-5 hover:text-lg text-slate-600 hover:text-slate-900  hover:underline underline-offset-2"
          }
          to="/host"
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " myLink me-5 hover:text-lg text-slate-600 hover:text-slate-900"
              : "me-5 hover:text-lg text-slate-600 hover:text-slate-900  hover:underline underline-offset-2"
          }
          to="/host/income"
        >
          Income
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " myLink me-5 hover:text-lg text-slate-600 hover:text-slate-900"
              : "me-5 hover:text-lg text-slate-600 hover:text-slate-900  hover:underline underline-offset-2"
          }
          to="/host/van"
        >
          Vans
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " myLink me-5 hover:text-lg text-slate-600 hover:text-slate-900"
              : "me-5 hover:text-lg text-slate-600 hover:text-slate-900  hover:underline underline-offset-2"
          }
          to="/host/reviews"
        >
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}

export default HostLayout;
