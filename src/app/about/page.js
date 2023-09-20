"use client";
import { useEffect } from "react";
// import aos
import Aos from "aos";
import "aos/dist/aos.css";
import DarkHeader from "../components/Headers/DarkHeader/DarkHeader";
import ActionButton from "../components/ActionButton/ActionButton";
import Benefits from "../components/Befefits";
import Footer from "../components/Footer";

// icons
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { BiPlusMedical } from "react-icons/bi";
import { GoLinkExternal } from "react-icons/go";
import Faq from "../components/Faq/Faq";

const blueLogo =
  "https://firebasestorage.googleapis.com/v0/b/clean-aid-plus.appspot.com/o/textBlueLogo.png?alt=media&token=41c8690e-2125-4f30-8383-1d689c8bce01";

const Aboutpage = () => {
  useEffect(() => {
    Aos.init({ duration: 2500, delay: 400 });
  }, []);

  return (
    <div className="bg-[#f8f8f8]">
      <DarkHeader />

      <section className=" pt-[80px] md:py-[110px] lg:pt-[140px] lg:pb-[20px]">
        <div className="container mx-auto px-[20px] lg:px-[135px]">
          <div
            className="mt-8 section-title-group justify-start"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="h2 section-title uppercase font-black">
              About us
              <span className="text-[#147EFB]">
                <BiPlusMedical className="text-lg" />
              </span>
            </h2>
          </div>
          <img
            data-aos="fade-up"
            data-aos-delay="100"
            className="mb-8"
            src="https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="about us"
          />
          <p
            className="md:text-body-md mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img className="h-5 inline" src={blueLogo} alt="" />
            is a cleaning company that prides itself on quality and consistency.
            There is not a cleaner on our team that is not trained, therefore
            our clients can expect to have the same quality of cleaning
            regardless of the cleaner that we send to your home or building. We
            are dedicated to bringing the highest level of cleaning to your
            home, with maintenance services that cover everything inside the
            home.
          </p>
          <p
            className="md:text-body-md mb-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Our purpose is to provide our clients with the best level of
            customer service with the latest practices in cleaning practices. We
            use exclusively green products in every area of the home, to ensure
            the safety for everyone in the building or household including your
            pets.
          </p>
          <p
            className="md:text-body-md mb-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Our organization is structured so that the same cleaner is scheduled
            to clean the same home or building on a consistent basis, however,
            we cannot guarantee the same cleaner every time, due to unforeseen
            circumstances.
          </p>

          <p
            className="md:text-body-md mb-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Reach out today to get a quote or schedule a consultation for you to
            have the opportunity to discuss your needs in more detail.
          </p>

          <button
            className=" bg-[#147EFB] text-white rounded-lg px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            data-aos="fade-down"
            data-aos-delay="700"
          >
            Book a Consultation
            <IoIosArrowDroprightCircle className="text-2xl inline ml-2 align-middle" />
          </button>
        </div>
      </section>
      {/* l    <div className="inline-flex items-center justify-center w-full">
        <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
          <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
          </svg>
        </div>
      </div> */}

      <section className="pt-12">
        <Benefits />
        </section>
        <Faq />
        <ActionButton/>
        <Footer />
        
     
    </div>
  );
};

export default Aboutpage;
