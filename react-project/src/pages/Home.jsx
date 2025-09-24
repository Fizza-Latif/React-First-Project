import React from "react";
import Hero from "../components/home/hero";
import Card from "../components/home/card";
import Newsletter from "../components/home/newsletter";
import Categories from "../components/home/categories";
import Loginform from "../components/home/usestate.jsx/loginform";

export default function Home() {
  return (
    <div>
      <Hero />
      <Card  />
      <Categories />
      <Newsletter />
      <Loginform />

    </div>
  );
}
