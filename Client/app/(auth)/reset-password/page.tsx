"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Lock, AlertCircle, CheckCircle2 } from "lucide-react";
import axios from "axios";
import { ResetPasswordTypes } from "@/types/users";
import getCookie from "@/utils/getCookie";

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
    setError,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const password = watch("password", "");

  // Password validation
  const validatePassword = (value: string) => {
    const hasMinLength = value.length >= 8;
    const hasUppercase = /[A-Z]/.test(value);
    const hasLowercase = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

    if (!hasMinLength) return "Password must be at least 8 characters";
    if (!hasUppercase) return "Password must contain an uppercase letter";
    if (!hasLowercase) return "Password must contain a lowercase letter";
    if (!hasNumber) return "Password must contain a number";
    if (!hasSpecialChar) return "Password must contain a special character";

    return true;
  };

  const onSubmit = async (data: ResetPasswordTypes) => {
    const accessToken: string | null = await getCookie("accessToken");
    try {
      await axios.patch(
        "https://mock-clone.onrender.com/api/auth/reset-password",
        data,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      reset();
    } catch (error) {
      console.log(error);
      setError("root.serverError", {
        type: "server",
        message: "Failed to reset password. Please try again.",
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="w-full max-w-md mx-auto p-8 bg-white my-20 rounded-xl shadow-lg border border-gray-100">
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Reset Your Password
        </h2>
        <p className="text-gray-500 text-sm mt-1 text-center">
          Please create a strong password for your account
        </p>
      </div>

      {isSubmitSuccessful && (
        <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-700 rounded-md flex items-center">
          <CheckCircle2 className="h-5 w-5 mr-2 flex-shrink-0" />
          <span>Password reset successfully!</span>
        </div>
      )}

      {errors.root?.serverError && (
        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-md flex items-center">
          <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
          <span>{errors.root.serverError.message}</span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            New Password
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-emerald-500" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className={`pl-10 pr-10 py-3 block w-full rounded-lg border ${
                errors.password
                  ? "border-red-300 ring-red-100"
                  : "border-gray-200 group-focus-within:border-emerald-400"
              } focus:outline-none focus:ring-4 focus:ring-blue-50 transition-all duration-200`}
              placeholder="Enter new password"
              {...register("password", {
                required: "Password is required",
                validate: validatePassword,
              })}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="mt-2 text-sm text-red-600 flex items-start">
              <AlertCircle className="h-4 w-4 mr-1 mt-0.5 flex-shrink-0" />
              <span>{errors.password.message}</span>
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Confirm Password
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-emerald-500" />
            </div>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              className={`pl-10 pr-10 py-3 block w-full rounded-lg border ${
                errors.confirmPassword
                  ? "border-red-300 ring-red-100"
                  : "border-gray-200 group-focus-within:border-emerald-400"
              } focus:outline-none focus:ring-4 focus:ring-blue-50 transition-all duration-200`}
              placeholder="Confirm your password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="mt-2 text-sm text-red-600 flex items-start">
              <AlertCircle className="h-4 w-4 mr-1 mt-0.5 flex-shrink-0" />
              <span>{errors.confirmPassword.message}</span>
            </p>
          )}
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
          <p className="text-sm font-medium text-gray-700 mb-3">
            Password requirements:
          </p>
          <ul className="space-y-2">
            <li
              className={`text-sm flex items-center ${
                password.length >= 8 ? "text-green-600" : "text-gray-500"
              }`}
            >
              <span className="mr-2 flex-shrink-0">
                {password.length >= 8 ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  <AlertCircle className="h-5 w-5" />
                )}
              </span>
              At least 8 characters
            </li>
            <li
              className={`text-sm flex items-center ${
                /[A-Z]/.test(password) ? "text-green-600" : "text-gray-500"
              }`}
            >
              <span className="mr-2 flex-shrink-0">
                {/[A-Z]/.test(password) ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  <AlertCircle className="h-5 w-5" />
                )}
              </span>
              One uppercase letter
            </li>
            <li
              className={`text-sm flex items-center ${
                /[a-z]/.test(password) ? "text-green-600" : "text-gray-500"
              }`}
            >
              <span className="mr-2 flex-shrink-0">
                {/[a-z]/.test(password) ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  <AlertCircle className="h-5 w-5" />
                )}
              </span>
              One lowercase letter
            </li>
            <li
              className={`text-sm flex items-center ${
                /[0-9]/.test(password) ? "text-green-600" : "text-gray-500"
              }`}
            >
              <span className="mr-2 flex-shrink-0">
                {/[0-9]/.test(password) ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  <AlertCircle className="h-5 w-5" />
                )}
              </span>
              One number
            </li>
            <li
              className={`text-sm flex items-center ${
                /[!@#$%^&*(),.?":{}|<>]/.test(password)
                  ? "text-green-600"
                  : "text-gray-500"
              }`}
            >
              <span className="mr-2 flex-shrink-0">
                {/[!@#$%^&*(),.?":{}|<>]/.test(password) ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  <AlertCircle className="h-5 w-5" />
                )}
              </span>
              One special character (!@#$%^&*)
            </li>
          </ul>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed font-medium text-sm"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Resetting Password...
            </span>
          ) : (
            "Reset Password"
          )}
        </button>
      </form>
    </div>
  );
}
