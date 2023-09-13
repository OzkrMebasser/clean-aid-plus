"use client"
import { BiPlusMedical } from "react-icons/bi";
import ResidentialSlider from "./ResidentialSlider"


import "../workoutSlider.css";

const Workouts = () => {
  
 
  return (
    <section className='section'>
      {/* section title */}
      <div
        className='section-title-group max-w-[540px] mx-auto px-4 lg:px-0'
        data-aos='fade-up'
        data-aos-delay='200'
      >
 
        <h2 className='h2 section-title uppercase font-black'>
        Our Services<span className='text-[#147EFB]'><BiPlusMedical className="text-lg"/></span>
        </h2>
      </div>
      <div data-aos='fade-up' data-aos-delay='300'>
        <ResidentialSlider />
      </div>
    </section>
  );
};

export default Workouts;