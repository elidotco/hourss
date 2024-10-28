"use client";
import React, { useState } from "react";
import { Checkbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/16/solid";
import ForgotPassword from "../components/ForgotPassword"; // Assuming you save ForgotPassword in a separate file

const SignIn = () => {
  const [enabled, setEnabled] = useState(false);
  const [roles, setRoles] = useState("");
  const [rolesError, setRolesError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  // State to toggle the form

  const handleLogin = () => {
    let valid = true;
    setRolesError("");
    setEmailError("");
    setPasswordError("");

    if (!roles) {
      setRolesError("Please choose your role");
      valid = false;
    }

    if (!email) {
      setEmailError("Please enter your email");
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email");
      valid = false;
    }

    if (!password) {
      setPasswordError("Please enter your password");
      valid = false;
    }

    if (valid) {
      console.log("Logging in...");
    }
  };

  return (
    <main className="w-full flex h-screen">
      <div className="w-[67%] hidden lg:flex bg-white">
        <img src="/sign.jpg" alt="imagw" className="w-full h-full object-fit" />
      </div>
      <div className="w-full lg:w-[33%] px-4 h-full flex justify-center py-10">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-5 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="Your Company"
              src="/Copy.png"
              className="mx-auto h-20 w-auto"
            />
            <h2 className=" text-center leading-9 tracking-tight text-gray-900">
              HI There !
            </h2>
            <p className="text-center leading-9 tracking-tight text-gray-900">
              Login to your Dashboard
            </p>
          </div>

          {showForgotPassword ? (
            <ForgotPassword
              onBackToLogin={() => setShowForgotPassword(false)}
            />
          ) : (
            <div className="mt-5  sm:w-full w-full">
              <form className="space-y-4">
                <div className="border-1 border-gray-200">
                  <label
                    htmlFor="roles"
                    className="block pb-1 text-sm font-normal
                   leading-6 text-gray-900"
                  >
                    Login as
                  </label>
                  <select
                    id="roles"
                    name="roles"
                    value={roles}
                    onChange={(e) => setRoles(e.target.value)}
                    className="h-full w-full pl-2 rounded-md border-1 shadow-sm ring-1 ring-inset bg-transparent ring-gray-100 py-3 sm:text-sm"
                  >
                    <option value="" disabled hidden>
                      Your role
                    </option>
                    <option>App Admin</option>
                    <option>HR Manager</option>
                    <option>Department Manager</option>
                    <option>Employee</option>
                  </select>
                  {rolesError && (
                    <p style={{ color: "red" }} className="text-sm">
                      {rolesError}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-normal
                   leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Enter your Email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 outline-none py-2 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-200 sm:text-sm  sm:leading-6"
                    />
                    {emailError && (
                      <p style={{ color: "red" }} className="text-sm">
                        {emailError}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-normal
                   leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Enter your password"
                      className="block w-full rounded-md border-0 outline-none py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-200 pl-2 sm:text-sm sm:leading-6"
                    />
                    {passwordError && (
                      <p style={{ color: "red" }} className="text-sm">
                        {passwordError}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-row justify-between items-center">
                  <div className="flex cursor-pointer items-center">
                    <Checkbox
                      checked={enabled}
                      onChange={setEnabled}
                      className="group size-6 block border rounded-md bg-white/10 p-1 ring-1 ring-white/15 ring-inset data-[checked]:bg-orange-500"
                    >
                      <CheckIcon className="hidden size-4 fill-white group-data-[checked]:block" />
                    </Checkbox>
                    <p className="pl-1 flex-1 text-sm flex">Remember me</p>
                  </div>
                  <a
                    onClick={() => setShowForgotPassword(true)}
                    className="cursor-pointer text-sm text-orange-500"
                  >
                    Forgot Password?
                  </a>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={handleLogin}
                    className="flex w-full justify-center rounded-md bg-[#ff5714] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#ff5714] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5714]"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          )}

          <p className="text-center py-10">Copyright @ 2024 by HOURS</p>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
