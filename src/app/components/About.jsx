"use client"

import { IoIosArrowDroprightCircle } from "react-icons/io";
// icons
import usersIcn from '../../../public/assets/img/about/icons/users-icn.svg';
const blueLogo = "https://firebasestorage.googleapis.com/v0/b/clean-aid-plus.appspot.com/o/textBlueLogo.png?alt=media&token=41c8690e-2125-4f30-8383-1d689c8bce01";

const About = () => {
 
  return <section className='py-[80px] md:py-[110px] lg:pt-[140px] lg:pb-[180px]'>
    <div className='container mx-auto px-[20px] lg:px-[135px]'>

      <div
        className='section-title-group justify-start'
        data-aos='fade-up'
        data-aos-delay='100'
      >
        <img src={usersIcn} alt='Mission' />
        <h2 className='h2 section-title'>
        About us<span className='text-primary-200'>.</span>
        </h2>
      </div>
     
      <p
        className='md:text-body-md mb-12'
        data-aos='fade-up'
        data-aos-delay='200'
      >
       <img className="h-5 inline" src={blueLogo} alt="" /> 
       is a cleaning company that prides itself on quality and consistency. There is not a cleaner on our team that is not trained, therefore our clients can expect to have the same quality of cleaning regardless of the cleaner that we send to your home or building. We are dedicated to bringing the highest level of cleaning to your home, with maintenance services that cover everything inside the home. 
      </p>
      <p
        className='md:text-body-md mb-8'
        data-aos='fade-up'
        data-aos-delay='300'
      >
        The strength of our heart-felt identity is utilized to inspire every person that steps foot into our gyms to better themselves.
      </p>
      <div data-aos='fade-up' data-aos-delay='400'>
        <a
          className='link flex items-center gap-x-4 hover:gap-x-6 transition-all'
          href='#'
        >
          Call Now!
          <IoIosArrowDroprightCircle className='text-2xl' />
        </a>
      </div>
    </div>
  </section>
};

export default About;
