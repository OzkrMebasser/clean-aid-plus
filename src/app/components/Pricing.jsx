"use client"

import priceIcn from '../../../public/assets/img/pricing/icons/price.svg';

import PlanList from './PlanList';

const plans = [
  {
    name: 'Basic',
    price: '20',
    list: [
      { name: 'unlimited gym access' },
      { name: '1 training programs' },
      { name: 'free fitness consultation' },
    ],
    delay: 600,
  },
  {
    name: 'Premium',
    price: '35',
    list: [
      { name: 'unlimited gym access' },
      { name: '5 training programs' },
      { name: 'free fitness consultation' },
      { name: 'personal trainer' },
    ],
    delay: 800,
  },
  {
    name: 'Elite',
    price: '49',
    list: [
      { name: 'unlimited gym access' },
      { name: 'all training programs' },
      { name: 'free fitness consultation' },
      { name: 'personal trainer' },
      { name: '50% off drinks' },
    ],
    delay: 1000,
  },
]

const Pricing = () => {


  return (
    <section className='section'>
      <div
        className='section-title-group max-w-[540px] mx-auto px-4 lg:px-0'
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-delay='200'
      >
        <img src={priceIcn} alt='' />
        <h2 className='h2 section-title'>
        Pricing plan <span className='text-primary-200'>.</span>
        </h2>
      </div>
      <PlanList plans={plans} />
    </section>
  );
};

export default Pricing;