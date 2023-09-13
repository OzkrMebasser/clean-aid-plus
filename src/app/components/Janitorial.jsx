"use client"
import { BiPlusMedical } from "react-icons/bi";
import JanitorialSlider from "./JanitorialSlider"
// import ServicesSlider from './ServicesSlider';

import "../workoutSlider.css";

const Workouts = () => {
  
 
  return (
    <section className='section bg-black'>
      {/* section title */}
      <div
        className='section-title-group max-w-[540px] mx-auto px-4 lg:px-0'
        data-aos='fade-up'
        data-aos-delay='200'
      >
      
        <h2 className='h2 section-title uppercase font-black mt-4'>
        Janitorial<span className='text-[#147EFB]'><BiPlusMedical className="text-lg"/></span>
        </h2>
      </div>
      <div data-aos='fade-up' data-aos-delay='300'>
        <JanitorialSlider />
      </div>
    </section>
  );
};

export default Workouts;