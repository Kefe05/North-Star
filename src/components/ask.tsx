import React from "react";
import { Card } from "./ui/card";

export default function Ask() {
  const askSection = [
    {
      title: "Gold and silver",
      description: "Spend and save in digitalised physical gold and silver.",
      icon: "🪙",
    },
    {
      title: "Gold and silver",
      description: "Spend and save in digitalised physical gold and silver.",
      icon: "🪙",
    },
    {
      title: "Gold and silver",
      description: "Spend and save in digitalised physical gold and silver.",
      icon: "🪙",
    },
    {
      title: "Gold and silver",
      description: "Spend and save in digitalised physical gold and silver.",
      icon: "🪙",
    },
  ];

  return (
    <div>
      <h1 className="mx-auto mt-4  text-2xl font-semibold lg:text-4xl text-center">
        Ask a little more from your money
      </h1>
      <div className=" flex flex-col lg:flex-row  mx-auto   ">
        {askSection.map((item, index) => (
          <Card key={`${item.title} + ${index}`} className="m-5 p-5">
            <div className="text-4xl">{item.icon}</div>
            <h2 className="text-2xl">{item.title}</h2>
            <p>{item.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
