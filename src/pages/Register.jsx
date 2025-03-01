import Lottie from "lottie-react";

import RegisterAnimationData from "../assets/register.json";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Register = () => {
  const { registerUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password);

    registerUser(email, password)
      .then((res) => {
        console.log("user created: ", res.user);
      })
      .catch((error) => {
        console.log("error message: ", error.message);
      });

    form.reset();
  };

  return (
    <div className="flex min-h-screen bg-base-100 my-10">
      {/* Left Section */}
      <div className="w-full md:w-2/3 flex justify-center items-center p-6">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          {/* Email/Password Form */}
          <form onSubmit={handleRegister}>
            <div className="mb-3">
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered w-full"
                required
              />
            </div>

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

            {/* Terms & Conditions */}
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" required />
                Agree to the{" "}
                <span className="text-green-600 cursor-pointer ml-1">
                  Terms & Conditions
                </span>
              </label>
              <a href="#" className="text-blue-600 text-sm">
                Forget Password?
              </a>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn bg-blue-600 text-white w-full">
              REGISTER
            </button>
          </form>

          <p className="mt-4">
            Already have an account?
            <span className="text-blue-600 ml-2">
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
      {/* Right Section */}
      <div className="hidden md:flex w-1/3 bg-blue-800 text-white p-10 flex-col justify-center">
        <h1 className="text-3xl font-bold">Create a free account today</h1>
        <p className="mt-4">
          Create your account to continue and explore new jobs.
        </p>
        <Lottie animationData={RegisterAnimationData}></Lottie>
      </div>
    </div>
  );
};

export default Register;
