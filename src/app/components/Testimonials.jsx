"use client"
import { BiPlusMedical } from "react-icons/bi";


const testimoniaOne = "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1600";
const testimoniaTwo = "https://images.pexels.com/photos/5490235/pexels-photo-5490235.jpeg?auto=compress&cs=tinysrgb&w=1600";
const testimoniaThree = "";
const testimoniaFour = "";


import TestimoniaslSlider from './TestimoniaslSlider';

const  testimonials = [
  {
    image: testimoniaOne,
    name: 'Mark A.',
    message:
      '“Great location, great price and great, helpful people. What to want more?”',
  },
  {
    image: testimoniaTwo,
    name: 'Lauren K.',
    message:
      '“Gymme changed my life. Not only physically but mentally as well. I’m a better mother, and all around better human being because of this gym.”',
  },
  {
    image: testimoniaThree,
    name: 'Jhon D.',
    message:
      '“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”',
  },
  {
    image: testimoniaFour,
    name: 'Anne R.',
    message:
      '“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”',
  },
]

const Community = () => {

  return (
    <section className='section relative'>
      <div className='container mx-auto'>
        <div className='flex'>
          {/* section title */}
          <div
            className='mt-4 section-title-group max-w-[240px] px-4 lg:px-0 lg:ml-0 mx-auto'
            data-aos='fade-up'
            data-aos-offset='200'
            data-aos-delay='200'
          >
            
            <h2 className="h2 section-title uppercase font-black">
           Testimonials
            <span className="text-[#147EFB]">
              <BiPlusMedical className="text-lg" />
            </span>
          </h2>
          </div>
          
          <div
            className='absolute -right-[375px] lg:-right-[280px] w-[1140px] top-48 lg:top-0'
            data-aos='fade-left'
            data-aos-offset='200'
            data-aos-delay='300'
          >
            <TestimoniaslSlider testimonials={testimonials} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;