"use client"
import { useEffect, useState } from "react";
// import {header} from "../utils/data";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";



const Header = () => {

  const blueLogo = "https://firebasestorage.googleapis.com/v0/b/clean-aid-plus.appspot.com/o/blueLogoCleanAid.png?alt=media&token=c12abe93-174e-4a7f-89cb-ea1717912eff";
  const greenLogo = "https://firebasestorage.googleapis.com/v0/b/clean-aid-plus.appspot.com/o/greenLogoCleanAid.png?alt=media&token=f5d24ae3-8a90-49e4-9a88-3a056a0054b0";


  const [isActive, setIsActive] = useState(false);
  const [chgLogo, setChgLogo] = useState(false);
  const [textColor, setTextColor] = useState(false);
  const [navMobile, setNavMobile] = useState(false);
 

  useEffect(() => {

    const handleScroll = () => {
      if(window.scrollY > 80){
        setIsActive(true);
        setChgLogo(true);  
        setTextColor(true);

      } else {
        setIsActive(false);
        setChgLogo(false);
        setTextColor(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }

  }, []);


  return (
    <header
      className={`${
        isActive ? " bg-[#fff] py-[16px]" : "bg-transparent py-[20px] text-shadow"
      } fixed max-w-[1440px] left-0 right-0 mx-auto flex justify-between items-center px-[20px] lg:px-[80px] z-30 transition-all duration-300`}
    >
      <a href="">
        <img className="h-14" src={ chgLogo ? blueLogo : greenLogo } alt="logo" />
      </a>
     {/* desktop Navigation */}
      <Nav textColor={textColor} />

      {/* <div className='hidden lg:flex space-x-4'>
      <button className="btn btn-sm text-white hover:text-primary-200 transition" >{btnLoginText}</button>
      <button className="btn btn-sm btn-primary">{btnSignupText}</button>
    </div> */}
      <div
        onClick={() => setNavMobile(!navMobile)}
        className="lg:hidden absolute right-4"
      >
        {navMobile ? (
          <RiCloseFill className={`${!textColor ? "text-3xl text-[#14fb72] cursor-pointer" : "text-3xl text-[#2a3cfb] cursor-pointer"}`} />
        ) : (
          <RiMenu4Fill className={`${!textColor ? "text-3xl text-[#14fb72] cursor-pointer" : "text-3xl text-[#2a3cfb] cursor-pointer"}`} />
        )}
      </div>

      {/* nav mobile - hide on desktop */}
      <NavMobile navMobile={navMobile} />
    </header>
  );
};

export default Header;
