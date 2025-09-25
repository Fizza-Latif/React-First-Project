import React from "react";
import Hero from "../components/home/hero";
import Card from "../components/home/card";
import Newsletter from "../components/home/newsletter";
import Categories from "../components/home/categories";
import Loginform from "../components/home/usestate.jsx/loginform";

export default function Home() {
  return (
    <div>
      <Hero
        title="What are you looking for?"
        subtitle="Discover a world of products at unbeatable prices. Shop easily, safely."
        image="./images/bg-img.jpg"
      />
      <Card />
      <Categories />
      <Newsletter />
      <Loginform />
    </div>
  );
}
