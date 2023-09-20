"use client"
import React, { useState } from "react";
import { BiPlusMedical } from "react-icons/bi";

const Services = () => {
  return (
    <>
      <section className="py-[80px] md:py-[110px] lg:pt-[140px] lg:pb-[180px] bg-black">
        <div className=" mx-auto px-[20px] lg:px-[135px]">
          <div className="flex flex-wrap -mx-4 ">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <div
                  className="section-title-group justify-start mt-5"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <h2 className="h2 section-title uppercase font-black">
                    Services
                    <span className="text-[#147EFB]">
                      <BiPlusMedical className="text-lg" />
                    </span>
                  </h2>
                </div>
                <p className="text-base text-body-color">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -mx-4">
            <ServiceCard
              date="Jan 05, 2023"
              CardTitle="The Top 5 Dirtiest Places in Your Home That You Never Clean"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              image="https://images.pexels.com/photos/5591780/pexels-photo-5591780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <ServiceCard
              date="Jul 22, 2023"
              CardTitle="Think Cleaning Services Are Only For the Rich? Think Again"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              image="https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <ServiceCard
              date="Aug 02, 2023"
              CardTitle="Behind the Scenes of a Professional Cleaning Service: An Interview with Our Founder"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              image="https://images.pexels.com/photos/5591970/pexels-photo-5591970.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;


const ServiceCard = ({ image, date, CardTitle, CardDescription }) => {

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div
        className="w-full px-4 md:w-1/2 lg:w-1/3 "
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="mx-auto mb-10 max-w-[370px] bg-slate-50">
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" src={image} alt="Sunset in the mountains" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{CardTitle}</div>
              <p className="text-[#147EFB] text-sm mt-2 mb-2">{date}</p>
              <p>{isExpanded ? CardDescription : CardDescription.substring(0, 120)}</p>

              <button className="text-black font-bold" onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? "Read Less" : "Read More..."}
              </button>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #cleaning
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #residential cleaning
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #janitorial
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
