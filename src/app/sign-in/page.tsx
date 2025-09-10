"use client";
import React, { useState } from "react";
import { Menu, X, ChevronUp } from "lucide-react";
import Image from "next/image";
import Nav from "@/components/nav";

const NSGSignUpPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <Nav />

      {/* Main Sign Up Section */}
      <section className="flex-1 px-6 py-16 lg:px-12 flex items-center justify-center">
        <div className="w-full max-w-md">
          {/* Logo and Title */}
          <div className="text-center mb-12">
            <Image
              src={"/logo.png"}
              alt="Logo"
              width={100}
              height={20}
              className="w-[100px] lg:w-[120px] mx-auto mb-6"
              priority
            />

            <div className="relative mb-8">
              <h1 className="text-3xl lg:text-4xl font-bold">
                Welcome to North Star Group
              </h1>
              {/* Decorative line */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <svg
                  width="120"
                  height="20"
                  viewBox="0 0 120 20"
                  className="text-blue-400"
                >
                  <path
                    d="M10 10 Q60 5, 110 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
            </div>

            <p className="text-gray-300 text-lg">
              Sign up with your email address or Google account.
            </p>
          </div>

          {/* Sign Up Form */}
          <div className="space-y-6">
            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="northstargroup@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-4 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-slate-700 transition-all"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Enter password "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-4 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-slate-700 transition-all"
              />
            </div>

            {/* Continue with Email Button */}
            <button className="w-full px-6 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors">
              Continue with email
            </button>

            {/* Divider */}
            <div className="flex items-center space-x-4">
              <div className="flex-1 h-px bg-slate-700"></div>
              <span className="text-gray-400 text-sm">OR</span>
              <div className="flex-1 h-px bg-slate-700"></div>
            </div>

            {/* Continue with Google Button */}
            <button className="w-full px-6 py-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold rounded-lg transition-colors flex items-center justify-center space-x-3">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path
                  fill="#4285f4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34a853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#fbbc05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#ea4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span>Continue with Google</span>
            </button>

            {/* Terms and Conditions */}
            <div className="text-center text-sm text-gray-400 mt-8">
              <p>
                By signing in or creating an account, you agree with our{" "}
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 lg:px-12 bg-slate-800 mt-auto">
        <div className="max-w-7xl mx-auto">
          {/* Newsletter and Logo */}
          <div className="flex flex-col lg:flex-row justify-between items-start mb-12">
            <div className="mb-8 lg:mb-0">
              <div className="flex items-center space-x-3 mb-6">
                <Image
                  src={"/logo.png"}
                  alt="Logo"
                  width={100}
                  height={20}
                  className="w-[40px] lg:w-[60px]"
                  priority
                />
                <span className="text-xl font-bold">North Star Group</span>
              </div>

              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-4">
                  Get The Latest Updates
                </h3>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your username"
                    className="flex-1 px-4 py-2 bg-slate-700 rounded-l-lg border border-slate-600 focus:outline-none focus:border-blue-400"
                  />
                  <button className="px-6 py-2 bg-slate-600 rounded-r-lg hover:bg-slate-500 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">PRODUCTS</h3>
              <div className="space-y-2 text-gray-300">
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  NSG Money
                </a>
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  Mobile App
                </a>
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  NSG Card
                </a>
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  Hardware Device
                </a>
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  NSG Mint
                </a>
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  NSG Exchange
                </a>
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  EPD
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">RESOURCES</h3>
              <div className="space-y-2 text-gray-300">
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  Fees
                </a>
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  Roadmap
                </a>
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  Transaction Explorer
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">COMPANY</h3>
              <div className="space-y-2 text-gray-300">
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  Team
                </a>
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  Media Centre
                </a>
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  Testimonials
                </a>
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  Contact us
                </a>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-4">DOWNLOADS</h3>
                <div className="space-y-2 text-gray-300">
                  <a
                    href="#"
                    className="block hover:text-white transition-colors"
                  >
                    Brand Resources
                  </a>
                  <a
                    href="#"
                    className="block hover:text-white transition-colors"
                  >
                    Documents
                  </a>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4">SUPPORT</h3>
                <div className="space-y-2 text-gray-300">
                  <a
                    href="#"
                    className="block hover:text-white transition-colors"
                  >
                    Knowledge Base
                  </a>
                  <a
                    href="#"
                    className="block hover:text-white transition-colors"
                  >
                    Video Lessons
                  </a>
                  <a
                    href="#"
                    className="block hover:text-white transition-colors"
                  >
                    User Guides
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-slate-700 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-wrap justify-center md:justify-start items-center space-x-4 text-sm text-gray-400">
                <span>© 2022 North Star Group</span>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of use
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Offering memorandum PDF
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Cashback Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NSGSignUpPage;
