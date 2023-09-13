import React from 'react';
import Services from '../components/Services';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesSlider from '../components/ServicesSlider';

const servicesPage = () => {
  return (
    <>
   <Header/>
   <Services/>
   <ServicesSlider/>
   <Footer/>
    </>
  )
}

export default servicesPage;