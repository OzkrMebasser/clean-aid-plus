"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Nav = () => {
  const router = useRouter();

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
    <nav className={`${textColor ? 'hidden lg:flex gap-x-4 font-bold ': 'hidden  lg:flex gap-x-4 font-bold text-[#147EFB]'} `}>

<Link  href="/" className="underline-hover-effect-green  hover:text-[#147EFB] transition">Home</Link>
<Link  href="/about" className="underline-hover-effect-green  hover:text-[#147EFB] transition">About</Link>
<Link  href="/services" className="underline-hover-effect-green  hover:text-[#147EFB] transition">Services</Link>
<Link  href="/blog" className="underline-hover-effect-green  hover:text-[#147EFB] transition">Blog</Link>
<Link  href="/contact" className="underline-hover-effect-green  hover:text-[#147EFB] transition">Contact</Link>


    </nav>
  )
};

export default Nav;
