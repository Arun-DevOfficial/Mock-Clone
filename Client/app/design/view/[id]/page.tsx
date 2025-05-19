import { getMockById } from "@/utils/server-actions";
import Link from "next/link";
import { MoveLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const data = await getMockById(id);

  const parseJSON = (input: string) => {
    try {
      const cleaned = input?.replace(/,\s*}/g, "}")?.replace(/,\s*]/g, "]");
      return JSON.parse(cleaned || "{}");
    } catch {
      return input;
    }
  };

  const headers = parseJSON(data.httpHeader);
  const body = parseJSON(data.httpBody);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 sm:p-6 lg:p-8 flex flex-col justify-center items-center">
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg shadow-slate-200/50 overflow-hidden">
          {/* Header */}
          <div className="border-b border-slate-200/60 bg-white/40 px-6 py-4 flex items-center gap-2.5">
            <Link href="/">
              <MoveLeft size={22} />
            </Link>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Mock Details
            </h1>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Content Type Card */}
              <div className="group relative overflow-hidden rounded-lg border border-slate-200/60 bg-white/60 p-4 transition-all duration-200 hover:border-slate-300 hover:bg-white/80 hover:shadow-md">
                <div className="mb-3 flex items-center gap-2">
                  <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                    Content Type
                  </h2>
                  <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent"></div>
                </div>
                <div className="relative">
                  <pre className="overflow-x-auto rounded-md bg-slate-50/80 p-3 text-sm text-slate-800 shadow-inner ring-1 ring-slate-200/60 whitespace-pre-wrap break-words font-mono leading-relaxed">
                    {String(data.contentType)}
                  </pre>
                  <div className="absolute inset-0 rounded-md bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
                </div>
              </div>

              {/* Charset Card */}
              <div className="group relative overflow-hidden rounded-lg border border-slate-200/60 bg-white/60 p-4 transition-all duration-200 hover:border-slate-300 hover:bg-white/80 hover:shadow-md">
                <div className="mb-3 flex items-center gap-2">
                  <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                    Charset
                  </h2>
                  <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent"></div>
                </div>
                <div className="relative">
                  <pre className="overflow-x-auto rounded-md bg-slate-50/80 p-3 text-sm text-slate-800 shadow-inner ring-1 ring-slate-200/60 whitespace-pre-wrap break-words font-mono leading-relaxed">
                    {String(data.charset)}
                  </pre>
                  <div className="absolute inset-0 rounded-md bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>

            {/* Headers Card */}
            <div className="group relative overflow-hidden rounded-lg border border-slate-200/60 bg-white/60 p-4 transition-all duration-200 hover:border-slate-300 hover:bg-white/80 hover:shadow-md">
              <div className="mb-3 flex items-center gap-2">
                <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                  Headers
                </h2>
                <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent"></div>
              </div>
              <div className="relative">
                <pre className="overflow-x-auto rounded-md bg-slate-50/80 p-3 text-sm text-slate-800 shadow-inner ring-1 ring-slate-200/60 whitespace-pre-wrap break-words font-mono leading-relaxed">
                  {typeof headers === "object"
                    ? JSON.stringify(headers, null, 2)
                    : String(headers)}
                </pre>
                <div className="absolute inset-0 rounded-md bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
              </div>
            </div>

            {/* Body Card */}
            <div className="group relative overflow-hidden rounded-lg border border-slate-200/60 bg-white/60 p-4 transition-all duration-200 hover:border-slate-300 hover:bg-white/80 hover:shadow-md">
              <div className="mb-3 flex items-center gap-2">
                <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                  Body
                </h2>
                <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent"></div>
              </div>
              <div className="relative">
                <pre className="overflow-x-auto rounded-md bg-slate-50/80 p-3 text-sm text-slate-800 shadow-inner ring-1 ring-slate-200/60 whitespace-pre-wrap break-words font-mono leading-relaxed">
                  {typeof body === "object"
                    ? JSON.stringify(body, null, 2)
                    : String(body)}
                </pre>
                <div className="absolute inset-0 rounded-md bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
