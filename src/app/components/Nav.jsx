"use client"
// import {nav} from "../utils/data";


const Nav = ({textColor}) => {
  return ( 
    <nav className='hidden lg:flex  gap-x-4 font-bold text-white text'>
    {/* {nav.map((item, index) => {
      return (<a key={index} href={item.href} className="underline-hover-effect  hover:text-[#147EFB] transition">{item.name}</a>)
    })
  } */}
<a  href="#" className="underline-hover-effect  hover:text-[#147EFB] transition">Home</a>
<a  href="#" className="underline-hover-effect  hover:text-[#147EFB] transition">About</a>
<a  href="#" className="underline-hover-effect  hover:text-[#147EFB] transition">Services</a>
<a  href="#" className="underline-hover-effect  hover:text-[#147EFB] transition">Contact</a>
<a  href="#" className="underline-hover-effect  hover:text-[#147EFB] transition">Home</a>

    </nav>
  )
};

export default Nav;
