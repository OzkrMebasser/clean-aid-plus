"use client"
import React from 'react';
import Services from '../components/Services/Services';
import DarkHeader from '../components/Headers/DarkHeader/DarkHeader';
import Footer from '../components/Footer/FooterInfo/Footer';
import ServicesSlider from '../components/Services/ServicesSlider';
import ServicesCards from '../components/Services/ServicesCards'
import ActionButton from "../components/ActionButton/ActionButton";
import {BsFillBuildingsFill} from 'react-icons/bs'

const blueLogo =
  "https://firebasestorage.googleapis.com/v0/b/clean-aid-plus.appspot.com/o/textBlueLogo.png?alt=media&token=41c8690e-2125-4f30-8383-1d689c8bce01";


import '../components/Services/services.css'

const servicesPage = () => {
  return (
    <>
   <DarkHeader/>
   {/* <Services/>
   <ServicesSlider/> */}

   <ServicesCards/>
   <ActionButton/>
   <Footer/>
    </>
  )
}

export default servicesPage;