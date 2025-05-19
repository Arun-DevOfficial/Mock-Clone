import Image from "next/image";
import Code from "@/public/Code.png";
import Share from "@/public/Share.png";
import User from "@/public/User.png";

export default function Features() {
  return (
    <section className="flex flex-col items-center py-24 px-4">
      <div className="flex justify-center items-center flex-col mx-auto text-center max-w-2xl">
        <span className="bg-emerald-100 px-4 py-2 rounded-full text-sm font-medium text-emerald-800 mb-6">
          Features
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          The story and values behind our company
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Discover the powerful features that make our platform the perfect
          choice for developers
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full mt-16">
        <div className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-xl hover:border-emerald-200 transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center justify-center w-16 h-16 rounded-xl mb-6 transition-colors duration-300">
            <Image
              src={Code}
              width={50}
              height={50}
              alt="Code API"
              className="object-contain"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Create custom API Responses
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Easily paste or write your response data and create mock APIs in
            seconds. Perfect for testing and development.
          </p>
        </div>

        <div className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center justify-center w-16 h-16 rounded-xl mb-6 transition-colors duration-300">
            <Image
              src={Share}
              width={50}
              height={50}
              alt="Share API"
              className="object-contain"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Share Instantly
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Get a shareable URL for your mock API instantly. Collaborate with
            your team and share with stakeholders effortlessly.
          </p>
        </div>

        <div className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center justify-center w-16 h-16 rounded-xl mb-6 transition-colors duration-300">
            <Image
              src={User}
              width={50}
              height={50}
              alt="Developer Tools"
              className="object-contain"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Developer Friendly
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Works without registration. Quick testing for front-end and backend
            development with zero setup required.
          </p>
        </div>
      </div>
    </section>
  );
}
