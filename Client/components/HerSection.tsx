// import Image from "next/image";
// import Hero from "../public/assets/Image.png";
// import Link from "next/link";
// import { MoveRight } from "lucide-react";

// export default function HeroSection() {
//   return (
//     <>
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-12 lg:gap-16 py-12 lg:py-28">
//           {/* Text Content */}
//           <div className="flex-1 max-w-2xl text-center lg:text-left">
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-neutral-800 leading-tight">
//               Create Free Mock APIs Instantly
//             </h1>
//             <p className="mt-6 lg:mt-8 text-lg sm:text-xl lg:text-2xl text-gray-400 leading-relaxed">
//               Create, preview, and share mock REST APIs in seconds. No sign-up
//               required
//             </p>
//             <div className="mt-8 lg:mt-12">
//               <Link href="/design" className="bg-emerald-500 hover:bg-emerald-600 transition-colors inline-flex gap-2 items-center px-6 py-3 rounded-full font-medium text-base lg:text-lg text-white">
//                 Get Started
//                 <MoveRight size={18} />
//               </Link>
//             </div>
//           </div>

//           {/* Image */}
//           <div className="flex-1 max-w-lg lg:max-w-xl">
//             <Image
//               src={Hero}
//               width={450}
//               height={450}
//               alt="Mock API illustration"
//               className="w-full h-auto"
//               priority
//             />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }



import Image from "next/image";
import Hero from "../public/assets/Image.png";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-12 lg:gap-16 py-12 lg:py-28">
        {/* Text Content */}
        <div className="flex-1 max-w-2xl text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-neutral-800 leading-tight">
            Create Free Mock APIs Instantly
          </h1>
          <p className="mt-6 lg:mt-8 text-lg sm:text-xl lg:text-2xl text-gray-400 leading-relaxed">
            Create, preview, and share mock REST APIs in seconds. No sign-up
            required
          </p>
          <div className="mt-8 lg:mt-12">
            <Link 
              href="/design" 
              className="bg-emerald-500 hover:bg-emerald-600 transition-colors inline-flex gap-2 items-center px-6 py-3 rounded-full font-medium text-base lg:text-lg text-white"
            >
              Get Started
              <MoveRight size={18} />
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 max-w-lg lg:max-w-xl">
          <Image
            src={Hero}
            width={450}
            height={450}
            alt="Mock API illustration"
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}