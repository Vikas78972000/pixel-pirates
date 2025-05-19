// frontend/src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide">
          Resume Skill Extractor
        </h1>
        <nav>
          <ul className="flex gap-4 text-sm font-medium">
            <li>
              <Link to="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
