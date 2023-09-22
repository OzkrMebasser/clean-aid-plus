import React from 'react'
import Blog from '../components/Blog'
import Header from '../components/Headers/TransHeader/Header'
import Footer from '../components/Footer/FooterInfo/Footer';
import ActionButton from '../components/ActionButton/ActionButton';

const blogPage = () => {
  return (
    <>
   <Header/>
   <Blog/>

   <ActionButton/>
   <Footer/>
    </>
  )
}

export default blogPage