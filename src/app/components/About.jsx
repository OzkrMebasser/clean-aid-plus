"use client"
// import { about } from "../utils/data";
import { IoIosArrowDroprightCircle } from "react-icons/io";
// icons
import UsersIcn from '../assets/img/about/icons/users-icn.svg';

const About = () => {
  // const { title, icon, link, subtitle1, subtitle2 } = about;
  return <section className='py-[80px] md:py-[110px] lg:pt-[140px] lg:pb-[180px]'>
    <div className='container mx-auto px-[20px] lg:px-[135px]'>

      <div
        className='section-title-group justify-start'
        data-aos='fade-up'
        data-aos-delay='100'
      >
        <img src={UsersIcn} alt='' />
        <h2 className='h2 section-title'>
        Our misson<span className='text-primary-200'>.</span>
        </h2>
      </div>
      <p
        className='md:text-body-md mb-12'
        data-aos='fade-up'
        data-aos-delay='200'
      >
       We are distinguished by our unsurpassed motivating atmosphere, knowledgeable staff, and premier exercise equipment, which supports our members in meeting their individual fitness goals.
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
