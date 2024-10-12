import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-center"> {/* Centered the flex container */}
        <div className="flex space-x-4">
          {/* Navigation Links */}
          <Link href="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Home</Link>
          <Link href="/about" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">About</Link>
          <Link href="/explore" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Explore</Link>
          <Link href="/contact" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Contact</Link>
          <Link href="/service" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Service</Link>
        </div>
      </div>
    </nav>
  );
}
