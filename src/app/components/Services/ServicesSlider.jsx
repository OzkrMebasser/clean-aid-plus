import React from "react";
import Link from "next/link";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./services.css";

const Example = () => {
  const images = [
    "https://firebasestorage.googleapis.com/v0/b/clean-aid-plus.appspot.com/o/clean-aid-offices.jpg?alt=media&token=a7d2d84a-8815-4001-b706-48ad95667135",
    "https://firebasestorage.googleapis.com/v0/b/clean-aid-plus.appspot.com/o/officesBuildings.jpg?alt=media&token=9d9ec95f-a801-4027-922e-5a7e1f6b2f1b",
    "https://images.pexels.com/photos/6899397/pexels-photo-6899397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6238608/pexels-photo-6238608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ];

  return (
    <>
      <section className="bg-black py-[40px] md:py-[80px] lg:pt-[80px] lg:pb-[70px] ">
        <div className="container mx-auto  rounded-lg ">
          <Slide className="">
            <div className="each-slide-effect  ">
              <div style={{ backgroundImage: `url(${images[0]})`,  }}>
                <Link href="/services"><span className="rounded-lg text-[15px] text-center p-[17px] bg-white">Offices Buildings </span></Link>
               
             
              </div>
            </div>
            <div className="each-slide-effect ">
              <div style={{ backgroundImage: `url(${images[1]})` }}>
              <Link href="/services"><span className="rounded-lg text-[15px] text-center p-[17px] bg-white">Strata Buildings </span></Link>

              
              </div>
            </div>
            <div className="each-slide-effect">
              <div style={{ backgroundImage: `url(${images[2]})` }}>
              <Link href="/services"><span className="rounded-lg text-[15px] text-center p-[17px] bg-white">Carpet Cleaning </span></Link>

              
               
              </div>
            </div>
            <div className="each-slide-effect">
              <div style={{ backgroundImage: `url(${images[3]})` }}>
              <Link href="/services"><span className="rounded-lg text-[15px] text-center p-[17px] bg-white">Other Cleaning </span></Link>

            
                
              </div>
            </div>
          </Slide>
        </div>
      </section>
    </>
  );
};

export default Example;
