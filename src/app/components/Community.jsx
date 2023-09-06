"use client"

import communityImg1 from '../../../public/assets/img/community/img1.png';
import communityImg2 from '../../../public/assets/img/community/img2.png';
import communityImg3 from '../../../public/assets/img/community/img3.png';
import communityImg4 from '../../../public/assets/img/community/img4.png';
import communityIcn from '../../../public/assets/img/community/icons/community-icn.svg';

import CommunitySlider from './CommunitySlider';

const  testimonials = [
  {
    image: communityImg1,
    name: 'Mark A.',
    message:
      '“Great location, great price and great, helpful people. What to want more?”',
  },
  {
    image: communityImg2,
    name: 'Lauren K.',
    message:
      '“Gymme changed my life. Not only physically but mentally as well. I’m a better mother, and all around better human being because of this gym.”',
  },
  {
    image: communityImg3,
    name: 'Jhon D.',
    message:
      '“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”',
  },
  {
    image: communityImg4,
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
            className='section-title-group max-w-[240px] px-4 lg:px-0 lg:ml-0 mx-auto'
            data-aos='fade-up'
            data-aos-offset='200'
            data-aos-delay='200'
          >
            <img src={communityIcn} alt='' />
            <h2 className='h2 section-title'>
            Community <span className='text-primary-200'>.</span>
            </h2>
          </div>
          
          <div
            className='absolute -right-[375px] lg:-right-[280px] w-[1140px] top-48 lg:top-0'
            data-aos='fade-left'
            data-aos-offset='200'
            data-aos-delay='300'
          >
            <CommunitySlider testimonials={testimonials} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;