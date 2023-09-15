import React from "react";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { LuFlower2 } from "react-icons/lu";

const LoginPage = () => {
  return (
    <div className="h-screen flex">
      {/* Columna Izquierda - Formulario */}
      <div className="w-1/2 p-8 flex flex-col  justify-center">
        <LuFlower2 className="mb-4 h-12 w-12 text-blue-300" />
        <h2 className="text-3xl font-semibold mb-2">Sign in to your account</h2>
        <p className="text-gray-600 mb-4">
          Not a member?{" "}
          <a href="#" className="text-indigo-600 hover:underline">
            Start a 14 day free trial
          </a>
        </p>
        <form action="#" method="POST">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-200"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-200"
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="mr-2"
              />
              <label
                htmlFor="remember-me"
                className="text-gray-700 font-medium"
              >
                Remember me
              </label>
            </div>
            <a href="#" className="text-indigo-600 hover:underline">
              Forgot password?
            </a>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700"
            >
              Sign in
            </button>
          </div>
        </form>

        {/* Botones de Twitter y GitHub */}
        <div className="mt-4">
          <p className="text-gray-700">Or continue with</p>
          <div className="flex mt-2">
            <a
              href="#"
              className="w-1/2 bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 mr-2 flex items-center justify-center"
            >
              <FaTwitter className="mr-2" /> Twitter
            </a>
            <a
              href="#"
              className="w-1/2 bg-gray-700 text-white font-semibold py-2 rounded-md hover:bg-gray-800 ml-2 flex items-center justify-center"
            >
              <FaGithub className="mr-2" /> GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Columna Derecha - Imagen */}
      <div className="w-1/2 hidden md:flex md:items-center">
        <img
          className="w-full rounded-xl"
          src="https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700&q=80"
          alt="Image Description"
        />
      </div>
    </div>
  );
};

export default LoginPage;
