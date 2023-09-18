"use client";
import { AiTwotonePhone } from "react-icons/ai";

const Join = () => {
  return (
    <section className="bg-neutral-500 min-h-[537px]">
      <div className="container mx-auto">
        {/* image & text wrapper */}
        <div className="flex flex-col md:flex-row md:items-center md:-space-x-12 -space-y-24 lg:-space-y-0">
          {/* image */}
          <div
            className="mt-[50px] max-w-[276px] md:max-w-[442px] lg:max-w-full"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-delay="200"
          >
            <img
              src="https://images.pexels.com/photos/6197116/pexels-photo-6197116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Call us"
            />
          </div>
          {/* text */}
          <div
            className="max-w-[350px] lg:max-w-[492px] ml-[30px]"
            data-aos="fade-left"
            // data-aos-offset='100'
            data-aos-delay="200"
          >
            <h2 className="text-shadow h1 inline md:text-[60px] md:leading-[62px] text-white mb-4 lg:mb-6 ">
              We handle the cleaning, & you
            </h2>
            <h2 className="ml-3 inline h1 md:text-[60px] md:leading-[62px] text-[#0eb04f] font-black green-text-shadow">
              {/* focus on what&apos;s important */}
              focus on what truly matters for your business
            </h2>

            <p className="text-shadow text-body-sm md:text-body-md text-white mb-4 lg:mb-6 max-w-[348px] md:max-w-[470px] lg:max-w-[492px] mt-2">
            Our professional commercial cleaning services allow you to devote your time and energy to managing your core business operations and enhancing your productivity.
            </p>
            <button className="bg-[#147EFB] text-white rounded-lg px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Call Us Now{" "}
              <AiTwotonePhone className="text-2xl inline ml-2 align-middle" />
            </button>
            <button className="bg-[#147EFB] text-white rounded-lg px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Services{" "}
              <AiTwotonePhone className="text-2xl inline ml-2 align-middle" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
