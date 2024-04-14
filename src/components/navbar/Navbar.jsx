import { Link, NavLink } from "react-router-dom";
import brand from "/brandkit.png";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import profile from "../../assets/profile-circle.svg";
const Navbar = () => {
  const { user, logOut, loader } = useContext(AuthContext);
  // console.log(user.photoURL);
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#ff671b] underline" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-[#ff671b] underline" : ""
          }
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/inquiry"
          className={({ isActive }) =>
            isActive ? "text-[#ff671b] underline" : ""
          }
        >
          Inquiry
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/update-profile"
          className={({ isActive }) =>
            isActive ? "text-[#ff671b] underline" : ""
          }
        >
          Update Profile
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="my-4">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-para text-xl font-semibold"
            >
              {links}
            </ul>
          </div>
          <img className="w-1/5" src={brand} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-para text-xl font-semibold">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-3 font-para">
          {user ? (
            <div className="flex items-center gap-3">
              <div className="tooltip" data-tip={user.displayName}>
                <div className="avatar w-10 border border-[#ff671b] p-1 rounded-full ">
                  <div className="w-full rounded-full mx-auto">
                    <img src={user.photoURL ? user.photoURL : profile} />
                  </div>
                </div>
              </div>
              <button
                onClick={logOut}
                className="btn btn-sm text-white bg-[#ff671b] hover:bg-[#ff671bcb] text-lg"
              >
                Log Out
              </button>
            </div>
          ) : loader ? (
            <span className="loading loading-infinity loading-lg"></span>
          ) : (
            <div className="flex gap-3">
              <Link to={"/login"}>
                <button className="btn btn-sm bg-[#ff671b] hover:bg-[#ff671bcb] text-lg text-white">
                  Login
                </button>
              </Link>
              <p className="font-para text-xl font-semibold">Or</p>
              <Link to={"/register"}>
                <button className="btn btn-sm bg-[#ff671b] hover:bg-[#ff671bcb] text-lg text-white">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
