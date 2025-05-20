

"use client";

import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/Store/AppStore";
import Link from "next/link";
import { CheckCircle, Copy, ExternalLink, Trash2 } from "lucide-react";

export default function ConfirmationPage() {
  const params = useParams();
  const id = params?.id as string;

  const mock = useSelector((state: RootState) => state.mock[id]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  if (!mock) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="bg-white p-8 rounded-2xl border border-red-100">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
              <span className="text-2xl">❌</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Mock Not Found</h2>
            <p className="text-red-600">No mock found for ID: {id}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4 flex justify-center items-center">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-6">
            <div className="flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-white mr-3" />
              <h1 className="text-2xl font-bold text-white">Mock Created Successfully</h1>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            {/* Message */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                Message
              </label>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <p className="text-gray-900 text-lg leading-relaxed">{mock.message}</p>
              </div>
            </div>

            {/* Response ID */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                Response ID
              </label>
              <div className="flex items-center bg-gray-50 rounded-xl p-4 border border-gray-200">
                <code className="text-indigo-600 font-mono text-lg flex-1">{mock.id}</code>
                <button
                  onClick={() => copyToClipboard(mock.id)}
                  className="ml-3 p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-200"
                  title="Copy to clipboard"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Endpoint */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                API Endpoint
              </label>
              <div className="flex items-center bg-blue-50 rounded-xl p-4 border border-blue-200">
                <Link
                  href={mock.endpoint}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium flex-1 break-all transition-colors"
                >
                  {mock.endpoint}
                </Link>
                <div className="flex items-center ml-3 space-x-2">
                  <button
                    onClick={() => copyToClipboard(mock.endpoint)}
                    className="p-2 text-blue-400 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-100"
                    title="Copy URL"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  <Link
                    href={mock.endpoint}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-blue-400 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-100"
                    title="Open in new tab"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Delete URL */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                Delete URL
              </label>
              <div className="flex items-center bg-red-50 rounded-xl p-4 border border-red-200">
                <Link
                  href={mock.deleteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-800 font-medium flex-1 break-all transition-colors"
                >
                  {mock.deleteUrl}
                </Link>
                <div className="flex items-center ml-3 space-x-2">
                  <button
                    onClick={() => copyToClipboard(mock.deleteUrl)}
                    className="p-2 text-red-400 hover:text-red-600 transition-colors rounded-lg hover:bg-red-100"
                    title="Copy URL"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  <Link
                    href={mock.deleteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-red-400 hover:text-red-600 transition-colors rounded-lg hover:bg-red-100"
                    title="Delete mock"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={mock.endpoint}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 text-center flex items-center justify-center"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Test Endpoint
                </Link>
                <button
                  onClick={() => copyToClipboard(mock.endpoint)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center"
                >
                  <Copy className="w-5 h-5 mr-2" />
                  Copy URL
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Save these URLs for future reference. You{`'`}ll need them to access or delete your mock.
          </p>
        </div>
      </div>
    </div>
  )}