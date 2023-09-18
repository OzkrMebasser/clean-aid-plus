import React from "react";

const BookForm = () => {
  return (
    <>
      <div class="container mx-auto pt-[180px] pb-[100px] ">
        <div class=" shadow-[0px_0px_20px_1px_#718096] lg:rounded-l-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:rounded-r-lg ">
          <div class="flex justify-center text-6xl mx-auto w-full lg:rounded-l-lg">
            <img className=" lg:rounded-l-lg object-fill " src="https://firebasestorage.googleapis.com/v0/b/clean-aid-plus.appspot.com/o/contactImage.jpeg?alt=media&token=94f54237-0b69-4ec8-86f0-dae3798c5236" alt="" />
          </div>
          <div className="flex items-center  justify-center bg-gray-100 lg:rounded-r-lg">
            <div className="mx-auto w-full h-full bg-white p-8 lg:rounded-r-lg">
              <form action="https://formbold.com/s/oJgyZ" method="POST">
                <div className="mb-5 mt-8">
                  <label
                    for="name"
                    className="mb-3 block text-base font-bold "
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#147EFB] focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <label
                    for="phone"
                    className="mb-3 block text-base font-bold"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone number"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#147EFB] focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <label
                    for="email"
                    className="mb-3 block text-base font-bold"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#147EFB] focus:shadow-md"
                  />
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label
                        for="date"
                        className="mb-3 block text-base font-bold"
                      >
                        Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        id="date"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#147EFB] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label
                        for="time"
                        class="mb-3 block text-base font-bold"
                      >
                        Time
                      </label>
                      <input
                        type="time"
                        name="time"
                        id="time"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#147EFB] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>
                {/* 
    <div class="mb-5 pt-3">
      <label
        class="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl"
      >
        Address Details
      </label>
      <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <input
              type="text"
              name="area"
              id="area"
              placeholder="Enter area"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <input
              type="text"
              name="city"
              id="city"
              placeholder="Enter city"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <input
              type="text"
              name="state"
              id="state"
              placeholder="Enter state"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <input
              type="text"
              name="post-code"
              id="post-code"
              placeholder="Post Code"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>
    </div> */}
                  


                <div>
                  <button className="mt-8 hover:shadow-form w-full rounded-md  py-3 px-8 text-center text-base font-semibold text-white outline-none bg-[#147EFB] text-white rounded-lg px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Book Appointment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookForm;
