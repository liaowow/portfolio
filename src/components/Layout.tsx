import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <nav className="bg-white shadow-md">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Annie Liao
          </Link>

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
