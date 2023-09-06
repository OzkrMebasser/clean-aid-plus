"use client"
// import { footer } from "../utils/data";

const Footer = () => {
  
  // const { logo, copyrightText } = footer;
  return (
    <footer className='bg-neutral-500 h-[125px] md:h-[195px] px-[20px]'>
      <div
        className='container mx-auto h-full flex justify-between items-center md:items-end md:pb-[50px]'
        data-aos='fade-up'
        data-aos-delay='200'
      >
   
        <a href='#'>
          <img className='' src="" alt='' />
        </a>
        {/* copyright text */}
        <p className='text-neutral-300 text-sm'>All rights reserved. CleanAid+ 2023.</p>
      </div>
    </footer>
  );
};

export default Footer;