"use client";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addMock } from "@/features/mockSlice";
import { ChevronDown } from "lucide-react";
import { MockFormData } from "../types/mock";
import axios from "axios";
import Loader from "./Loader";
import { useRouter } from "next/navigation";

export default function NewMockForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<MockFormData>();
  const router = useRouter();
  const dispatch = useDispatch();

  const onSubmit = async (data: MockFormData): Promise<void> => {
    try {
      const res = await axios.post(
        "https://mock-clone.onrender.com/api/mocks/new",
        data
      );
      if (!res.data) {
        throw new Error("response data is empty");
      }
      dispatch(addMock(res.data));
      router.push(`/design/confirmation/${res?.data?.id}`);
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
          {/* Response Content Type Dropdown */}
          <div className="flex-1 mb-4 md:mb-0">
            <div className="flex items-center mb-1">
              <label className="text-gray-700 text-sm font-medium">
                Response Content Type
              </label>
              <span className="ml-2 bg-emerald-400 text-white text-xs px-2 py-0.5 rounded">
                REQUIRED
              </span>
            </div>

            <div className="relative">
              <select
                {...register("contentType", {
                  required: "Content Type is required",
                })}
                className="w-full border border-gray-300 rounded px-3 py-2 pr-10 bg-white text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-300"
                defaultValue="application/json"
              >
                <option disabled value="">
                  Select content type
                </option>
                <option value="application/json">application/json</option>
                <option value="text/plain">text/plain</option>
                <option value="text/html">text/html</option>
                <option value="application/xml">application/xml</option>
                <option value="multipart/form-data">multipart/form-data</option>
              </select>
              {/* Chevron icon */}
              <ChevronDown
                size={16}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
              />
              {errors.contentType && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.contentType.message}
                </p>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-1">
              The Content-Type header that will be sent with the response.
            </p>
          </div>

          {/* Charset Dropdown */}
          <div className="flex-1">
            <div className="flex items-center mb-1">
              <label className="text-gray-700 text-sm font-medium">
                Charset
              </label>
              <span className="ml-2 bg-emerald-400 text-white text-xs px-2 py-0.5 rounded">
                REQUIRED
              </span>
            </div>

            <div className="relative">
              <select
                {...register("charset", {
                  required: "Charset is required",
                })}
                className="w-full border border-gray-300 rounded px-3 py-2 pr-10 bg-white text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-300"
                defaultValue="utf-8"
              >
                <option disabled value="">
                  Select charset
                </option>
                <option value="UTF-8">UTF-8</option>
                <option value="ISO-8859-1">ISO-8859-1</option>
                <option value="UTF-16">UTF-16</option>
                <option value="US-ASCII">US-ASCII</option>
                <option value="Windows-1252">Windows-1252</option>
              </select>
              {/* Chevron icon */}
              <ChevronDown
                size={16}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
              />
              {errors.charset && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.charset.message}
                </p>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-1">
              The Charset used to encode/decode your payload.
            </p>
          </div>
        </div>

        {/* HTTP Headers */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-1">
            <label className="text-gray-700 text-sm font-medium">
              HTTP Headers
            </label>
            <span className="bg-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded">
              OPTIONAL
            </span>
          </div>

          <textarea
            {...register("httpHeader")}
            style={{ minHeight: "75px" }}
            className="w-full border focus:outline-none border-gray-300 rounded px-3 py-2 h-24 font-mono text-sm focus:border-emerald-400"
            placeholder={'{"X-Foo-Bar":"Hello World"}'}
          />
          <p className="text-xs text-gray-500 mt-1">
            Customize the HTTP headers sent in the response. Define the headers
            as a JSON object.
          </p>
        </div>

        {/* HTTP Response Body */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-1">
            <label className="text-gray-700 text-sm font-medium">
              HTTP Response Body
            </label>
            <span className="bg-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded">
              OPTIONAL
            </span>
          </div>

          <textarea
            {...register("httpBody")}
            className="w-full border border-gray-300 rounded px-3 py-2 h-32 font-mono text-sm focus:outline-none focus:border-emerald-400"
            style={{ minHeight: "220px" }}
            placeholder={
              '{\n  "identifier": "6904c00d7-75d0-413a-b84b-35e155444678",\n  "login": "John Doe"\n  },\n  "permissions": {\n    "roles": [\n      "moderator"\n    ]\n  }\n}'
            }
          />
        </div>

        {/* Action Button */}
        <div className="flex items-center">
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 uppercase text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center min-w-48 shadow-md hover:shadow-lg disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? <Loader /> : "Generate Http Response"}
          </button>
        </div>
      </form>
    </div>
  );
}
