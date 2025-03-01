import Lottie from "lottie-react";
import { FaGoogle } from "react-icons/fa";
import LoginAnimationData from "../assets/login.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state || "/";
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    loginUser(email, password)
      .then((res) => {
        console.log("login succesefull : ", res.user);
        navigate(from);
      })
      .catch((error) => {
        console.log("error occured at: ", error.message);
      });

    form.reset();
  };

  const handleGoogle = () => {
    googleLogin()
      .then((res) => {
        console.log("Login successful with Google:", res.user);
        navigate(from);
      })
      .catch((error) => {
        console.log("Error occurred:", error.message);
      });
  };
  return (
    <div className="flex min-h-screen bg-base-100 my-10">
      {/* left Section */}
      <div className="hidden md:flex w-1/3 bg-blue-800 text-white p-10 flex-col justify-center">
        <h1 className="text-3xl font-bold">Welcome Back</h1>
        <p className="mt-4">
          Log in to continue and explore new job opportunities.
        </p>
        <Lottie animationData={LoginAnimationData}></Lottie>
      </div>

      {/* right Section */}
      <div className="w-full md:w-2/3 flex justify-center items-center p-6">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          {/* Social Sign-in */}

          <button
            onClick={handleGoogle}
            className="btn w-full flex items-center justify-center mb-2 hover:bg-blue-700 hover:text-white"
          >
            <FaGoogle className="mr-2" /> Google
          </button>

          <div className="flex items-center my-4">
            <div className="border-b w-full"></div>
            <span className="px-3 text-gray-500">Or</span>
            <div className="border-b w-full"></div>
          </div>

          {/* Email/Password Form */}
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="block text-gray-700 font-medium">E-mail</label>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="mb-3">
              <label className="block text-gray-700 font-medium">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" />
                Remember Me
              </label>
              <a href="#" className="text-blue-600 text-sm">
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn bg-blue-600 text-white w-full">
              LOGIN
            </button>
          </form>

          <p className="mt-4">
            Don&apos;t have an account?
            <span className="text-blue-600 ml-2">
              <Link to="/register">Register</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
