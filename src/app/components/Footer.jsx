"use client";
import { SiFacebook } from "react-icons/si";

const blueLogo =
  "https://firebasestorage.googleapis.com/v0/b/clean-aid-plus.appspot.com/o/textBlueLogo.png?alt=media&token=41c8690e-2125-4f30-8383-1d689c8bce01";

const Footer = () => {
  // const { logo, copyrightText } = footer;
  return (
    <footer className="bg-neutral-500 h-[200px] lg:h-[125px] md:h-[195px] px-[20px] items-center">
      <div
        className="container mx-auto flex flex-col md:flex-row justify-between items-center"
        data-aos='fade-up'
        data-aos-delay='200'
      >
        <p className="text-neutral-300 text-sm mb-4 md:mb-4 mt-16 lg:mt-24 lg:mb-20">
          All rights reserved.{" "}
          <img className="h-4 inline" src={blueLogo} alt="Blue Logo" /> 2023.
        </p>

        <ul className="lg:mt-[5.5rem] flex flex-wrap gap-4">
          {/* Social media icons (Replace with your actual social media icons) */}
          <li>
            <a href="#">
              {/* <img src="path/to/social-media-icon-1.png" alt="Social Media Icon 1" /> */}
              <SiFacebook className="h-6 w-6" />
            </a>
          </li>
          <li>
            <a href="#">
              {/* <img src="path/to/social-media-icon-1.png" alt="Social Media Icon 1" /> */}
              <SiFacebook className="h-6 w-6" />
            </a>
          </li>
          <li>
            <a href="#">
              {/* <img src="path/to/social-media-icon-1.png" alt="Social Media Icon 1" /> */}
              <SiFacebook className="h-6 w-6" />
            </a>
          </li>
        </ul>
           <p className="text-[10px] text-center lg:mt-[5.5rem] ">
          <a href="#">Made with &#x1F9E1; by Ozkr Mebasser</a>.
        </p>
      </div>
    
     
  
    </footer>
  );
};

export default Footer;
