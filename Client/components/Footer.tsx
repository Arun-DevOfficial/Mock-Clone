import { Github, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-6">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h1 className="font-semibold text-lg mb-2">FAQ</h1>
          <div className="flex flex-col md:flex-row gap-2 md:gap-5 items-center text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} Guvi Geek Private Ltd</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-600">
          <Link
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-black transition"
          >
            <p>Be an awesome Hacker, fork me</p>
            <Github className="w-5 h-5" />
          </Link>

          <Link
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-black transition"
          >
            <p>Made with love by @abstractapi</p>
            <Twitter className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
