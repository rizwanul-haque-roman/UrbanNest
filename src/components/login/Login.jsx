import { useContext, useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Login = () => {
  const [loginErr, setLoginErr] = useState("");
  const { loginUser, googleLogIn, gitHubLogIn } = useContext(AuthContext);
  const [viewPass, setVewPass] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location);
  const handleSubmit = (event) => {
    setLoginErr("");
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = form.get("email");
    const pass = form.get("pass");

    loginUser(email, pass)
      .then((result) => {
        console.log(result);
        Swal.fire("Login Successful");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => Swal.fire(error.message));
  };

  const loginWithGoogle = () => {
    googleLogIn()
      .then((result) => {
        console.log(result);
        Swal.fire("Login Successful");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => Swal.fire(error.message));
  };

  const loginWithGitHub = () => {
    gitHubLogIn()
      .then((result) => {
        console.log(result);
        Swal.fire("Login Successful");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => Swal.fire(error.message));
  };

  console.log(loginErr);

  return (
    <div className="min-h-[80vh] bg-log-reg-bg bg-cover bg-center bg-no-repeat rounded-2xl my-6 flex items-center font-para">
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/svg+xml" href="/logo.png" />
        <title>Urban Nest | Login</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className=" flex items-center w-10/12 mx-auto">
        <form
          onSubmit={handleSubmit}
          className="h-[65vh] w-full flex flex-col justify-center gap-4 p-6 backdrop-blur-sm bg-[#ff671b25] rounded-l-xl"
        >
          <h1 className="font-bold font-heading text-white text-5xl text-center">
            Login Now!
          </h1>
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
            <input type="email" name="email" placeholder="Email" required />
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
                name="pass"
                placeholder="password"
                required
              />
            </div>
            <a onClick={() => setVewPass(!viewPass)}>
              {viewPass ? <FaRegEye /> : <FaRegEyeSlash />}
            </a>
          </label>
          <a href="#" className="text-white font-medium hover:underline">
            Forgot Password?
          </a>
          <button className="btn bg-[#ff671b] hover:bg-[#ff671b] border-0 text-2xl text-white">
            Login
          </button>
          <p className="text-white text-center font-medium">
            Not registered yet? Proceed to{" "}
            <Link state={location.state} className="underline" to={"/register"}>
              Register
            </Link>
          </p>
          <div>
            <div className="flex justify-center">
              <p className="text-white font-para font-medium">Or Login With</p>
            </div>
            <div className="flex gap-6 text-3xl justify-center mt-7">
              <div
                onClick={loginWithGoogle}
                className="bg-[#ff671b] px-3 py-2 rounded-2xl"
              >
                <FaGoogle />
              </div>
              <div
                onClick={loginWithGitHub}
                className="bg-[#ff671b] px-3 py-2 rounded-2xl"
              >
                <FaGithub />
              </div>
            </div>
          </div>
        </form>
        <div className="h-[65vh] w-full bg-cover bg-center bg-no-repeat bg-log-reg-aside rounded-r-xl"></div>
      </div>
    </div>
  );
};

export default Login;
