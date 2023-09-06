"use client"
// import { workouts } from "../utils/data";
import ResistanceImg from '../assets/img/workouts/resistance.png';
import BoxingImg from '../assets/img/workouts/boxing.png';
import BodyPumpImg from '../assets/img/workouts/body-pump.png';
import YogaImg from '../assets/img/workouts/yoga.png';
import FullBodyImg from '../assets/img/workouts/full-body.png';
import FitnessImg from '../assets/img/workouts/fitness.png';
import BattleRopeImg from '../assets/img/workouts/battle-rope.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../workoutSlider.css';
import { Navigation } from 'swiper';

const programs = [
  {
    image: ResistanceImg,
    name: 'Resistance',
  },
  {
    image: BoxingImg,
    name: 'Boxing',
  },
  {
    image: BodyPumpImg,
    name: 'Body Pump',
  },
  {
    image: YogaImg,
    name: 'Yoga',
  },
  {
    image: FullBodyImg,
    name: 'Full Body',
  },
  {
    image: FitnessImg,
    name: 'Fitness',
  },
  {
    image: BattleRopeImg,
    name: 'Battle Rope',
  },
]

const WorkoutSlider = () => {
  // const { programs } = workouts;
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