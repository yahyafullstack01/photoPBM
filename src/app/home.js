"use client";

import Hero from "./components/Hero/Hero.jsx";
import Gallery from "./components/Gallery/Gallery";
import FollowUs from "./components/Follow/Follow.jsx";
import About from "./components/About/About.jsx";
import LoveStory from "./components/LoveStory/LoveStory.jsx";
import SeoHomeIntro from "./components/SeoHomeIntro/SeoHomeIntro.jsx";

export default function Home() {
  return (
    <div className="transition-colors">
      <SeoHomeIntro />
      <Hero />
      <Gallery />
      <LoveStory />
      <About />
      <FollowUs />
    </div>
  );
}