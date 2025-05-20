"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { userTypes } from "@/types/users";
import Link from "next/link";
import { useRouter } from "next/navigation";

import axios from "axios";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userTypes>({
    defaultValues: {
      email: "",
      password:"",
    },
  });

  const router = useRouter();

  // Login user
  const onSubmit = async (data: userTypes) => {
    try {
      // Send user data to server
      const res = await axios.post("https://mock-clone.onrender.com/api/auth/signup", data);
      // Validate user response
      if (res.status === 200) {
        router.push("/signin"); // navigate to Login page
      }
    } catch (error) {
      console.error("Failed to dispatch username:", error);
    }
  };

  return (
    <>
      <div className="flex py-24 items-center justify-center">
        <div className="flex flex-col justify-center items-center px-6 py-12 lg:px-8 bg-white border border-gray-100 shadow w-full max-w-md rounded-lg">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Image
              className="mx-auto h-10 w-auto"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
              width={32}
              height={32}
            />
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              SignUp to your account
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="name"
                    {...register("email", {
                      required: "Email is required!",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters",
                      },
                    })}
                    placeholder="e.g John Doe"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600 sm:text-sm/6"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors?.email?.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="password"
                    {...register("password", {
                      required: "Password is required!",
                      minLength: {
                        value: 2,
                        message: "password must be at least 8 characters",
                      },
                    })}
                    placeholder="e.g ********"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600 sm:text-sm/6"
                  />
                  {errors?.password && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors?.password?.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <div className="flex items-center justify-end">
                  <div className="text-sm">
                    <Link
                      href="/forgot-password"
                      className="font-semibold text-emerald-600 hover:text-emerald-500"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-emerald-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                >
                  Sign in
                </button>
              </div>
            </form>
            <p className="mt-10 text-center text-sm/6 text-gray-500">
              Already a member?{" "}
              <Link
                href="/signin"
                className="font-semibold text-emerald-600 hover:text-emerald-500"
              >
                click here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
