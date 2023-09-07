"use client"

const moveOutCleaning = "https://firebasestorage.googleapis.com/v0/b/clean-aid-plus.appspot.com/o/Residential%2FmoveOutCleaning.jpeg?alt=media&token=4af16815-6504-44fe-9465-a54602038b0a";
const oneTimeCleaning = "https://firebasestorage.googleapis.com/v0/b/clean-aid-plus.appspot.com/o/Residential%2FoneTimeCleaning.jpg?alt=media&token=2b547a57-beda-4c7f-8127-a5b09f1ce80e";
const recurringCleaning = "https://firebasestorage.googleapis.com/v0/b/clean-aid-plus.appspot.com/o/Residential%2FrecurringCleaning.jpg?alt=media&token=c0758531-036a-420e-be69-d73261436928";
const carpetCleaning = "https://firebasestorage.googleapis.com/v0/b/clean-aid-plus.appspot.com/o/Residential%2FcarpetCleaning.jpeg?alt=media&token=de847ff6-ca9b-404d-aa2e-3028c4a7b636";


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import the main Swiper CSS file
// import 'swiper/components/navigation/navigation.css'; // Import additional CSS for Swiper's navigation component


import '../workoutSlider.css';
// import { Navigation } from 'swiper';

const programs = [
  {
    image: moveOutCleaning,
    name: 'Move-out Cleaning',
  },
  {
    image: oneTimeCleaning,
    name: 'One-time Cleaning',
  },
  {
    image: recurringCleaning,
    name: 'Recurring Cleaning',
  },
  {
    image: carpetCleaning,
    name: 'Carpet Cleaning',
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