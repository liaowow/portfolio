import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <nav className="bg-[#6D00F6] shadow-md p-8">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center text-[#FFF]">
          <div className="flex items-left gap-4 text-sm">
            <Link
              to="/about"
              className="hover:underline focus:underline"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="hover:underline focus:underline"
            >
              Projects
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="text-gray-800 font-thin text-lg hover:text-blue-600"
            >
              Annie Liao
            </Link>
          </div>

          {/* Right: Social icons */}
          <div className="flex items-center gap-3 text-lg">
            <a
              href="https://www.behance.net/annieliao"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaBehance />
            </a>
            <a
              href="https://www.linkedin.com/in/liaoannie/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/liaowow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>

          <div className="space-x-8 hidden md:flex">
            {navLinks.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className={`font-semibold hover:text-blue-600 ${
                  location.pathname === path ? "text-blue-600" : "text-gray-700"
                }`}
              >
                {name}
              </Link>
            ))}
          </div>

          {/* Mobile menu placeholder if you want to add later */}
        </div>
      </nav>

      <main className="flex-grow max-w-5xl mx-auto px-6 py-12">{children}</main>

      <footer className="bg-gray-100 text-center py-6 text-gray-600 text-sm">
        © {new Date().getFullYear()} Annie Liao. All rights reserved.
      </footer>
    </div>
  );
}
