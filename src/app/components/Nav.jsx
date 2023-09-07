"use client"
import { useState, useEffect } from "react";


const Nav = () => {

  const [textColor, setTextColor] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      if(window.scrollY > 80){


        setTextColor(true);

      } else {
        setTextColor(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }

  }, []);

  return ( 
    <nav className={`${textColor ? 'hidden lg:flex gap-x-4 font-bold ': 'hidden lg:flex gap-x-4 font-bold text-[#147EFB]'} `}>

<a  href="#" className="underline-hover-effect-green  hover:text-[#147EFB] transition">Home</a>
<a  href="#" className="underline-hover-effect-green  hover:text-[#147EFB] transition">About</a>
<a  href="#" className="underline-hover-effect-green  hover:text-[#147EFB] transition">Services</a>
<a  href="#" className="underline-hover-effect-green  hover:text-[#147EFB] transition">Contact</a>
<a  href="#" className="underline-hover-effect-green  hover:text-[#147EFB] transition">Home</a>

    </nav>
  )
};

export default Nav;
