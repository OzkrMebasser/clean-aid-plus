"use client"
import WorkoutSlider from "../components/WorkoutSlider"
import calendarIcn from '../../../public/assets/img/workouts/icons/calendar.svg';

import "../workoutSlider.css";

const Workouts = () => {
  
 
  return (
    <section className='section'>
      {/* section title */}
      <div
        className='section-title-group max-w-[540px] mx-auto px-4 lg:px-0'
        data-aos='fade-up'
        data-aos-delay='200'
      >
        <img src={calendarIcn} alt='' />
        <h2 className='h2 section-title'>
        Training programs <span className='text-primary-200'>.</span>
        </h2>
      </div>
      <div data-aos='fade-up' data-aos-delay='300'>
        <WorkoutSlider />
      </div>
    </section>
  );
};

export default Workouts;