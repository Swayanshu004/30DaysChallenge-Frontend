"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ProgressBar from "@/components/ProgressBar";

// Card Component
export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: { title: string; src: string };
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute inset-0"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

export function FocusCards({
  cards,
}: {
  cards: { title: string; src: string }[];
}) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}

// TaskPage Component
const TaskPage: React.FC = () => {
  const steps = [
    { id: 1, status: "completed" },
    { id: 2, status: "not-completed" },
    { id: 3, status: "current" },
    { id: 4, status: "locked" },
    { id: 5, status: "locked" },
    { id: 6, status: "locked" },
    { id: 7, status: "locked" },
    { id: 8, status: "locked" },
    { id: 9, status: "locked" },
    { id: 10, status: "locked" },
    { id: 11, status: "locked" },
    { id: 12, status: "locked" },
    { id: 13, status: "locked" },
    { id: 14, status: "locked" },
    { id: 15, status: "locked" },
    { id: 16, status: "locked" },
    { id: 17, status: "locked" },
    { id: 18, status: "locked" },
    { id: 19, status: "locked" },
    { id: 20, status: "locked" },
  ];

  const questions = [
    "What is the difference between let and const?",
    "Explain the concept of hoisting in JavaScript.",
    "How do arrow functions differ from regular functions?",
  ];

  const tasks = [
    "Complete the JavaScript basics tutorial.",
    "Practice coding problems on array methods.",
    "Build a small project to apply JavaScript concepts.",
  ];

  const cards = [
    {
      title: "Youtube",
      src: "https://images.pexels.com/photos/11884525/pexels-photo-11884525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Blog",
      src: "https://images.pexels.com/photos/11884525/pexels-photo-11884525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Github",
      src: "https://images.pexels.com/photos/11884525/pexels-photo-11884525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1g",
    },
    {
      title: "Github",
      src: "https://images.pexels.com/photos/11884525/pexels-photo-11884525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1g",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex justify-center overflow-hidden">
      <div className="w-full bg-neutral-950 rounded-lg shadow-lg flex flex-col h-full">
        {/* Header Section */}
        <div className="p-4 flex flex-col md:flex-row  justify-between border-b bg-neutral-950">
          <h1 className="text-3xl font-semibold text-orange-500">
            3. Datatypes in Javascript
          </h1>
          <div className="w-1/6">
              <ProgressBar />
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-row overflow-hidden">
          {/* Left Sidebar - Sticky Task Progress */}
          <div
            className="bg-gray-800 p-4 sticky top-4 flex flex-col items-center overflow-auto max-h-dvh"
            style={{ minWidth: "80px" }}
          >
            {/* Scrollable numbers */}
            <div className="flex flex-col items-center space-y-4 w-full max-h-full overflow-y-auto ">
              <style jsx>{`
                .flex::-webkit-scrollbar {
                  display: none;
                }
                .flex {
                  -ms-overflow-style: none; /* Internet Explorer 10+ */
                  scrollbar-width: none; /* Firefox */
                }
              `}</style>
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`flex items-center justify-center min-h-10 w-11  rounded-full text-lg font-bold ${
                    step.status === "completed"
                      ? "bg-green-500 text-white"
                      : step.status === "not-completed"
                      ? "bg-gray-500 text-white"
                      : step.status === "current"
                      ? "bg-orange-500 text-black"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {step.id}
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6 overflow-auto">
            {/* Questions Section */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4">Questions:</h3>
              <div className="bg-gray-800 p-4 rounded-lg mb-4">
                <ul className="list-disc pl-5">
                  {questions.map((question, index) => (
                    <li key={index} className="mb-2">
                      {question}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end">
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow">
                  Check
                </button>
              </div>
            </div>

            {/* Tasks Section */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4">Tasks:</h3>
              <div className="bg-gray-800 p-4 rounded-lg mb-4">
                <ul className="list-disc pl-5">
                  {tasks.map((task, index) => (
                    <li key={index} className="mb-2">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end">
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow">
                  Check
                </button>
              </div>
            </div>

            {/* Focus Cards Section */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4">Resources :</h3>
              <FocusCards cards={cards} />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button className="bg-orange-500 text-white px-6 py-2 rounded-lg shadow">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
