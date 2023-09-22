"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
// icons
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { BiPlusMedical } from "react-icons/bi";

const blueLogo =
  "https://firebasestorage.googleapis.com/v0/b/clean-aid-plus.appspot.com/o/textBlueLogo.png?alt=media&token=41c8690e-2125-4f30-8383-1d689c8bce01";

const About = () => {
  const router = useRouter();

  return (
    <section className="bg-black  ">
      <div className="container mx-auto px-[20px] lg:px-[135px] pb-[80px]  ">
        <div
          className="section-title-group justify-start"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="h2 text-white section-title uppercase font-black pt-8">
            Benefits
            <span className="text-[#147EFB]">
              <BiPlusMedical className="text-lg" />
            </span>
          </h2>
        </div>
        {/*WorkSafeBC*/}
        <div data-aos="zoom-in-up" className="shadow-lg flex flex-col md:flex-row bg-white rounded-xl md:bg-transparent shadow-black/20 md:shadow-none mb-6">
          <div className=" flex justify-center md:justify-end">
            <div className="shadow-lg w-full p-4 lg:w-[250px] lg:p-0 bg-white rounded-t-xl lg:rounded-l-xl lg:rounded-r-none  flex justify-center items-center">
              <img
                className="pt-4 lg:pt-0 lg:h-10"
                src="https://www.worksafebc.com/img/worksafebc_logo.jpg"
                alt="wsbc logo"
              />
            </div>
          </div>
          <div className="text-center bg-white shadow-lg rounded-b-xl lg:rounded-r-xl lg:rounded-l-none p-4 hover:bg-black hover:text-[#fff]">
            <h1 className="text-[#147EFB] font-bold text-xl pb-4 hover:text-[#14fb72]">
              WSBC (WorkSafeBC) Certified
            </h1>
            <p>
              Our cleaners are all WSBC certified, having undergone extensive
              training in safe work procedures. You can trust our team to clean
              your facilities safely and professionally.
            </p>
          </div>
        </div>
        {/*HEPA Filters*/}
        <div data-aos="zoom-in-up" className="shadow-lg flex flex-col md:flex-row bg-white rounded-xl md:bg-transparent shadow-black/20 md:shadow-none mb-6">
          <div className="flex justify-center md:justify-end">
          <div className="shadow-lg w-full p-4 lg:w-[250px] lg:p-0 bg-white rounded-t-xl lg:rounded-l-xl lg:rounded-r-none  flex justify-center items-center">
              <img
                className="pt-4 lg:pt-0 h-20"
                src="https://seekvectorlogo.net/wp-content/uploads/2018/09/hepa-filter-vector-logo.png"
                alt="heppa filters logo"
              />
            </div>
          </div>
          <div className="text-center bg-white shadow-lg rounded-b-xl lg:rounded-r-xl lg:rounded-l-none p-4 hover:bg-black hover:text-[#fff]">
            <h1 className=" text-[#147EFB] font-bold text-xl pb-4 hover:text-[#14fb72]">
            HEPA Filter Vacuums
            </h1>
            <p>
            We only use vacuums equipped with true HEPA filters that capture 99.97% of fine particles down to 0.3 microns, removing dust and allergens for a healthier indoor environment.
            </p>
          </div>
        </div>
        
         {/*Staff trained*/}
         <div data-aos="zoom-in-up" className="shadow-lg flex flex-col md:flex-row bg-white rounded-xl md:bg-transparent shadow-black/20 md:shadow-none ">
          <div className="flex justify-center md:justify-end">
          <div className="shadow-lg w-full p-4 lg:w-[250px] lg:p-0 bg-white rounded-t-xl lg:rounded-l-xl lg:rounded-r-none  flex justify-center items-center">
              <img
                className="pt-4 lg:pt-0 h-28 lg:h-24"
                src="https://firebasestorage.googleapis.com/v0/b/clean-aid-plus.appspot.com/o/trainedstaff.png?alt=media&token=d64c3def-93ee-4346-847a-0cf2368d5973"
                alt="heppa filters logo"
              />
            </div>
          </div>
          <div className="text-center bg-white shadow-lg rounded-b-xl lg:rounded-r-xl lg:rounded-l-none p-4 hover:bg-black hover:text-[#fff]">
            <h1 className=" text-[#147EFB] font-bold text-xl pb-4 hover:text-[#14fb72]">
            Trained and Bonded Staff
            </h1>
            <p >
            Our cleaning staff are fully trained according to WSBC standards and bonded for your peace of mind. We follow detailed cleaning procedures to deliver consistent, high quality results you can rely on.
            </p>
          </div>
        </div>
     
        {/* <button
          className="bg-[#147EFB] text-white  rounded-lg px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          data-aos="fade-down"
          data-aos-delay="700"
          // onClick={() => router.push(`about`)}
        >
         <Link href="/about"> Learn More{" "}</Link>
          <IoIosArrowDroprightCircle className="text-2xl inline ml-2 align-middle" />
        </button>
      */}
      </div>
    </section>
  );
};

export default About;
