"use client";
import React, { useState } from "react";
import { Play, Smartphone, Globe, Lock, Star, Menu, X } from "lucide-react";
import {
  ChevronDown,
  Wallet,
  TrendingUp,
  Coins,
  ArrowRight,
  Shield,
  CreditCard,
  DollarSign,
} from "lucide-react";

import Image from "next/image";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import { Card } from "@/components/ui/card";
import Nav from "@/components/nav";

const Landing = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number | null) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = [
    "How do I know my gold and silver are there?",
    "How do I know my gold and silver are safe?",
    "Why should I trust Kinesis?",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <Nav />
      {/* Hero Section */}
      <Hero />

      {/* Video Section */}
      <section className="px-6 py-16 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Make your money work for you
          </h2>
          <div className="relative group cursor-pointer">
            <div className=" flex items-center justify-center">
              <Image
                src="/video.png"
                alt="Play"
                width={300}
                height={300}
                className="text-white ml-1 object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      {/* Ask More From Your Money Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-16">
            Ask a little more from your money
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Gold and Silver Card */}
            <div className="bg-slate-800/30 rounded-2xl p-8 hover:bg-slate-800/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Gold and silver
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Spend and save in digitalised physical gold and silver.
              </p>
              <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium flex items-center space-x-2">
                <span>Lead More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Earn Card */}
            <div className="bg-slate-800/30 rounded-2xl p-8 hover:bg-slate-800/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Earn</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Earn gold and silver just for using your account.
              </p>
              <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium flex items-center space-x-2">
                <span>Lead More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* NSG Card */}
            <div className="bg-slate-800/30 rounded-2xl p-8 hover:bg-slate-800/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">NSG Card</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Spend gold, silver and digital currency globally.
              </p>
              <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium flex items-center space-x-2">
                <span>Lead More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Trust and Security Card */}
            <div className="bg-slate-800/30 rounded-2xl p-8 hover:bg-slate-800/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Trust and security
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Be sure that your gold and silver are in safe hands.
              </p>
              <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium flex items-center space-x-2">
                <span>Lead More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* More Than Just Section */}
      <section className="px-6 py-16 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                More than just your
                <br />
                average bank
                <br />
                account
              </h2>
              <div className="space-y-4">
                <p className="text-lg lg:text-xl text-gray-500">
                  Manage your spending and savings from a single account. Get
                  digital currency. Instantly buy gold and silver at world-class
                  industry prices.
                </p>
              </div>
            </div>
            <div className="relative space-y-5">
              <Card className="flex flex-row p-5 bg-gradient-to-br from-slate-700 to-slate-800 transition-all duration-300 border-none">
                <div className="w-fit">
                  <Smartphone size={120} className="text-blue-400" />
                </div>
                <div className="flex-1 space-y-3">
                  <h2 className="text-xl lg:text-2xl text-white font-bold">
                    NSG Money platform
                  </h2>
                  <p className="text-lg lg:text-xl text-gray-500">
                    Keep track of everyday spending. Build your wealth in gold
                    and silver.
                  </p>
                  <span className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium flex items-center space-x-4 text-lg lg:text-xl">
                    <span>Lead More</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Card>
              <Card className="flex flex-row p-5 bg-gradient-to-br from-slate-700 to-slate-800 transition-all duration-300 border-none">
                <div className="w-fit">
                  <Smartphone size={120} className="text-blue-400" />
                </div>
                <div className="flex-1 space-y-3">
                  <h2 className="text-xl lg:text-2xl text-white font-bold">
                    NSG Money platform
                  </h2>
                  <p className="text-lg lg:text-xl text-gray-500">
                    Keep track of everyday spending. Build your wealth in gold
                    and silver.
                  </p>
                  <span className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium flex items-center space-x-4 text-lg lg:text-xl">
                    <span>Lead More</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Card>
              <Card className="flex flex-row p-5 bg-gradient-to-br from-slate-700 to-slate-800 transition-all duration-300 border-none">
                <div className="w-fit">
                  <Smartphone size={120} className="text-blue-400" />
                </div>
                <div className="flex-1 space-y-3">
                  <h2 className="text-xl lg:text-2xl text-white font-bold">
                    NSG Money platform
                  </h2>
                  <p className="text-lg lg:text-xl text-gray-500">
                    Keep track of everyday spending. Build your wealth in gold
                    and silver.
                  </p>
                  <span className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium flex items-center space-x-4 text-lg lg:text-xl">
                    <span>Lead More</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium flex items-center space-x-2">
                <span>Lead More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <h2 className="text-3xl lg:text-4xl font-bold">
                One app for everything
              </h2>
              <p className="text-xl text-gray-300">
                Keep an eye on your spending and savings, always. Get digital
                currency. Instantly buy gold and silver with real-time pricing.
              </p>
              <div className="flex flex-col  gap-4">
                <Card className="flex flex-row p-5 bg-gradient-to-br from-slate-700 to-slate-800 transition-all duration-300 border-none">
                  <div className="w-fit">
                    <Smartphone size={120} className="text-blue-400" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <h2 className="text-xl lg:text-2xl text-white font-bold">
                      NSG Money platform
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-500">
                      Keep track of everyday spending. Build your wealth in gold
                      and silver.
                    </p>
                    <span className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium flex items-center space-x-4 text-lg lg:text-xl">
                      <span>Lead More</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Card>
                <Card className="flex flex-row p-5 bg-gradient-to-br from-slate-700 to-slate-800 transition-all duration-300 border-none">
                  <div className="w-fit">
                    <Smartphone size={120} className="text-blue-400" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <h2 className="text-xl lg:text-2xl text-white font-bold">
                      NSG Money platform
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-500">
                      Keep track of everyday spending. Build your wealth in gold
                      and silver.
                    </p>
                    <span className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium flex items-center space-x-4 text-lg lg:text-xl">
                      <span>Lead More</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Card>
                <Card className="flex flex-row p-5 bg-gradient-to-br from-slate-700 to-slate-800 transition-all duration-300 border-none">
                  <div className="w-fit">
                    <Smartphone size={120} className="text-blue-400" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <h2 className="text-xl lg:text-2xl text-white font-bold">
                      NSG Money platform
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-500">
                      Keep track of everyday spending. Build your wealth in gold
                      and silver.
                    </p>
                    <span className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium flex items-center space-x-4 text-lg lg:text-xl">
                      <span>Lead More</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Card>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl p-8 flex items-center justify-center">
                <Smartphone size={120} className="text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 relative overflow-hidden">
        {/* 3D Gold Bar Background Effect */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 w-96 h-32 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 rounded-2xl transform -translate-x-1/2 -translate-y-1/2 rotate-12 shadow-2xl shadow-yellow-500/20 opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-24 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 rounded-xl transform -translate-x-1/2 -translate-y-1/2 rotate-6 shadow-xl shadow-gray-400/20 opacity-30 translate-x-8 translate-y-8"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* About Text */}
            <div className="bg-slate-800/40 backdrop-blur-lg rounded-3xl p-10">
              <h2 className="text-4xl font-bold text-blue-400 mb-6">
                About Us
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                North Star Group shares a vision of a world where money is
                honest, fair and backed by a true store of value, within a
                system designed to reward everyone who participates.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30">
                Read more
              </button>
            </div>

            {/* Stats */}
            <div className="space-y-8">
              <div className="text-right">
                <div className="text-6xl font-bold text-blue-400 mb-2">
                  500+
                </div>
                <div className="text-gray-300 text-lg">
                  Over 500 account for NSG
                </div>
              </div>

              <div className="text-right">
                <div className="text-6xl font-bold text-blue-400 mb-2">40+</div>
                <div className="text-gray-300 text-lg">
                  Over 40 location for NSG
                </div>
              </div>

              <div className="text-right">
                <div className="text-6xl font-bold text-blue-400 mb-2">
                  24/7
                </div>
                <div className="text-gray-300 text-lg">
                  24/7 Help service for all customers
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                More than just your
                <br />
                average bank
                <br />
                account
              </h2>
              <div className="space-y-4">
                <p className="text-lg lg:text-xl text-gray-500">
                  Manage your spending and savings from a single account. Get
                  digital currency. Instantly buy gold and silver at world-class
                  industry prices.
                </p>
              </div>
            </div>
            <div className="relative space-y-5">
              <Card className="flex flex-row p-5 bg-gradient-to-br from-slate-700 to-slate-800 transition-all duration-300 border-none">
                <div className="w-fit">
                  <Smartphone size={120} className="text-blue-400" />
                </div>
                <div className="flex-1 space-y-3">
                  <h2 className="text-xl lg:text-2xl text-white font-bold">
                    NSG Money platform
                  </h2>
                  <p className="text-lg lg:text-xl text-gray-500">
                    Keep track of everyday spending. Build your wealth in gold
                    and silver.
                  </p>
                  <span className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium flex items-center space-x-4 text-lg lg:text-xl">
                    <span>Lead More</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Card>
              <Card className="flex flex-row p-5 bg-gradient-to-br from-slate-700 to-slate-800 transition-all duration-300 border-none">
                <div className="w-fit">
                  <Smartphone size={120} className="text-blue-400" />
                </div>
                <div className="flex-1 space-y-3">
                  <h2 className="text-xl lg:text-2xl text-white font-bold">
                    NSG Money platform
                  </h2>
                  <p className="text-lg lg:text-xl text-gray-500">
                    Keep track of everyday spending. Build your wealth in gold
                    and silver.
                  </p>
                  <span className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium flex items-center space-x-4 text-lg lg:text-xl">
                    <span>Lead More</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Card>
              <Card className="flex flex-row p-5 bg-gradient-to-br from-slate-700 to-slate-800 transition-all duration-300 border-none">
                <div className="w-fit">
                  <Smartphone size={120} className="text-blue-400" />
                </div>
                <div className="flex-1 space-y-3">
                  <h2 className="text-xl lg:text-2xl text-white font-bold">
                    NSG Money platform
                  </h2>
                  <p className="text-lg lg:text-xl text-gray-500">
                    Keep track of everyday spending. Build your wealth in gold
                    and silver.
                  </p>
                  <span className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium flex items-center space-x-4 text-lg lg:text-xl">
                    <span>Lead More</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium flex items-center space-x-2">
                <span>Lead More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <h2 className="text-3xl lg:text-4xl font-bold">
                One app for everything
              </h2>
              <p className="text-xl text-gray-300">
                Keep an eye on your spending and savings, always. Get digital
                currency. Instantly buy gold and silver with real-time pricing.
              </p>
              <div className="flex flex-col  gap-4">
                <Card className="flex flex-row p-5 bg-gradient-to-br from-slate-700 to-slate-800 transition-all duration-300 border-none">
                  <div className="w-fit">
                    <Smartphone size={120} className="text-blue-400" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <h2 className="text-xl lg:text-2xl text-white font-bold">
                      NSG Money platform
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-500">
                      Keep track of everyday spending. Build your wealth in gold
                      and silver.
                    </p>
                    <span className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium flex items-center space-x-4 text-lg lg:text-xl">
                      <span>Lead More</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Card>
                <Card className="flex flex-row p-5 bg-gradient-to-br from-slate-700 to-slate-800 transition-all duration-300 border-none">
                  <div className="w-fit">
                    <Smartphone size={120} className="text-blue-400" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <h2 className="text-xl lg:text-2xl text-white font-bold">
                      NSG Money platform
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-500">
                      Keep track of everyday spending. Build your wealth in gold
                      and silver.
                    </p>
                    <span className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium flex items-center space-x-4 text-lg lg:text-xl">
                      <span>Lead More</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Card>
                <Card className="flex flex-row p-5 bg-gradient-to-br from-slate-700 to-slate-800 transition-all duration-300 border-none">
                  <div className="w-fit">
                    <Smartphone size={120} className="text-blue-400" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <h2 className="text-xl lg:text-2xl text-white font-bold">
                      NSG Money platform
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-500">
                      Keep track of everyday spending. Build your wealth in gold
                      and silver.
                    </p>
                    <span className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium flex items-center space-x-4 text-lg lg:text-xl">
                      <span>Lead More</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Card>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl p-8 flex items-center justify-center">
                <Smartphone size={120} className="text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                More than just your
                <br />
                average bank
                <br />
                account
              </h2>
              <div className="space-y-4">
                <p className="text-lg lg:text-xl text-gray-500">
                  Manage your spending and savings from a single account. Get
                  digital currency. Instantly buy gold and silver at world-class
                  industry prices.
                </p>
              </div>
            </div>
            <div className="relative space-y-5">
              <Card className="flex flex-row p-5 bg-gradient-to-br from-slate-700 to-slate-800 transition-all duration-300 border-none">
                <div className="w-fit">
                  <Smartphone size={120} className="text-blue-400" />
                </div>
                <div className="flex-1 space-y-3">
                  <h2 className="text-xl lg:text-2xl text-white font-bold">
                    NSG Money platform
                  </h2>
                  <p className="text-lg lg:text-xl text-gray-500">
                    Keep track of everyday spending. Build your wealth in gold
                    and silver.
                  </p>
                  <span className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium flex items-center space-x-4 text-lg lg:text-xl">
                    <span>Lead More</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Card>
              <Card className="flex flex-row p-5 bg-gradient-to-br from-slate-700 to-slate-800 transition-all duration-300 border-none">
                <div className="w-fit">
                  <Smartphone size={120} className="text-blue-400" />
                </div>
                <div className="flex-1 space-y-3">
                  <h2 className="text-xl lg:text-2xl text-white font-bold">
                    NSG Money platform
                  </h2>
                  <p className="text-lg lg:text-xl text-gray-500">
                    Keep track of everyday spending. Build your wealth in gold
                    and silver.
                  </p>
                  <span className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium flex items-center space-x-4 text-lg lg:text-xl">
                    <span>Lead More</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Card>
              <Card className="flex flex-row p-5 bg-gradient-to-br from-slate-700 to-slate-800 transition-all duration-300 border-none">
                <div className="w-fit">
                  <Smartphone size={120} className="text-blue-400" />
                </div>
                <div className="flex-1 space-y-3">
                  <h2 className="text-xl lg:text-2xl text-white font-bold">
                    NSG Money platform
                  </h2>
                  <p className="text-lg lg:text-xl text-gray-500">
                    Keep track of everyday spending. Build your wealth in gold
                    and silver.
                  </p>
                  <span className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium flex items-center space-x-4 text-lg lg:text-xl">
                    <span>Lead More</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 relative overflow-hidden">
        {/* 3D Gold Bar Background Effect */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 w-96 h-32 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 rounded-2xl transform -translate-x-1/2 -translate-y-1/2 rotate-12 shadow-2xl shadow-yellow-500/20 opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-24 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 rounded-xl transform -translate-x-1/2 -translate-y-1/2 rotate-6 shadow-xl shadow-gray-400/20 opacity-30 translate-x-8 translate-y-8"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* About Text */}
            <div className="bg-slate-800/40 backdrop-blur-lg rounded-3xl p-10">
              <h2 className="text-4xl font-bold text-blue-400 mb-6">
                About Us
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                North Star Group shares a vision of a world where money is
                honest, fair and backed by a true store of value, within a
                system designed to reward everyone who participates.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30">
                Read more
              </button>
            </div>

            {/* Stats */}
            <div className="space-y-8">
              <div className="text-right">
                <div className="text-6xl font-bold text-blue-400 mb-2">
                  500+
                </div>
                <div className="text-gray-300 text-lg">
                  Over 500 account for NSG
                </div>
              </div>

              <div className="text-right">
                <div className="text-6xl font-bold text-blue-400 mb-2">40+</div>
                <div className="text-gray-300 text-lg">
                  Over 40 location for NSG
                </div>
              </div>

              <div className="text-right">
                <div className="text-6xl font-bold text-blue-400 mb-2">
                  24/7
                </div>
                <div className="text-gray-300 text-lg">
                  24/7 Help service for all customers
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Payments */}
      {/* <section className="px-6 py-16 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Send money globally in
            <br />
            seconds
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-4 p-4 bg-slate-800/50 rounded-xl">
              <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
              <span>Send to family & friends</span>
            </div>
            <div className="flex items-center justify-center space-x-4 p-4 bg-slate-800/50 rounded-xl">
              <div className="w-10 h-10 bg-green-500 rounded-full"></div>
              <span>International transfers</span>
            </div>
            <div className="flex items-center justify-center space-x-4 p-4 bg-slate-800/50 rounded-xl">
              <div className="w-10 h-10 bg-purple-500 rounded-full"></div>
              <span>Business payments</span>
            </div>
          </div>
        </div>
      </section> */}

      {/* Portfolio Section */}
      {/* <section className="px-6 py-16 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Your portfolio vault
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-slate-800/50 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Cryptocurrency</h3>
              <p className="text-gray-400">
                Trade and store digital assets securely
              </p>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Precious metals</h3>
              <p className="text-gray-400">
                Invest in gold and silver with ease
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Wealth Building */}
      {/* <section className="px-6 py-16 lg:px-12 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold">Build your wealth</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-800/50 rounded-xl">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg mb-4"></div>
              <h3 className="font-semibold mb-2">Gold investments</h3>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-xl">
              <div className="w-12 h-12 bg-gray-400 rounded-lg mb-4"></div>
              <h3 className="font-semibold mb-2">Silver trading</h3>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-xl">
              <div className="w-12 h-12 bg-blue-500 rounded-lg mb-4"></div>
              <h3 className="font-semibold mb-2">Digital assets</h3>
            </div>
          </div>
        </div>
      </section> */}

      {/* Digital Currency */}
      <section className="px-6 py-16 lg:px-12 flex flex-col md:flex-row gap-12">
        <div className="max-w-4xl mx-auto  space-y-14">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Digital currency made simple
          </h2>
          <p className="text-xl text-gray-300">
            Instantly buy or sell digital currency, 24/7, from your regular
            account - starting at just $1.
          </p>
          <button className="px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
            Join Group
          </button>
        </div>
        <div className="w-full h-full p-8 flex items-center justify-center">
          <Image
            src="/video.png"
            alt="Digital Currency"
            width={300}
            height={300}
            className="object-cover w-full h-[300px]"
          />
        </div>
      </section>

      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* FAQ Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              {/* Left Sidebar - FAQ Title and Navigation */}
              <div className="lg:col-span-3">
                <div className="sticky top-8">
                  <h1 className="text-6xl lg:text-7xl font-bold text-white mb-4">
                    FAQ
                  </h1>
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition-colors text-base mb-12 inline-block"
                  >
                    Visit our Help Center
                  </a>

                  <nav className="space-y-1 mt-12">
                    <div className="border-l-4 border-blue-500 pl-6 py-4">
                      <div className="text-white font-medium text-base">
                        Trust and security
                      </div>
                    </div>
                    <div className="pl-6 py-4">
                      <div className="text-gray-500 hover:text-gray-300 transition-colors cursor-pointer text-base">
                        Buying gold and silver
                      </div>
                    </div>
                    <div className="pl-6 py-4">
                      <div className="text-gray-500 hover:text-gray-300 transition-colors cursor-pointer text-base">
                        Storage
                      </div>
                    </div>
                  </nav>
                </div>
              </div>

              {/* Right Content - FAQ Questions */}
              <div className="lg:col-span-9">
                <div className="space-y-4 mb-24">
                  {faqItems.map((question, index) => (
                    <div
                      key={index}
                      className="bg-slate-800/40 hover:bg-slate-800/60 rounded-lg transition-all duration-200"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full px-6 py-6 text-left flex justify-between items-center text-white text-lg font-medium"
                      >
                        <span>{question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-400 transition-transform duration-200 flex-shrink-0 ml-4 ${
                            openFaq === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openFaq === index && (
                        <div className="px-6 pb-6 text-gray-300 text-base leading-relaxed">
                          <p>
                            This is where the detailed answer would appear
                            explaining {question.toLowerCase()}. The content
                            would provide comprehensive information to help
                            users understand this important aspect of the
                            platform.
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom CTA Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
              {/* Investor Card */}
              <div className="bg-slate-800/30 rounded-xl p-8 lg:p-10">
                <div className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4">
                  INVESTOR
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                  Our offering for gold and silver investors.
                </h3>
                <button className="text-gray-400 hover:text-white transition-colors text-base font-medium">
                  Learn more
                </button>
              </div>

              {/* Trader Card */}
              <div className="bg-slate-800/30 rounded-xl p-8 lg:p-10">
                <div className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4">
                  TRADER
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                  Our offering for professional traders.
                </h3>
                <button className="text-gray-400 hover:text-white transition-colors text-base font-medium">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Virtual Card Section */}
        {/* <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-6">
              KINESIS VIRTUAL CARD
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              Spend your gold and silver instantly
            </h2>

            <p className="text-xl text-gray-300 mb-16 leading-relaxed max-w-2xl mx-auto">
              Protect your wealth in gold and silver — or hold digital currency
              — only converting your assets at the exact moment of purchase.
            </p>

            Feature Cards
            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="bg-slate-800/50 rounded-2xl p-6 flex items-center space-x-6 hover:bg-slate-800/70 transition-all duration-300">
                <div className="bg-orange-500/20 p-4 rounded-xl flex-shrink-0">
                  <Wallet className="w-8 h-8 text-orange-400" />
                </div>
                <span className="text-xl font-semibold text-white text-left">
                  Go borderless
                </span>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-6 flex items-center space-x-6 hover:bg-slate-800/70 transition-all duration-300">
                <div className="bg-yellow-500/20 p-4 rounded-xl flex-shrink-0">
                  <TrendingUp className="w-8 h-8 text-yellow-400" />
                </div>
                <span className="text-xl font-semibold text-white text-left">
                  Sky-high daily limits
                </span>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-6 flex items-center space-x-6 hover:bg-slate-800/70 transition-all duration-300">
                <div className="bg-amber-500/20 p-4 rounded-xl flex-shrink-0">
                  <Coins className="w-8 h-8 text-amber-400" />
                </div>
                <span className="text-xl font-semibold text-white text-left">
                  Get paid gold and silver
                </span>
              </div>
            </div>
          </div>
        </section> */}

        {/* About Section */}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Landing;
