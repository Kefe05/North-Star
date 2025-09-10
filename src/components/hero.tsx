"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0, scale: 0.8 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const goldTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
      },
    },
  };

  const buttonVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.8,
      },
    },
  };

  return (
    <motion.section
      className="relative lg:flex lg:mt-7 min-h-[500px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden lg:rounded-xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background Image - Only for screens < lg */}
      <motion.div
        className="absolute inset-0 w-full h-full lg:hidden"
        variants={imageVariants}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-yellow-400/20 via-transparent to-transparent z-10"
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full"
        >
          <Image
            src="/gold-bar.png"
            width={600}
            height={500}
            alt="gold bar image"
            className="w-full h-full object-cover"
            priority
            // placeholder="blur"
          />
        </motion.div>
        {/* Dark overlay for better text readability - Only for screens < lg */}
        <div className="absolute inset-0 bg-black/60 z-20" />
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="relative z-30 lg:z-auto lg:flex-1 w-full h-full p-6 sm:p-8 lg:p-12 xl:p-16 flex flex-col justify-center lg:bg-transparent"
        variants={textVariants}
      >
        <motion.p
          className="text-lg sm:text-xl font-semibold text-sky-500 mb-4"
          variants={textVariants}
        >
          YOUR MONEY, YOUR CHOICE
        </motion.p>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-4 leading-tight text-white lg:text-gray-100"
          variants={textVariants}
        >
          Manage your <br className="hidden sm:block" /> money with
        </motion.h1>

        <motion.div className="mb-6" variants={goldTextVariants}>
          <motion.span
            className="bg-gradient-to-b text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent font-bold"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            Gold
          </motion.span>
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white lg:text-gray-100">
            {" "}
            &{" "}
          </span>
          <motion.span
            className="bg-gradient-to-r text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl from-neutral-400 via-white to-neutral-400 bg-clip-text text-transparent font-bold"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              delay: 1.5,
            }}
          >
            Silver
          </motion.span>
        </motion.div>

        <motion.p
          className="my-6 text-lg sm:text-xl md:text-2xl text-gray-200 lg:text-gray-300 leading-relaxed max-w-2xl"
          variants={textVariants}
        >
          Spend and save in physical gold and silver. Buy digital currency. Earn
          rewards for every transaction.
        </motion.p>

        <motion.div
          className="flex flex-row gap-4 sm:gap-3"
          variants={buttonVariants}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
              Join Group
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className=" px-6 py-2 bg-slate-700 rounded-lg">
              About Us
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Image Section - Only visible on lg+ screens */}
      <motion.div
        className="hidden lg:flex lg:flex-1 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 lg:rounded-xl relative overflow-hidden"
        variants={imageVariants}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-yellow-400/20 via-transparent to-transparent"
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full"
        >
          <Image
            src="/gold-bar.png"
            width={600}
            height={500}
            alt="gold bar image"
            className="mx-auto w-full h-full object-cover"
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
