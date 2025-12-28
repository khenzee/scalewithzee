import HeroSection from "@/components/landingPage/heroSection";
import Navbar from "@/components/landingPage/Navbar";
import Challenge from "@/components/landingPage/Challenge";
import WhatYouGet from "@/components/landingPage/WhatYouGet";
import Timeline from "@/components/landingPage/Timeline";
import Pricing from "@/components/landingPage/Pricing";
import Qualify from "@/components/landingPage/Qualify";
import About from "@/components/landingPage/About";
import CTA from "@/components/landingPage/CTA";
import Footer from "@/components/landingPage/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      
      <HeroSection />
      <Challenge />
      <WhatYouGet />
      <Timeline />
      <Pricing />
      <Qualify />
      <About />
      <CTA />
      
    </main>
  );
}
