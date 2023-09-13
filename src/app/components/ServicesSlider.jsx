"use client"
import React from 'react';
  import Swiper from 'react-id-swiper';


  const ServicesSlider = () => {
    const params = {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      pagination: {
        el: '.swiper-pagination'
      }
    }
    
  return (
    <Swiper {...params}>
      <div style={{ backgroundImage:'url(https://firebasestorage.googleapis.com/v0/b/clean-aid-plus.appspot.com/o/Residential%2FmoveOutCleaning.jpeg?alt=media&token=4af16815-6504-44fe-9465-a54602038b0a)' }} />
      <div style={{ backgroundImage:'url(https://firebasestorage.googleapis.com/v0/b/clean-aid-plus.appspot.com/o/Residential%2FmoveOutCleaning.jpeg?alt=media&token=4af16815-6504-44fe-9465-a54602038b0a)' }} />
      <div style={{ backgroundImage:'url(https://firebasestorage.googleapis.com/v0/b/clean-aid-plus.appspot.com/o/Residential%2FmoveOutCleaning.jpeg?alt=media&token=4af16815-6504-44fe-9465-a54602038b0a)' }} />
      <div style={{ backgroundImage:'url(https://firebasestorage.googleapis.com/v0/b/clean-aid-plus.appspot.com/o/Residential%2FmoveOutCleaning.jpeg?alt=media&token=4af16815-6504-44fe-9465-a54602038b0a)' }} />
      <div style={{ backgroundImage:'url(https://firebasestorage.googleapis.com/v0/b/clean-aid-plus.appspot.com/o/Residential%2FmoveOutCleaning.jpeg?alt=media&token=4af16815-6504-44fe-9465-a54602038b0a)' }} />

    </Swiper>
  )
};

export default ServicesSlider;
  