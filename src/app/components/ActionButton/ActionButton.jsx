import React, { useState } from "react";
import Link from "next/link";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiPlusMedical } from "react-icons/bi";
import { BsCalendar2Check } from "react-icons/bs";
import { GoX } from "react-icons/go";

const FloatContact = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div>
      <button
        className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-800 flex text-black justify-center  text-[2rem] fixed mx-auto rounded-[50%] w-[50px] h-[50px] items-center  bg-[white] z-50  left-6 bottom-8"
        onClick={toggleMenu}
      >



        
        {!openMenu ? (
          <span className="text-[#fff]">
            <BiPlusMedical className="text-2xl" />
          </span>
        ) : (
          <span className="text-[#fff] rotate-45">
            <BiPlusMedical className=" text-2xl" />
          </span>
        )}
        {/* {!openMenu ?  <span className='text-[#fff]'><BiPlusMedical className="text-2xl"/></span> : <span className='text-[#147EFB]'><GoX className="text-2xl"/></span>} */}
      </button>



      {openMenu ? (
        //      <button
        //      className="bg-[#147EFB] text-white rounded-lg px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        //      data-aos="fade-down"
        //      data-aos-delay="700">
        //      Book a Consultation
        //      <IoIosArrowDroprightCircle className="text-2xl inline ml-2 align-middle" />
        //    </button>
        <div className="text-gradient-to-br from-blue-600 via-blue-500 to-blue-800 h-auto w-auto border-4 border-[#147EFB] border-x-[#76b4dd] text-[#147EFB] font-bold bg-white  rounded-lg px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-xl fixed z-50 items-center  flex justify-center   m-auto  p-3 left-6 bottom-[10.5rem]">

          <Link href="/book">Book a Consultation</Link>
          <BsCalendar2Check className="text-2xl font-bold inline ml-2 align-middle" />
        </div>
      ) : null}
      {openMenu ? (
        <div className="text-gradient-to-br from-blue-600 via-blue-500 to-blue-800 h-auto w-auto border-4 border-[#147EFB] border-x-[#76b4dd] text-[#147EFB] font-bold bg-white  rounded-lg px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-xl fixed z-50 items-center  flex justify-center   m-auto  p-3 left-6 bottom-[6.5rem]">
          Call a representative
          <RiCustomerService2Fill className="text-2xl inline ml-2 align-middle" />
        </div>
      ) : null}
      {openMenu ? (
              <div className="text-gradient-to-br from-green-600 via-green-500 to-green-800 h-auto w-auto border-4 border-green-600 border-x-[#76b4dd] text-[#147EFB] font-bold bg-white  rounded-lg px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-xl fixed z-50 items-center  flex justify-center   m-auto  p-3 left-24 bottom-[2.8rem]">

          1-778-677-9340
        </div>



      ) : null}
    </div>
  );
};

export default FloatContact;
