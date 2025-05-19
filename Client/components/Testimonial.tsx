import Background from "@/public/Rectangle.png";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import TestimonialVideo from "@/public/Testimonial.png";
import Link from "next/link";

export default function Testimonial() {
  return (
    <>
      <section className="relative w-full h-screen py-18 flex justify-center items-center">
        <Image
          src={Background}
          fill
          alt="skew background"
          className="object-cover -skew-y-3 -z-10 py-20"
          priority
        />
        <div className="max-w-6xl w-full px-4 z-10">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="flex justify-between items-center gap-6 mb-12">
              <div className="flex flex-col justify-start">
                <span className="bg-white text-emerald-500 self-start font-medium px-6 py-3 rounded-full text-sm mb-8">
                  How it works
                </span>
                <h1 className="text-3xl lg:text-4xl font-semibold text-neutral-900 text-center lg:text-left">
                  Demo: How to create a Mock API
                </h1>
              </div>
              <Link href="/design" className="bg-emerald-500 hover:bg-emerald-600 transition-colors inline-flex gap-2 items-center px-6 py-3 rounded-full font-medium text-base lg:text-lg text-white whitespace-nowrap">
                Get Started
                <MoveRight size={18} />
              </Link>
            </div>
          </div>

          {/* Content Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Video/Image Section */}
              <div className="order-2 lg:order-1">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={TestimonialVideo}
                    alt="Demo Video Thumbnail"
                    width={500}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                  {/* Optional play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-30 transition-colors cursor-pointer group">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-l-6 border-l-emerald-500 border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="order-1 lg:order-2 space-y-6">
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900">
                  Simulate API Responses in Seconds
                </h2>
                <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                  Easily test your frontend or backend by generating mock
                  APIs—no setup, no server. Mocky helps developers simulate any
                  HTTP response with custom status codes, headers, and body
                  content. This short demo walks you through the entire process,
                  from selecting a status code to using the generated URL in
                  your project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
