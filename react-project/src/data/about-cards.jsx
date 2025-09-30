import React from 'react'

// src/data/aboutCards.js
import { RiTShirtAirLine,RiShirtLine,RiTShirtLine,RiTShirt2Line } from "react-icons/ri";
import { VscQuote } from "react-icons/vsc";
export const AboutCardsData = [
  {
    id: 1,
    icon: <RiTShirtAirLine size={60} />,
    title: "Premium Quality",
    description: "Crafted with care using soft, durable fabrics designed to last and feel amazing.",
  },
  {
    id: 2,
    icon: <RiShirtLine size={60} />,
    title: "Timeless Style",
    description: "Clean silhouettes and versatile pieces you can wear season after season.",
  },
  {
    id: 3,
    icon: <RiTShirtLine size={60} />,
    title: "In-House Design",
    description: "Every detail is imagined by our in-house design team to bring you standout staples.",
  },
  {
    id: 4,
    icon: <RiTShirt2Line size={60} />,
    title: "For Every Body",
    description: "Inclusive fits and sizes designed to flatter all shapes, ages, and styles.",
  },
];
export const AboutCardsData2 = [
  {
    id: 1,
    icon: <RiTShirtAirLine size={60} />,
    title: "Our Mission",
    description: "To create timeless, high-quality fashion that blends comfort with confidence. We’re here to empower individuals of all ages and body types with clothing that fits seamlessly into real life — versatile, inclusive, and made to be lived in. We design with purpose, craft with care, and always put people first.",
  },
  {    id: 2,
    icon: <RiShirtLine size={60} />,
    title: "Our Vision",
    description: "To become a trusted, global fashion destination that redefines modern essentials. We envision a world where style is accessible, self-expression is celebrated, and fashion feels effortless for everyone — from city streets to family weekends. At Velora, we aim to lead with creativity, integrity, and a deep understanding.",
  },
  
]

export const AboutSectionData=[
  {
    title: "More Than Just Clothing",
    description: "At SMart, we believe fashion should feel as good as it looks. Born from a passion for timeless design and everyday comfort, our mission is simple: to create versatile, high-quality clothing that empowers confidence — for everyone, every day.",
    description2: "Whether you're dressing up for a moment or down for the everyday, our collections are made to move with you, evolve with your lifestyle, and elevate your wardrobe — effortlessly.",
    image: "./images/about-2.jpg",
    icon: < VscQuote size={60} />,
  }
];