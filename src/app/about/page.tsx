"use client";
import React from "react";
import { User, Phone, Building2 } from "lucide-react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

const NSGAboutPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <Nav />

      {/* Hero Section */}
      <section className="px-6 py-16 lg:px-12 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">
          About <span className="text-blue-400">NSG</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          On a mission to accelerate the world&apos;s transition to sustainable
          money.
        </p>
      </section>

      {/* Main Content */}
      <section className="px-6 py-16 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <div className="border-l-4 border-blue-400 pl-6">
                  <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                </div>
                <div className="space-y-4 text-gray-300">
                  <div className="pl-6">
                    <h4 className="font-medium text-white mb-2">
                      An Entirely New Monetary System
                    </h4>
                  </div>
                  <div className="pl-6">
                    <h4 className="font-medium text-white mb-2">
                      Gold on the Blockchain
                    </h4>
                  </div>
                  <div className="pl-6">
                    <h4 className="font-medium text-white mb-2">
                      Borderless Currency
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  North Star Group shares a vision of a world where money is
                  honest, fair and backed by its true store of value. Our system
                  is designed for everyone who anticipates government backed
                  currencies to continue losing value.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  NSG has introduced a new form of money to stand the test of
                  time and overcome the pitfalls of traditional currencies
                  susceptible to inflation, weakened value and eventual
                  collapse. In today&apos;s financial model, where more and more
                  money is printed and the value of that currency is eroded,
                  economies and individuals are left to suffer the consequences.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Lorem Ipsum</h2>
                <p className="text-gray-300 leading-relaxed">
                  Lorem Ipsum has been the industry&apos;s standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It
                  was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Lorem Ipsum has been the industry&apos;s standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It
                  was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Leaders Section */}
      <section className="px-6 py-16 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">
            Industry Leaders in Fully Allocated
            <br />
            Precious Metals
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Lorem Ipsum has been the industry&apos;s standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-16 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mx-auto">
                <Building2 size={32} />
              </div>
              <h3 className="text-xl font-semibold">Name and address</h3>
              <p className="text-gray-300">
                Name and address, name and
                <br />
                address, name and address
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mx-auto">
                <User size={32} />
              </div>
              <h3 className="text-xl font-semibold">CEO</h3>
              <p className="text-gray-300">Chris Rodriguez</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mx-auto">
                <Phone size={32} />
              </div>
              <h3 className="text-xl font-semibold">Contact information</h3>
              <p className="text-gray-300">
                +44 12 3456 6789
                <br />
                northstargroup@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NSGAboutPage;
