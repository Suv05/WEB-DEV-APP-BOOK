import { NavLink } from "react-router-dom";
function Header({}) {
  return (
    <>
      <div
        className="flex flex-row py-6 px-3 font-serif rounded-md"
        style={{ backgroundColor: "#FAFFAF" }}
      >
        <div className="basis-3/4 text-xl">
          <b>
            <NavLink
              to="/"
              className="text-slate-900 hover:text-amber-300 hover:underline underline-offset-2"
            >
              #VANLIFE
            </NavLink>
          </b>
        </div>
        <div className="basis-1/4 text-lg">
          <NavLink
            to="/host"
            className={({ isActive }) =>
              isActive
                ? " myLink me-3 hover:text-xl text-slate-600 hover:text-slate-900  hover:underline underline-offset-2"
                : "me-3 hover:text-xl text-slate-600 hover:text-slate-900  hover:underline underline-offset-2"
            }
          >
            Host
          </NavLink>
          <NavLink
            to="/vans"
            className={({ isActive }) =>
              isActive
                ? " myLink me-3 hover:text-xl text-slate-600 hover:text-slate-900  hover:underline underline-offset-2"
                : "me-3 hover:text-xl text-slate-600 hover:text-slate-900  hover:underline underline-offset-2"
            }
          >
            Vans
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? " myLink me-3 hover:text-xl text-slate-600 hover:text-slate-900  hover:underline underline-offset-2"
                : "me-3 hover:text-xl text-slate-600 hover:text-slate-900  hover:underline underline-offset-2"
            }
            to="/about"
          >
            About
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Header;
