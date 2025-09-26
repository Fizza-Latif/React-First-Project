import React from 'react'

// src/data/aboutCards.js
import { RiTShirtAirLine,RiShirtLine,RiTShirtLine,RiTShirt2Line } from "react-icons/ri";
export const AboutCardsData = [
  {
    id: 1,
    icon: <RiTShirtAirLine size={40} />,
    title: "Web Development",
    description: "Building responsive and modern websites with React and Tailwind CSS.",
  },
  {
    id: 2,
    icon: <RiShirtLine size={40} />,
    title: "Frontend Design",
    description: "Crafting beautiful and user-friendly UI components.",
  },
  {
    id: 3,
    icon: <RiTShirtLine size={40} />,
    title: "Mobile Friendly",
    description: "Ensuring seamless experiences across devices.",
  },
  {
    id: 4,
    icon: <RiTShirt2Line size={40} />,
    title: "Database Integration",
    description: "Connecting apps with secure and scalable backend services.",
  },
];
