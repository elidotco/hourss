import React, { useState } from "react";

const ForgotPassword = ({ onBackToLogin }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submissionSuccess, setSubmissionSuccess] = useState(false); // New state for success message

  const handleForgotPassword = () => {
    setEmailError("");
    setSubmissionSuccess(false); // Reset the success message

    // Validate email
    if (!email) {
      setEmailError("Please enter your email");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email");
    } else {
      // Simulate an API call or password reset logic
      console.log("Forgot Password request submitted for:", email);

      // Display the success message
      setSubmissionSuccess(true);
    }
  };

  return (
    <div className="mt-10 s sm:w-full w-full">
      <h2 className="text-center text-xl font-semibold">Forgot Password</h2>
      <form className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
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
              className="block w-full rounded-md border-0 py-2 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6"
            />
            {emailError && <p style={{ color: "red" }}>{emailError}</p>}
          </div>
        </div>

        {/* Success Message */}
        {submissionSuccess && (
          <div className="text-green-600 text-sm text-center">
            Your password reset request has been submitted! Please check your
            email.
          </div>
        )}

        <div className="flex justify-between">
          <button
            type="button"
            onClick={handleForgotPassword}
            className="flex w-full justify-center rounded-md bg-[#4466f2] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#4466f2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4466f2]"
          >
            Reset Password
          </button>
        </div>

        <div className="text-center">
          <button
            type="button"
            onClick={onBackToLogin}
            className="text-orange-500 hover:underline"
          >
            Back to Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
