"use client"
import { IoIosArrowDroprightCircle } from "react-icons/io";
const Banner = () => {
 
  return (
    <section className="bg-neutral-500 h-[790px]">
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full relative -space-x-48 lg:-space-x-24">
          <div className="text-white flex-1 z-10 pl-6 lg:pl-0">
            <h1
              className="h1 text-white mb-8 "
              data-aos="fade-down"
              data-aos-delay="500">
              <span className="block text-shadow">Trusted</span>
              <span className='shining text-[#0eb04f] font-black green-text-shadow'>
                Cleaning Services</span> 
                
                <span className="block text-shadow">for Homes and Businesses Across Victoria</span>
             
              
               <br />
              {/* <span className="text-primary-200">{titlePart2}</span> */}
            </h1>
            <p
              className="subtitle max-w-[415px] text-body-md lg:text-body-lg mb-8 text-shadow"
              data-aos="fade-down"
              data-aos-delay="600">
            We take cleanliness seriously, ensuring your spaces are spotless and inviting.
            </p>
            <button
              className="bg-[#147EFB] text-white rounded-lg px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              data-aos="fade-down"
              data-aos-delay="700">
              Book a Consultation
              <IoIosArrowDroprightCircle className="text-2xl inline ml-2 align-middle" />
            </button>
          </div>
          <div className="image h-full w-full bg-blue-400 bg-banner bg-cover bg-right lg:bg-center bg-no-repeat flex-1" data-aos="fade-right" data-aos-delay="900"></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
