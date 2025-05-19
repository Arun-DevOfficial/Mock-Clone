import HerSection from "@/components/HerSection";
import Image from "next/image";
import Background from "../public/assets/Background.png";
import Features from "@/components/Features";
import Testimonial from "@/components/Testimonial";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* <Navbar /> */}
      <HerSection />
      <Features />
      <Testimonial />
      <Image
        src={Background}
        width={1000}
        height={1000}
        alt="Background"
        className="absolute -top-10 right-0 -z-10"
      />
    </main>
  );
}
