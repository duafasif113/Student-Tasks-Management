import React from "react";
import { FaBookOpen } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 flex items-center justify-center p-6">

      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">

        {/* Left Section */}
        <div className="hidden md:flex bg-purple-600 text-white p-12 flex-col justify-center">

          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <FaBookOpen className="text-2xl" />
            </div>

            <h1 className="text-2xl font-bold">
              StudyFlow
            </h1>
          </div>

          <h2 className="text-4xl font-bold leading-tight">
            Organize your studies.
            <br />
            Achieve your goals.
          </h2>

          <p className="mt-5 text-purple-100 leading-relaxed">
            Manage your tasks, track your progress, and stay
            organized throughout your semester.
          </p>

          <div className="mt-8 space-y-4">

            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                ✓
              </span>
              <span>Manage your tasks</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                ✓
              </span>
              <span>Track subject progress</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                ✓
              </span>
              <span>Stay organized</span>
            </div>

          </div>
        </div>


        {/* Right Section */}
        <div className="p-8 sm:p-12 flex flex-col justify-center">

          {/* Mobile Logo */}
          <div className="flex md:hidden items-center gap-3 mb-10">
            <div className="w-11 h-11 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
              <FaBookOpen />
            </div>

            <h1 className="text-xl font-bold text-gray-800">
              StudyFlow
            </h1>
          </div>


          <div className="max-w-md w-full mx-auto">

            <p className="text-purple-600 font-medium text-sm mb-2">
              Welcome back 👋
            </p>

            <h2 className="text-3xl font-bold text-gray-800">
              Let's get started
            </h2>

            <p className="text-gray-500 mt-3">
              Sign in to manage your tasks and keep track of
              your academic progress.
            </p>


            {/* Login Button */}
            <button
              onClick={() => loginWithRedirect()}
              className="w-full mt-8 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3.5 rounded-xl transition duration-200 shadow-md hover:shadow-lg"
            >
              Continue with Auth0
            </button>


            <p className="text-xs text-gray-400 text-center mt-6">
              Secure authentication powered by Auth0
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;