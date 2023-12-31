"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
// icons
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { BiPlusMedical } from "react-icons/bi";

import "../../components/Services/services.css";

const blueLogo =
  "https://firebasestorage.googleapis.com/v0/b/clean-aid-plus.appspot.com/o/textBlueLogo.png?alt=media&token=41c8690e-2125-4f30-8383-1d689c8bce01";

const About = () => {
  const router = useRouter();

  return (
    <>
      
      <section className="py-[40px] md:py-[80px] lg:pt-[80px] lg:pb-[70px]">
        <div className="container mx-auto px-[20px] lg:px-[135px]">
          <div
            className="section-title-group justify-start"
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

          <p
            className="md:text-body-md mb-6 font-semibold text-base"
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
            className="md:text-body-md mb-8 font-semibold text-base"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Our purpose is to provide our clients with the best level of
            customer service with the latest practices in cleaning practices. We
            use exclusively green products in every area of the home, to ensure
            the safety for everyone in the building or household including your
            pets.
          </p>

          <button
            className="border-[1.5px] border-[white] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mt-6 bg-[#147EFB] text-white rounded-lg px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            data-aos="fade-down"
            data-aos-delay="700"
            // onClick={() => router.push(`about`)}
          >
            <Link href="/about"> Learn More </Link>
            <IoIosArrowDroprightCircle className="text-2xl inline ml-2 align-middle" />
          </button>
        </div>
      </section>
    </>
  );
};

export default About;
