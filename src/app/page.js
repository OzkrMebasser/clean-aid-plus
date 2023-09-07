"use client"
import { useEffect } from 'react';
// import aos
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
import Banner from "./components/Banner";
import Header from './components/Header';
import About from './components/About';
import Residential from './components/Residential';
import Janitorial from './components/Janitorial'
// import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';

import CallUsNow from './components/CallUsNow';
import Footer from './components/Footer';

export default function Home() {


    useEffect(() => {
        Aos.init({ duration: 2500, delay:400 });
      }, []);
    

  // Aos.init({ duration: 2500, delay:400 });
  return (
    <div className='max-w-[1440px] mx-auto bg-page overflow-hidden relative'>
      <Header />
      <Banner />
      <About />
      <Residential />
      <Janitorial/>
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
     
      <CallUsNow />
      <Footer />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
}

