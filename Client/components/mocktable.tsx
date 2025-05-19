"use client";

import { MockTableProps, MockFormData } from "@/types/mock";
import { Button } from "@/components/ui/button";
import { Trash2, Eye } from "lucide-react";
import axios from "axios";
export default function MockTable({ data }: MockTableProps) {
  //Todo : Delete a mock
  const handleDelete = async (id: string | undefined) => {
    try {
      await axios.delete(`https://mock-clone.onrender.com/api/mocks/${id}`);
    } catch (error) {
      console.error("Failed to delete mock:", error);
    }
  };
  return (
    <>
      <div className="relative overflow-x-auto shadow-md rounded-lg">
        <table className="w-full text-left">
          <thead className="bg-black text-white">
            <tr>
              <th className="px-6 py-3 font-semibold text-sm tracking-wider border-b border-black ">
                Name
              </th>
              <th className="px-6 py-3 font-semibold text-sm tracking-wider border-b border-black ">
                Content Type
              </th>
              <th className="text-center px-6 py-3 font-semibold text-sm tracking-wider border-b border-black ">
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
          <tbody className="bg-white">
            {data?.map((item: MockFormData, index: number) => (
              <tr
                key={index}
                className="hover:bg-gray-100 transition-colors duration-200 border-b border-gray-100"
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
                    <Button variant={"ghost"}>
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    <Button
                      variant={"ghost"}
                      onClick={() => handleDelete(item._id)}
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* {isOpen && <Model onClose={() => setIsOpen(false)} data={selectedData} />} */}
    </>
  );
}
