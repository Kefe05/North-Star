"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="px-6 py-4 lg:px-12">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Image
          src={"/logo.png"}
          alt="Logo"
          width={100}
          height={20}
          className="w-[100px] lg:w-[120px]"
          priority
        />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link
            href="#"
            className="hover:text-blue-400 hover:border-b-2 text-gray-300 border-blue-400 pb-1"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-gray-300 hover:text-blue-400 hover:border-b-2 border-blue-400  transition-colors"
          >
            Investor
          </Link>
          <Link
            href="#"
            className="text-gray-300 hover:text-blue-400 hover:border-b-2 border-blue-400  transition-colors"
          >
            Products
          </Link>
          <Link
            href="#"
            className="text-gray-300 hover:text-blue-400 hover:border-b-2 border-blue-400  transition-colors"
          >
            Roadmap
          </Link>
          <Link
            href="#"
            className="text-gray-300 hover:text-blue-400 hover:border-b-2  border-blue-400 transition-colors"
          >
            About
          </Link>
          <Link
            href="#"
            className="text-gray-300 hover:text-blue-400 hover:border-b-2 border-blue-400  transition-colors"
          >
            Support
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            href={"/sign-in"}
            className="px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Log In
          </Link>
          <Link
            href={"/sign-up"}
            className="px-6 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-6 space-y-4">
          <Link
            href="#"
            className="block hover:text-blue-400 text-gray-300 transition-all"
          >
            Home
          </Link>
          <Link
            href="#"
            className="block text-gray-300 hover:text-blue-400  transition-all"
          >
            Investor
          </Link>
          <Link
            href="#"
            className="block text-gray-300 hover:text-blue-400  transition-all"
          >
            Products
          </Link>
          <Link
            href="#"
            className="block text-gray-300 hover:text-blue-400  transition-all"
          >
            Roadmap
          </Link>
          <Link
            href="#"
            className="block text-gray-300 hover:text-blue-400  transition-all"
          >
            About
          </Link>
          <Link
            href="#"
            className="block text-gray-300 hover:text-blue-400  transition-all"
          >
            Support
          </Link>
          <div className="pt-4 space-y-2 flex flex-col">
            <Link
              href={"sign-in"}
              className="w-full px-6 py-2 bg-blue-500 rounded-lg text-center"
            >
              Log In
            </Link>
            <Link
              href={"/sign-up"}
              className="w-full px-6 py-2 bg-slate-700 rounded-lg text-center"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
