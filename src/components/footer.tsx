import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
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
              <a href="#" className="block hover:text-white transition-colors">
                NSG Money
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Mobile App
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                NSG Card
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Hardware Device
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                NSG Mint
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                NSG Exchange
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                EPD
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">RESOURCES</h3>
            <div className="space-y-2 text-gray-300">
              <a href="#" className="block hover:text-white transition-colors">
                Fees
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Projects
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Roadmap
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Transaction Explorer
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">COMPANY</h3>
            <div className="space-y-2 text-gray-300">
              <a href="#" className="block hover:text-white transition-colors">
                About Us
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Team
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Media Centre
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Testimonials
              </a>
              <a href="#" className="block hover:text-white transition-colors">
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
  );
}
