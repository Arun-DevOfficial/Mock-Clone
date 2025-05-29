"use client";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addMock } from "@/features/mockSlice";
import { useRef } from "react";
import { MockFormData } from "../types/mock";
import axios from "axios";
import Loader from "./Loader";
import { useRouter } from "next/navigation";
import ConverToParse from "@/utils/converToParse";
type accessKeyProps = {
  accessToken: string | undefined;
};

export default function NewMockForm({ accessToken }: accessKeyProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<MockFormData>();
  const router = useRouter();
  const dispatch = useDispatch();
  const controllerRef = useRef<AbortController | null>(null);
  const cancelRef = useRef(false);

  // Validate JSON format
  const validateJson = (value: string) => {
    if (!value) return true;
    try {
      JSON.parse(value);
      return true;
    } catch (e) {
      console.log(e);
    }
  };

  const onSubmit = async (data: MockFormData): Promise<void> => {
    // If the user clicked "Cancel", abort any request and skip submission
    if (cancelRef.current) {
      cancelRef.current = false;

      // Abort the request if it's ongoing
      if (controllerRef.current) {
        controllerRef.current.abort();
        console.log("Request aborted due to cancel.");
        controllerRef.current = null;
      }

      return;
    }

    console.log("Submitting data:", data);

    try {
      const parsedData = {
        ...data,
        httpHeader: data.httpHeader
          ? ConverToParse(data.httpHeader)
          : data.httpHeader,
        httpBody: data.httpBody ? ConverToParse(data.httpBody) : data.httpBody,
      };

      console.log("Parsed data:", parsedData);

      // Set up abort controller before making the request
      const controller = new AbortController();
      controllerRef.current = controller;

      const res = await axios.post(
        "https://mock-clone.onrender.com/api/mocks/new",
        parsedData,
        {
          signal: controller.signal,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`, // Make sure this variable contains your JWT token
          },
        }
      );

      if (!res.data) {
        throw new Error("Response data is empty");
      }

      dispatch(addMock(res.data));
      router.push(`/design/confirmation/${res.data.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-lg shadow p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Create New API Mock
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* API Name */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <label
              htmlFor="apiName"
              className="text-gray-700 text-base font-medium"
            >
              API Name
            </label>
            <span className="bg-emerald-500 font-medium text-white text-xs px-2 py-1 rounded">
              Required
            </span>
          </div>
          <input
            id="apiName"
            {...register("identifier", {
              required: "API name is required",
              minLength: {
                value: 3,
                message: "API name must be at least 3 characters",
              },
            })}
            type="text"
            className={`w-full border focus:outline-none border-gray-300 rounded-md px-4 py-3 text-base focus:border-emerald-400 ${
              errors.identifier ? "border-red-500" : ""
            }`}
            placeholder="My Mock API"
          />
          {errors.identifier && (
            <p className="text-red-500 text-sm mt-1">
              {errors.identifier.message}
            </p>
          )}
          <p className="text-xs text-gray-500 mt-2">
            Give your mock API a descriptive name
          </p>
        </div>

        {/* HTTP Headers */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <label
              htmlFor="httpHeader"
              className="text-gray-700 text-base font-medium"
            >
              HTTP Headers
            </label>
            <span className="bg-emerald-500 font-medium text-white text-xs px-2 py-1 rounded">
              Required
            </span>
          </div>

          <textarea
            id="httpHeader"
            {...register("httpHeader", { required: "Httpheader is required!" })}
            className={`w-full border focus:outline-none border-gray-300 rounded-md px-4 py-3 h-32 font-mono text-base focus:border-emerald-400 ${
              errors.httpHeader ? "border-red-500" : ""
            }`}
            placeholder={
              '{\n  "X-Foo-Bar": "Hello World",\n  "Content-Type": "application/json"\n}'
            }
          />
          {errors.httpHeader && (
            <p className="text-red-500 text-sm mt-1">
              {errors.httpHeader.message}
            </p>
          )}
          <p className="text-sm text-gray-500 mt-2">
            Customize the HTTP headers sent in the response. Define the headers
            as a JSON object.
          </p>
        </div>

        {/* HTTP Response Body */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <label
              htmlFor="httpBody"
              className="text-gray-700 text-base font-medium"
            >
              HTTP Response Body
            </label>
            <span className="bg-emerald-500 font-medium text-white text-xs px-2 py-1 rounded">
              Required
            </span>
          </div>

          <textarea
            id="httpBody"
            {...register("httpBody", {
              validate: validateJson,
            })}
            className={`w-full border border-gray-300 rounded-md px-4 py-3 h-64 font-mono text-base focus:outline-none focus:border-emerald-400 ${
              errors.httpBody ? "border-red-500" : ""
            }`}
            placeholder={
              '{\n  "identifier": "6904c00d7-75d0-413a-b84b-35e155444678",\n  "login": "John Doe",\n  "permissions": {\n    "roles": [\n      "moderator"\n    ]\n  }\n}'
            }
          />
          {errors.httpBody && (
            <p className="text-red-500 text-sm mt-1">
              {errors.httpBody.message}
            </p>
          )}
          <p className="text-sm text-gray-500 mt-2">
            Define the response body as a JSON object
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-center md:justify-start pt-4 space-x-4">
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 uppercase text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center min-w-48 shadow-md hover:shadow-lg disabled:cursor-not-allowed text-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? <Loader /> : "Generate HTTP Response"}
          </button>
          <button
            type="submit"
            onClick={() => {
              cancelRef.current = true;
            }}
            className="uppercase text-neutral-800 border border-gray-200 hover:bg-gray-200/50 hover:shadow cursor-pointer hover:text-gray-600 px-8 py-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center min-w-64 text-lg"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
