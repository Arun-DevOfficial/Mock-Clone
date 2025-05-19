import { Github, Headset } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-4">
      <div className="container max-w-[60%] mx-auto flex justify-between items-center border-t border-gray-200 pt-4">
        <ul className="flex gap-4 items-center">
          <Link
            href="#"
            className="font-medium text-md flex items-center gap-1"
          >
            <Github size={18} />
            Github
          </Link>
          <Link
            href="#"
            className="font-medium text-md flex items-center gap-1"
          >
            API Docs
          </Link>
          <Link
            href="#"
            className="font-medium text-md flex items-center gap-1"
          >
            <Headset size={18}/>
            Contact
          </Link>
        </ul>
        <span>©{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
