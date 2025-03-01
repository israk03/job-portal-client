import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/icons8-job-100.png";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

export default function Navbar() {
  const { user, logoutUser } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink>All Job</NavLink>
      </li>
      <li>
        <NavLink>Add a job</NavLink>
      </li>
      <li>
        <NavLink to="/myApplication">My Applications</NavLink>
      </li>
      <li>
        <NavLink>Profile</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <div className="flex flex-cols items-center gap-2">
          <div>
            <img className="w-10 h-10" src={Logo} alt="" />
          </div>
          <Link to="/" className="text-2xl font-semibold text-blue-600">
            Job Portal
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end flex gap-4">
        {user ? (
          <button onClick={logoutUser} className="btn bg-blue-600 text-white">
            Logout
          </button>
        ) : (
          <>
            <NavLink to="/register" className="link text-blue-600">
              Register
            </NavLink>
            <NavLink to="/login" className="btn bg-blue-600 text-white">
              Login
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}
