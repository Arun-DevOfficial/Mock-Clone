import { Github, Headset } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-6 mt-8">
      <div className="container max-w-[80%] md:max-w-[70%] lg:max-w-[60%] mx-auto flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 pt-6">
        <ul className="flex flex-wrap gap-6 items-center justify-center sm:justify-start mb-4 sm:mb-0">
          <li>
            <Link
              href="#"
              className="font-medium text-gray-700 hover:text-emerald-600 transition-colors flex items-center gap-2"
            >
              <Github size={18} />
              Github
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="font-medium text-gray-700 hover:text-emerald-600 transition-colors flex items-center gap-2"
            >
              API Docs
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="font-medium text-gray-700 hover:text-emerald-600 transition-colors flex items-center gap-2"
            >
              <Headset size={18} />
              Contact
            </Link>
          </li>
        </ul>
        <span className="text-gray-600 text-sm">
          © {new Date().getFullYear()} MockAPI
        </span>
      </div>
    </footer>
  );
}
