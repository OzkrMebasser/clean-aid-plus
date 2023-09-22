"use client"
import React, { useState } from "react";
import Link from "next/link";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiPlusMedical } from "react-icons/bi";
import { BsCalendar2Check } from "react-icons/bs";
import { GoX } from "react-icons/go";


import './ActionButton.css'

const ActionButton = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div>
      <button
        className=" shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-gradient-to-br from-blue-400 to-blue-600 flex justify-center text-[2rem] fixed mx-auto rounded-[50%] w-[50px] h-[50px] items-center  bg-[white] z-50  left-6 bottom-8"
        onClick={toggleMenu}
      >
        {!openMenu ? (
          <span className="text-[#fff] ">
            <BiPlusMedical className="text-2xl" />
          </span>
        ) : (
          <span className="text-[#fff] rotate-45  ">
            <BiPlusMedical className=" text-2xl" />
          </span>
        )}
      </button>

      {openMenu ? (
        <div   
        // data-aos="fade-right"
         className="roll-in-left text-gradient-to-br from-blue-600 via-blue-500 to-blue-800 h-auto w-[17.5rem] border-4 border-[#147EFB] border-x-[#76b4dd] text-[#147EFB] font-bold bg-white  rounded-lg px-4 py-2 hover:bg-black hover:text-[white] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-xl fixed z-50 items-center  flex justify-center   m-auto  p-3 left-8 bottom-[10.5rem]">
          <Link href="/contact">Book a Consultation</Link>
          <BsCalendar2Check className="text-2xl font-bold inline ml-2 align-middle" />
        </div>
      ) : null}
      {openMenu ? (
        <div 
        // data-aos="fade-right"
        className="rotate-in-2-bl-cw text-gradient-to-br from-blue-600 via-blue-500 to-blue-800 h-auto w-[17.5rem] border-4 border-[#147EFB] border-x-[#76b4dd] text-[#147EFB] font-bold bg-white  rounded-lg px-4 py-2 hover:bg-black hover:text-[white] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-xl fixed z-50 items-center  flex justify-center   m-auto  p-3 left-8 bottom-[6.3rem]">
          
          <Link href="tel:+17786779340">Call a Representative</Link>
          <RiCustomerService2Fill className="text-2xl inline ml-2 align-middle" />
        </div>
      ) : null}
      {openMenu ? (
        <div 
        // data-aos="fade-right"
        className="slide-in-left text-gradient-to-br from-blue-600 via-blue-500 to-blue-800 h-auto w-auto border-4 border-[#147EFB] border-x-[#76b4dd] text-[#147EFB] font-bold bg-white rounded-lg px-4 py-2 hover:bg-black hover:text-[white] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-xl fixed z-50 items-center flex justify-center m-auto p-3 left-[6.5rem] bottom-[2rem]">
          {/* <Link href="tel:+17786779340">1-778-677-9340</Link> */}
          1-778-677-9340
                  </div>
      ) : null}
    </div>
  );
};

export default ActionButton;
