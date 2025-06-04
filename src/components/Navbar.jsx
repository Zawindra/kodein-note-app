import { useState } from "react";

export default function Navbar({ onSearch }) {
  return (
    <nav className="w-full py-4">
      <div className="flex flex-col sm:flex-row justify-center sm:justify-around items-center gap-4 sm:gap-40 py-4 px-4">
        <img src="/KodeinNote.png" alt="KodeinNote Logo" className="h-5" />

        <div className="relative w-full max-w-xs">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-1.5 w-full border border-gray-300 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => onSearch(e.target.value)}
          />
          <img
            src="/Search.png"
            alt="Search Icon"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
          />
        </div>
      </div>
    </nav>
  );
}
