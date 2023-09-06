"use client"

import resistanceImg from '../../../public/assets/img/workouts/resistance.png';
import boxingImg from '../../../public/assets/img/workouts/boxing.png';
import bodyPumpImg from '../../../public/assets/img/workouts/body-pump.png';
import yogaImg from '../../../public/assets/img/workouts/yoga.png';
import fullBodyImg from '../../../public/assets/img/workouts/full-body.png';
import fitnessImg from '../../../public/assets/img/workouts/fitness.png';
import battleRopeImg from '../../../public/assets/img/workouts/battle-rope.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import the main Swiper CSS file
// import 'swiper/components/navigation/navigation.css'; // Import additional CSS for Swiper's navigation component


import '../workoutSlider.css';
// import { Navigation } from 'swiper';

const programs = [
  {
    image: resistanceImg,
    name: 'Resistance',
  },
  {
    image: boxingImg,
    name: 'Boxing',
  },
  {
    image: bodyPumpImg,
    name: 'Body Pump',
  },
  {
    image: yogaImg,
    name: 'Yoga',
  },
  {
    image: fullBodyImg,
    name: 'Full Body',
  },
  {
    image: fitnessImg,
    name: 'Fitness',
  },
  {
    image: battleRopeImg,
    name: 'Battle Rope',
  },
]

const WorkoutSlider = () => {
 
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={32}
      navigation={true}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      className='workoutSlider'
    >
      {programs.map((program, idx) => {
        const { image, name } = program;
        return (
          <SwiperSlide
            className='max-w-[320px] max-h-[320px] relative bg-purple-200'
            key={idx}
          >
            <img className='w-full h-full object-cover' src={image} alt='' />
            <div className='absolute left-[20px] bottom-[20px] bg-white h-[26px] px-[14px] flex items-center justify-center rounded-[1px]'>
              <div className='font-primary font-semibold text-sm text-neutral-500'>
                {name}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkoutSlider;