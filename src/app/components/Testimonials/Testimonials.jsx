import React,{useEffect, useState} from "react";
import { BiPlusMedical } from "react-icons/bi";

import "./testimonials.css"
// Data
const initialImages = [
  {
    img: "https://images.pexels.com/photos/259239/pexels-photo-259239.jpeg?auto=compress&cs=tinysrgb&w=1600",
    companyName: "Company 1",  
    desc: "They clean our office fully once a week. It remains spotless! I recommend it."
  },
  { 
    img: "https://images.pexels.com/photos/17243181/pexels-photo-17243181/free-photo-of-restaurante-amarillo-mesas-techo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    companyName: "Company 2",
    desc: "We hired cleaning services for our restaurant after closing. The kitchen is left shining for the next day."
  },
  {
    img: "https://images.pexels.com/photos/1824392/pexels-photo-1824392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    companyName: "Company 3",
    desc: "The cleaning staff keeps our gym disinfected daily. Very good service."
  },
  {
    
    img: "https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    companyName: "Company 4",
    desc: "They clean our dental clinic weekly. They meet the necessary disinfection standards."
  },
  {
    img: "https://images.pexels.com/photos/5771896/pexels-photo-5771896.jpeg?auto=compress&cs=tinysrgb&w=1600",
    companyName: "Company 5",
    desc: "Excellent cleaning service for our clothing store. The fitting rooms and shelves look impeccable."
  }
]

// Carousel
const Testimonials = () => {
  const [images, setImages] = useState(initialImages);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      moveItems();
    }, 5000); // Change the interval (in milliseconds) as desired

    return () => clearInterval(interval);
  }, [currentIndex]);

  const moveItems = () => {
    // Get the next index
    const nextIndex = (currentIndex + 1) % images.length;

    // Update the state with the new current index
    setCurrentIndex(nextIndex);
  };

  const handleItemClick = (index) => {
    setCurrentIndex(index);
  };

  // Function to create a circular index based on the current index and array length
  const getCircularIndex = (index, length) => {
    return (index + length) % length;
  };

  return (

    <section className=" py-[40px] md:py-[80px] lg:pt-[80px] lg:pb-[70px]">
    <div className="container mx-auto px-[20px] lg:px-[90px]">
      <div
        className="flex justify-center items-center mb-[25px] "
        data-aos="fade-up"
        data-aos-delay="50"
      >
        <h2 className="h2 section-title uppercase font-black">
          Testimonials
          <span className="text-[#147EFB]">
            <BiPlusMedical className="text-lg" />
          </span>
        </h2>

        
      </div>
      <p 
      data-aos="fade-down-right"
      data-aos-delay="50"
      className="text-center font-semibold text-base">Check what our clients are saying</p>
      <div className="carousel-container ">
      <div className="d-flex flex-column  ">
        <div className="carousel-items ">
          {/* Render 5 items on the screen */}
          {Array(5)
            .fill()
            .map((_, index) => {
              const imageItem =
                images[
                  getCircularIndex(currentIndex + index - 2, images.length)
                ];
              return (
                <div
                  key={index}
                  className={`${index === 2 ? "center" : "opacity"} ${
                    (index === 0 || index === 4) &&
                    "end d-none d-md-block d-lg-block "
                  }
                    ${
                      (index === 1 || index === 3) &&
                      "d-none d-md-block d-lg-block"
                    }`}
                  onClick={() =>
                    handleItemClick(
                      getCircularIndex(currentIndex + index - 2, images.length)
                    )
                  }
                >
                  <img id="boxShadow" className="lg:max-w-[180px] lg:max-h-[180px] max-w-[170px] max-h-[170px] cursor-pointer rounded-[10px] " src={imageItem.img} alt={imageItem.companyName} />
                </div>
              );
            })}
        </div>
        <div>
          {/* Render the current item description */}
          <div 
          data-aos="fade-down-left"
          className="mx-auto description w-[280px] lg:w-full text-center font-semibold text-base">
            <p 
             
            //  data-aos-delay="50"
            className="uppercase font-black mt-8">
              <b>{images[currentIndex].companyName}</b>
            </p>
            <p 
             className="mt-4 lg:mt-2"
             
            >{images[currentIndex].desc}</p>
          </div>
        </div>
      </div>
    </div>
</div>

      </section>



   
  );
};

export default Testimonials;