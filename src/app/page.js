"use client";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";
import IDOEventSection from "../components/IDOEventSection";
import IntroSection from "../components/IntroSection";
import Navbar from "../components/Navbar";
import RoadMap from "../components/RoadMap";
import TokenomicsSections from "../components/TokenomicsSection";
import TopSection from "../components/TopSection";
import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  });
  return (
    <main className="relative">
      <Navbar />
      <TopSection />
      <IntroSection />
      <IDOEventSection />
      <TokenomicsSections />
      <RoadMap />
      <FaqSection />
      <Footer />
    </main>
  );
}
