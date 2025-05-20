"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, AlertCircle, CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import axios from "axios";
import Link from "next/link";
import {ForgotPasswordType} from "@/types/users"

export default function ForgotPasswordForm() {
  const [isEmailSent, setIsEmailSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<ForgotPasswordType>({
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });
 
  // Todo : To send a email to user
  const onSubmit = async (data: ForgotPasswordType) => {
    try {
      await axios.post("https://mock-clone.onrender.com/api/auth/forget-password",data)
      // If successful, set email sent flag
      setIsEmailSent(true);
    } catch (error) {
        console.log(error);
      // Handle error
      setError("root.serverError", {
        type: "server",
        message: "Could not send reset link. Please try again.",
      });
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white my-24 rounded-xl shadow-lg border border-gray-100">
      <div className="flex flex-col items-center mb-8">
        <div className="rounded-full bg-blue-50 p-3 mb-4">
          <Mail className="h-8 w-8 text-emerald-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Forgot Password</h2>
        <p className="text-gray-500 text-sm mt-1 text-center">
          Enter your email and we{`'`}ll send you a link to reset your password
        </p>
      </div>

      {isEmailSent ? (
        <div className="text-center space-y-4">
          <div className="p-4 bg-green-50 border-l-4 border-green-500 text-green-700 rounded-md flex items-start">
            <CheckCircle2 className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
            <div className="text-left">
              <p className="font-medium">Check your inbox!</p>
              <p className="text-sm mt-1">
                We{`'`}ve sent you an email with a link to reset your password. Please check your inbox and spam folder.
              </p>
            </div>
          </div>
          
          <button
            type="button"
            onClick={() => setIsEmailSent(false)}
            className="mt-4 text-white hover:text-white text-sm font-medium flex items-center justify-center mx-auto"
          >
            Send another link
          </button>
        </div>
      ) : (
        <>
          {errors.root?.serverError && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-md flex items-center">
              <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
              <span>{errors.root.serverError.message}</span>
            </div>
          )}

          <div className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-emerald-500" />
                </div>
                <input
                  type="email"
                  id="email"
                  className={`pl-10 pr-4 py-3 block w-full rounded-lg border ${
                    errors.email ? "border-red-300 ring-red-100" : "border-gray-200 group-focus-within:border-emerald-400"
                  } focus:outline-none focus:ring-4 focus:ring-blue-50 transition-all duration-200`}
                  placeholder="Enter your email address"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
              </div>
              {errors.email && (
                <p className="mt-2 text-sm text-red-600 flex items-start">
                  <AlertCircle className="h-4 w-4 mr-1 mt-0.5 flex-shrink-0" />
                  <span>{errors.email.message}</span>
                </p>
              )}
            </div>

            <button
              type="button"
              onClick={handleSubmit(onSubmit)}
              disabled={isSubmitting}
              className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed font-medium text-sm flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                  Sending Link...
                </>
              ) : (
                <>
                  Send Reset Link
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Remember your password?{" "}
              <Link
                href="/signin"
                className="text-emerald-600 hover:text-emerald-800 font-medium"
              >
                Log in
              </Link>
            </p>
          </div>
        </>
      )}
    </div>
  );
}