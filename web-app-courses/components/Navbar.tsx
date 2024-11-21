"use client";

import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-green-900 text-white h-15 py-5 px-10 flex justify-between items-center">
        {/* Brand Name with Circle */}
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 bg-white rounded-full"></div> {/* Circle */}
          <h1 className="font-bold text-lg">
            <a href="#" className="text-white">
              Brand Name
            </a>
          </h1>
        </div>

        {/* Main Navigation */}
        <div>
          <ul className="flex space-x-20">
            <li>
              <Link href="/" className="hover:text-red-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-red-500">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-red-500">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-red-500">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Auth Navigation */}
        <div>
          <ul className="flex space-x-10">
            <li>
              <Link href="/login" className="hover:text-red-500">
                Login
              </Link>
            </li>
            <li>
              <Link href="/signup" className="hover:text-red-500">
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
