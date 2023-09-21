"use client";
import { useEffect } from "react";

// import aos
import Aos from "aos";
import "aos/dist/aos.css";

// import components

import "./globals.css";
import ActionButton from "./components/ActionButton/ActionButton";
import Banner from "./components/Banner";
import Header from "./components/Headers/TransHeader/Header";
import About from "./components/About/About";


import Janitorial from "./components/Janitorial";
// import Pricing from './components/Pricing';
import Testimonials from "./components/Testimonials";
// import ActionButton from './components/ActionButton/ActionButton';

import CallUsNow from "./components/CallUsNow";
import Footer from "./components/Footer";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2500, delay: 400 });
  }, []);

  return (
    <>
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <div className="max-w-[1440px] mx-auto bg-opacity-25 overflow-hidden relative">
        <Header />
        <Banner />
        <About />
     
        <Janitorial />
      {/* <ServicesSlider/> */}

        <CallUsNow />
        <Footer />
        <ActionButton />
      </div>
    </>
  );
}
