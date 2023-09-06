"use client"


import questionMarkIcn from '../../../public/assets/img/faq/icons/question-mark.svg';


import Accordion from './Accordion';

const accordions= [
  {
    question: 'How can I book a workout class?',
    answer:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
  },
  {
    question: 'Can I pay by cash for my membership?',
    answer:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
  },
  {
    question: 'What age do I need to be to join?',
    answer:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
  },
  {
    question: 'Are there any lockers?',
    answer:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
  },
  {
    question: 'How do I cancel my membership?',
    answer:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
  },
  {
    question: 'Is there water available at the gym?',
    answer:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
  },
]

const Faq = () => {

  return (
    <section className='section pt-[480px] lg:pt-[280px] mb-[80px] lg:mb-0'>
      <div className='max-w-[768px] mx-auto lg: bg-no-repeat bg-custom bg-center lg:h-[1160px] lg:pt-6'>
        {/* section title */}
        <div
          className='section-title-group justify-start lg:justify-center -space-x-4 lg:max-w-[540px] mx-auto px-4 lg:px-0'
          data-aos='fade-up'
          data-aos-offset='200'
          data-aos-delay='200'
        >
          <img className='lg:hidden' src={questionMarkIcn} alt='' />
          <h2 className='h2 section-title lg:mt-[100px]'>
          FAQ<span className='text-primary-200'>.</span>
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