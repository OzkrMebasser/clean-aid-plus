"use client"
import DarkHeader from '../components/Headers/DarkHeader/DarkHeader';
import BookForm from "../components/Book/BookForm";
import Footer from '../components/Footer/FooterInfo/Footer';
import ActionButton from "../components/ActionButton/ActionButton";
import { BiPlusMedical } from "react-icons/bi";

const ContactForm = () => {
  return (
    <>
<DarkHeader/>

    <BookForm/>
    <ActionButton/>
<Footer/>
</>
  );
};

export default ContactForm;
