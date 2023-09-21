"use client";
import { BiPlusMedical } from "react-icons/bi";
// import JanitorialSlider from "./JanitorialSlider";
import Link from "next/link";
import ServicesSlider from "./Services/ServicesSlider";
const blueLogo =
  "https://firebasestorage.googleapis.com/v0/b/clean-aid-plus.appspot.com/o/textBlueLogo.png?alt=media&token=41c8690e-2125-4f30-8383-1d689c8bce01";

import "../workoutSlider.css";

const Janitorial = () => {
  return (
    <section className="py-[40px] bg-black md:py-[80px] lg:pt-[80px] lg:pb-[70px]">
    <div className="container mx-auto px-[20px] lg:px-[135px]">
      <div
        className="section-title-group justify-start"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h2 className="h2 text-white section-title uppercase font-black">
          Our Services
          <span className="text-[#147EFB]">
            <BiPlusMedical className="text-lg" />
          </span>
        </h2>
      </div>

      <p
            className="text-white md:text-body-md mb-6 font-semibold text-base"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            
            Step into a world of exceptional cleaning services with <img className="h-5 inline" src={blueLogo} alt="" />. From office buildings to strata complexes and more, we offer top-tier cleaning using eco-friendly solutions and advanced equipment. Explore our services, including specialized carpet cleaning. Contact us to learn how we can support your cleaning needs!
          </p>
   
      <div className=" mx-auto w-full mt-8 ">
        <button className="flex-end align-center  bg-[black] border-2 border-[white] ml-4 text-white rounded-lg px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          <Link href="/services">See all our Services</Link>
        </button>
      </div>
      <div className="mx-auto" data-aos="fade-up" data-aos-delay="300">
        <ServicesSlider />
      </div>
      </div>
    </section>
  );
};

export default Janitorial;
