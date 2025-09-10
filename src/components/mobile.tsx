import Image from "next/image";
import React from "react";
import { Card } from "./ui/card";

export default function Mobile() {
  const moreThanSection = [
    {
      title: "NSG Money platform",
      description:
        "Keep track of everyday spending. Build your wealth in gold and silver. ",
      icon: "🪙",
    },
    {
      title: "NSG Money platform",
      description:
        "Keep track of everyday spending. Build your wealth in gold and silver. ",
      icon: "🪙",
    },
  ];

  return (
    <div className="flex lg:flex-row flex-col my-10 px-4 items-center">
      <div className="flex-1">
        <h1 className="mx-auto mt-4 text-center lg:text-left text-2xl font-semibold lg:text-6xl">
          One app for everything
        </h1>
        <p className="my-6 text-lg sm:text-xl md:text-2xl text-gray-200 lg:text-gray-300 leading-relaxed text-center lg:text-left  ">
          Keep an eye on your spending and savings, always. Get digital
          currency. Instantly buy gold and silver with real-time pricing.
        </p>
        {moreThanSection.map((item, index) => (
          <Card key={`${item.title} + ${index}`} className="m-5 p-5">
            <div className="text-4xl">{item.icon}</div>
            <h2 className="text-2xl">{item.title}</h2>
            <p>{item.description}</p>
          </Card>
        ))}
      </div>
      <div className="flex-1  w-full rounded-xl">
        <Image
          src="/golden.jpg"
          alt="mobile app"
          width={300}
          height={600}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
