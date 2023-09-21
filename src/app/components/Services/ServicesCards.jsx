"use client";
import React from "react";
import { BiPlusMedical } from "react-icons/bi";

const blueLogo =
  "https://firebasestorage.googleapis.com/v0/b/clean-aid-plus.appspot.com/o/textBlueLogo.png?alt=media&token=41c8690e-2125-4f30-8383-1d689c8bce01";

const ServicesCards = () => {
  return (
    <>
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <section className="py-[80px] md:py-[110px] lg:pt-[140px] lg:pb-[180px]">
        <div className=" container mx-auto px-[20px] lg:px-[135px]">
          <div className="flex flex-wrap -mx-4 ">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] lg:mb-20">
                <div
                  className="section-title-group justify-start mt-5"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <h2 className="h2 mt-4 section-title uppercase font-black">
                    Our Services
                    <span className="text-[#147EFB]">
                      <BiPlusMedical className="text-lg" />
                    </span>
                  </h2>
                </div>
                <p className="text-base  font-semibold">
                  <img className="h-5 inline" src={blueLogo} alt="Blue Logo" />{" "}
                  offers top-quality cleaning services for offices, apartment
                  buildings, and carpets using green-friendly solutions and best
                  practices. Our trained staff help building managers stay
                  focused on their core responsibilities by maintaining
                  interiors. We understand the importance of fresh carpets and
                  can schedule quarterly cleanings. <br />
                  <br />
                  Contact us to discuss cleaning services for your office,
                  strata, carpets, construction sites, and more. Our goal is to
                  consistently bring results so you can focus on your business,
                  not cleaning.
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4">
            <ServiceCard
              CardTitle="Offices Buildings"
              CardDescription="CleanAid provide office cleaning to our clients with the top equipment and green-friendly solutions. Our trainers our ISSC CMI qualified, therefore the practices we use are the best in class combined with the latest practices to consistently bring the results for your team to completely focus on their jobs and not ours. Connect with our team to discuss how you office can qualify for free carpet cleaning on a quarterly basis."
              image="https://firebasestorage.googleapis.com/v0/b/clean-aid-plus.appspot.com/o/clean-aid-offices.jpg?alt=media&token=a7d2d84a-8815-4001-b706-48ad95667135"
            />
             <ServiceCard
              CardTitle="Strata Buildings"
              CardDescription="CleanAid strata team is abundant in experience and disciplined in their detail. Our strata team is held accountable for building managers to focus on other responsibilities other than the interior maintenance of the building."
              image="https://firebasestorage.googleapis.com/v0/b/clean-aid-plus.appspot.com/o/officesBuildings.jpg?alt=media&token=9d9ec95f-a801-4027-922e-5a7e1f6b2f1b"
            />


            {/* <ServiceCard
           
              CardTitle="Strata Buildings "
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              image="https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <ServiceCard
              date="Aug 02, 2023"
              CardTitle="Behind the Scenes of a Professional Cleaning Service: An Interview with Our Founder"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              image="https://images.pexels.com/photos/5591970/pexels-photo-5591970.jpeg?auto=compress&cs=tinysrgb&w=1600"
            /> */}
          </div>
        </div>
      </section>
    </>
  );
};

const ServiceCard = ({ image, date, CardTitle, CardDescription }) => {
  const handleTouchStart = (event) => {
    event.currentTarget.classList.toggle("hover");
  };

  return (
    <>
      <div className="">
        <div className="cols">
          <div
            className="lg:w-[650px] lg:h-auto w-full "
            onTouchStart={handleTouchStart}
          >
            <div className="container mx-auto ">
              <div
                className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] front mb-8 "
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="inner">
                  <h1 className="text-[white] text-3xl font-black">
                    {CardTitle}
                  </h1>
                  <p className="text-8px mt-4 text-gray-300">
                    click image to see more
                  </p>
                </div>
              </div>
              <div className="back shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
                <div className="inner">
                  <p className="text-10px text-neutral-500">
                    {CardDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCards;
