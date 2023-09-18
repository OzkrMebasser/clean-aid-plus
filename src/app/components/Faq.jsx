"use client"

import { BiPlusMedical } from "react-icons/bi";



import Accordion from './Accordion';

const accordions= [
  {
    question: 'Question number One?',
    answer:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
  },
  {
    question: 'Question number Two?',
    answer:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
  },
  {
    question: 'Question number There?',
    answer:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
  },
  {
    question: 'Question number Four?',
    answer:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
  },
  {
    question: 'Question number Five?',
    answer:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
  },
  {
    question: 'Question number Six?',
    answer:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
  },
]

const Faq = () => {

  return (
    <section className='section mt-[50px]  mb-[80px] lg:mb-0'>
      
      <div className='max-w-[768px] mx-auto lg: bg-no-repeat bg-custom bg-center  '>
        {/* section title */}
        <div
          className='section-title-group justify-start lg:justify-center -space-x-4 lg:max-w-[540px] mx-auto px-4 lg:px-0'
          data-aos='fade-up'
          data-aos-offset='200'
          data-aos-delay='200'
        >
         
         <h2 className='h2 section-title uppercase font-black'>
          FAQ<span className='text-[#147EFB]'><BiPlusMedical className="text-lg"/></span>
          </h2>
        </div>
        <div
          className='flex flex-col gap-y-4 px-4'
          data-aos='fade-up'
          data-aos-offset='300'
          data-aos-delay='200'
        >
          {accordions.map((accordion, idx) => {
            return <Accordion accordion={accordion} key={idx} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;