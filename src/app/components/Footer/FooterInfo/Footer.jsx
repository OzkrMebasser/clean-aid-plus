"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import "../../../globals.css"

//Open hours
const OpenHours = () => {
  const insertColon = (time) => {
    const center = time.length - 2;
    const timeWithColon = [time.slice(0, center), ":", time.slice(center)].join(
      ""
    );
    return timeWithColon;
  };

  const formatTime = (time) => {
    if (time) {
      if (time >= 1200) {
        const formattedTime = time === 1200 ? 1200 : time - 1200;
        return `${insertColon(formattedTime.toString())} PM`;
      } else {
        return `${insertColon(time.toString())} AM`;
      }
    } else {
      return "Closed now";
    }
  };

  const weekIndex = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  };

  const determineDay = (day, dayDiv) => {
    const now = new Date();
    if (day === weekIndex[now.getDay()]) {
      dayDiv.style.fontWeight = "bold";
      dayDiv.style.color = "#147EFB";
      dayDiv.style.textDecoration = "underline";
    } else {
      dayDiv.style.color = "#4d4d4d";
    }
  };

  useEffect(() => {
    const hours = {
      Monday: { start: 900, end: 1800 },
      Tuesday: { start: 900, end: 1800 },
      Wednesday: { start: 900, end: 1800 },
      Thursday: { start: 900, end: 1800 },
      Friday: { start: 900, end: 1800 },
      Saturday: {},
      Sunday: {},
    };

    const rootElement = document.getElementById("open-hours");
    const table = document.createElement("table");

    if (rootElement) {
      for (const day in hours) {
        const dayDiv = document.createElement("tr");
        determineDay(day, dayDiv);

        const dayTitleElement = document.createElement("td");
        const dayTimesElement = document.createElement("td");
        const dayTitle = document.createTextNode(day + " ");
        dayTitleElement.appendChild(dayTitle);
        dayTitleElement.style.width = "100px";
        dayDiv.appendChild(dayTitleElement);

        let dayHours = "";
        if (Object.keys(hours[day]).length === 0) {
          dayHours = "Closed";
        } else {
          dayHours = `${formatTime(hours[day].start)} - ${formatTime(
            hours[day].end
          )}`;
        }

        const dayTimes = document.createTextNode(dayHours);
        dayTimesElement.appendChild(dayTimes);
        dayDiv.appendChild(dayTimesElement);

        table.appendChild(dayDiv);
      }

      rootElement.appendChild(table);
    }
  }, []);

  return (
    <>
      {/* <section className="py-[40px] md:py-[80px] lg:pt-[80px] lg:pb-[70px]">
        <div className="container mx-auto px-[20px] lg:px-[135px]"> */}

      <div className="font-bold text-left" id="open-hours"
      data-aos="fade-down-right"
      >
        <h3 className="mb-2 font-black uppercase text-[#147EFB]">
          Our bussines hours:
        </h3>
      </div>

      {/* </div>
      </section> */}
    </>
  );
};

OpenHours;

// Footer component

import { SiFacebook } from "react-icons/si";
import { FaMapLocationDot } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const blueLogo =
  "https://firebasestorage.googleapis.com/v0/b/clean-aid-plus.appspot.com/o/textBlueLogo.png?alt=media&token=41c8690e-2125-4f30-8383-1d689c8bce01";

const Footer = () => {
  return (
    <footer className=" text-center font-semibold text-base lg:text-left">
      <div 
      data-aos="fade-down"
      className=" bg-neutral-500 h-[68px] border-t-2 border-blue-500 flex items-center justify-center text-white lg:justify-between">
        {/* <div className="mr-12 hidden lg:block"> */}
        <div className="mr-12 lg:pl-24 ">
          <span>Get connected with us:</span>
        </div>
        <div className="flex justify-center lg:pr-24">
          <a href="#" className="mr-6 font-semibold text-3xl">
            <SiFacebook />
          </a>
          <a href="#" className="mr-6 font-semibold text-3xl">
            <ImLinkedin />
          </a>

          {/* Rest of social icons */}
        </div>
      </div>

      <div className="mx-6 py-10 px-[20px] lg:px-[120px]">
        <div
          
          className="grid-1 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* Bussines Hours*/}

          <OpenHours 
          
          />
          {/* Services */}
          <div className="text-left lg:text-center"
          data-aos="fade-right"
          >
            <h3 className="mb-2 font-black uppercase text-[#147EFB]">
              Our services:
            </h3>
            <p className="mb-2">
              <Link href="/services" className="text-[#4d4d4d]">
                Offices Building
              </Link>
            </p>
            <p className="mb-2">
              <Link href="/services" className="text-[#4d4d4d]">
                Strata Buildings
              </Link>
            </p>
            <p className="mb-2">
              <Link href="/services" className="text-[#4d4d4d]">
                Carpet Cleaning
              </Link>
            </p>
            <p>
              <Link href="/services" className="text-[#4d4d4d]">
                Other Cleaning
              </Link>
            </p>
          </div>

          {/* Contact */}
          <div className="text-left lg:text-right "
          data-aos="fade-up-right"
          >
            <h3 className="mb-2 font-black uppercase text-[#147EFB]">
              Contact Us
            </h3>
            <ul>
              <li className="mb-2">
                {" "}
                <FaMapLocationDot className="inline text-left text-[1.6rem]" />
                <a
                  href="https://maps.app.goo.gl/3Xg9sJFC7Td5xvNr8"
                  className="text-[#4d4d4d] ml-4"
                >
                  354-2223a Oak Bay Ave, Victoria BC, Canada
                </a>
              </li>
              <li className="mb-2">
                <BiSolidPhoneCall className="inline text-[1.6rem]" />
                <a href="tel:+17786779340" className="text-[#4d4d4d] ml-4">
                  (778)-677-9340
                </a>
              </li>
              <li className="mb-2">
                {" "}
                <p className="mb-2">
                <BsFillCalendarCheckFill className="inline text-[1.4rem]" />
                  <Link href="/contact"  className="text-[#4d4d4d] ml-4">
                 
                    Book a Consultation
                  </Link>
                </p>
              </li>
              <li className="mb-2">
              <MdEmail className="inline  text-[1.8rem]" />
                <a href="mailto:gmcgauley1@gmail.com" className="text-[#4d4d4d] ml-4">
                
                  gmcgauley1@gmail.com
                </a>
              </li>
            </ul>

            {/* <FaMapLocationDot/> */}

            {/* <BiSolidPhoneCall /> */}
          </div>
        </div>
      </div>

      <div className=" py-2 text-center bg-neutral-500"
      data-aos='fade-up'
      >
        <p className="text-neutral-300 text-sm mt-16">
          All rights reserved.{" "}
          <img className="h-4 inline" src={blueLogo} alt="Blue Logo" /> 2023.
        </p>

        <p className="text-[10px] mt-2 text-center mb-16 ">
          <a href="#">Made with &#x1F9E1; by Ozkr Mebasser</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
