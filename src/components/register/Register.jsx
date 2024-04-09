import { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { IoMdPhotos } from "react-icons/io";
import { FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Register = () => {
  const [viewPass, setVewPass] = useState(false);
  const [viewConfirmPass, setVewConfirmPass] = useState(false);
  return (
    <div className="min-h-[80vh] bg-log-reg-bg bg-cover bg-center bg-no-repeat rounded-2xl my-6 flex items-center">
      <div className=" flex items-center w-10/12 mx-auto">
        <form className="h-[65vh] w-full flex flex-col justify-center gap-4 p-6 backdrop-blur-sm bg-[#27dec04a] rounded-l-xl">
          <h1 className="font-bold text-4xl text-center">Register Now!</h1>
          <label className="input flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" placeholder="Your Name" />
          </label>
          <label className="input flex items-center gap-2">
            <IoMdPhotos />
            <input type="url" placeholder="Photo URL" />
          </label>
          <label className="input flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="email" placeholder="Email" />
          </label>
          <label className="input flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type={viewPass ? "password" : "text"}
                placeholder="password"
              />
            </div>
            <a onClick={() => setVewPass(!viewPass)}>
              {viewPass ? <FaRegEye /> : <FaRegEyeSlash />}
            </a>
          </label>
          <label className="input flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type={viewConfirmPass ? "password" : "text"}
                placeholder="Confirm password"
              />
            </div>
            <a onClick={() => setVewConfirmPass(!viewConfirmPass)}>
              {viewConfirmPass ? <FaRegEye /> : <FaRegEyeSlash />}
            </a>
          </label>
          <div className="flex gap-2">
            <input type="checkbox" />
            <h3 className="text-white">Accept terms & conditions</h3>
          </div>
          <button className="btn bg-[#27DEC0] hover:bg-[#27DEC0] border-0 text-2xl">
            Register
          </button>
          <p className="text-white text-center">
            Already registered? Proceed to{" "}
            <Link className="underline" to={"/login"}>
              Login
            </Link>
          </p>
        </form>
        <div className="h-[65vh] w-full bg-cover bg-center bg-no-repeat bg-log-reg-aside rounded-r-xl"></div>
      </div>
    </div>
  );
};

export default Register;
