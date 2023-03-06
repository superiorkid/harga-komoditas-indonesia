import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="p-3 bg-blue-600 flex place-items-center">
      <h1 className="font-bold text-2xl text-white px-4">Harga Bahan Pokok</h1>
      <Link
        href="/"
        className="p-2 font-bold font-white bg-blue-500 rounded-lg text-white"
      >
        Home
      </Link>
    </div>
  );
}

export default Navbar;
