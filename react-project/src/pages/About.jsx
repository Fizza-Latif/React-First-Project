import React from "react";
import Hero from "../components/home/hero";
import FeatureIntro from "../components/home/about/feature-intro";  
import AboutCard from "../components/home/about/about-card";
import AboutSection from "../components/home/about/about-section";

export default function About() {
  return (
    <div>
      <Hero
        title="Style That Moves With You"
        subtitle="Born from a passion for timeless design and everyday comfort"
        image="./images/about-bg.jpg"
      />
      <FeatureIntro 
      title2="What Makes S-Mart Stand Out" 
      subtitle2="Style, Comfort & More – Here’s Why You’ll Love Us" 
      />
      <AboutCard stagger/>
      <AboutSection />
    </div>
  );
}
