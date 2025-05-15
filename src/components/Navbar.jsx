export default function Navbar() {
  return (
    <nav className="w-full py-4">
      <div className="flex justify-around items-center gap-40 py-4">
        <img src="/KodeinNote.png" alt="KodeinNote Logo" className="h-5" />

        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-1.5 w-52 border border-gray-300 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
