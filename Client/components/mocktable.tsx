"use client";
// import Button from "@/components/Button";
// import { Trash, SquarePen, Eye } from "lucide-react";
import { useState } from "react";
import { MockTableProps, MockFormData } from "@/types/mock";
import Model from "./Model";

export default function MockTable({ data }: MockTableProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState<MockFormData | null>(null);
  
  console.log(selectedData,"Check IT");
  
  const handleViewClick = (data: MockFormData) => {
    setIsOpen(true);
    setSelectedData(data);
  };
  return (
    <>
      <div className="relative overflow-x-auto shadow-md rounded-lg">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-6 py-3 font-semibold text-sm tracking-wider border-b border-black ">
                Name
              </th>
              <th className="px-6 py-3 font-semibold text-sm tracking-wider border-b border-black ">
                Content Type
              </th>
              <th className="px-6 py-3 font-semibold text-sm tracking-wider border-b border-black ">
                Date
              </th>
              {/* <th className="px-6 py-3 font-semibold text-sm tracking-wider border-b border-black ">
                HTTP Header
              </th> */}
              <th className="px-6 py-3 font-semibold text-sm tracking-wider border-b border-black text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
            {data?.map((item: MockFormData, index: number) => (
              <tr
                key={index}
                className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <td className="px-6 py-4 whitespace-nowrap">{item._id}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.contentType || "-"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.createdAt
                    ? new Date(item.createdAt).toLocaleString()
                    : "-"}
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center space-x-3">
                    <button
                      className="text-blue-500 hover:text-blue-700 transition-colors"
                      onClick={() => handleViewClick(item)}
                    >
                      <span className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        View
                      </span>
                    </button>
                    <button className="text-yellow-500 hover:text-yellow-700 transition-colors">
                      <span className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          />
                        </svg>
                        Edit
                      </span>
                    </button>
                    <button className="text-red-500 hover:text-red-700 transition-colors">
                      <span className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        Delete
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isOpen && <Model onClose={() => setIsOpen(false)} data={selectedData} />}
    </>
  );
}
