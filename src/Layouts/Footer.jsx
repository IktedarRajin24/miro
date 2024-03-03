import React from "react";
import { FaMinus } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#02033B] text-white w-full">
      <div className="lg:w-[85%] w-[95%] mx-auto py-20 flex lg:flex-row flex-col justify-between md:items-start items-center 2xl:gap-0 gap-10">
        <div className="2xl:w-[30%] w-11/12">
          <h1 className="text-xl font-bold mb-10">Scan. Detect. Remove.</h1>
          <div className="flex items-center gap-x-6 mb-10">
            <img src="images/twitter.png" alt="twitter" />
            <img src="images/facebook.png" alt="facebook" />
            <img src="images/youtube.png" alt="youtube" />
          </div>

          <div className="flex items-center gap-x-6 mb-10">
            <p className="text-xs underline cursor-pointer">Privacy Policy</p>
            <p className="text-xs underline cursor-pointer">
              Terms of services
            </p>
          </div>
          <div>
            <p className="text-xs mb-5 2xl:w-2/3">
              Copyright © 2022 Certo Software Limited | Registered in England &
              Wales No. 10072356
            </p>
            <p className="text-xs">Designed & developed by Bigger Picture</p>
          </div>
        </div>
        <div className="2xl:w-[30%] w-11/12">
          <h1 className="text-3xl w-[40%] font-bold pb-5 border-b-2 border-white mb-16">
            Miro.
          </h1>
          <p className="text-[#ffc247] mb-5 flex items-center gap-x-3">
            <FaMinus />
            iPhone
          </p>
          <p className="text-[#ffc247] mb-5 flex items-center gap-x-3">
            <FaMinus /> Android
          </p>
          <p className="text-[#ffc247] mb-5 flex items-center gap-x-3">
            <FaMinus />
            Help
          </p>
          <p className="text-[#ffc247] mb-5 flex items-center gap-x-3">
            <FaMinus />
            About
          </p>
          <p className="text-[#ffc247] mb-5 flex items-center gap-x-3 h-auto">
            <FaMinus />
            Insights
          </p>
        </div>
        <div className="2xl:w-[30%] w-11/12">
          <form className="bg-[#ffc247] 2xl:w-11/12 w-full h-[233px] rounded-3xl relative">
            <img
              src="images/card-design.png"
              className="w-auto mx-auto absolute left-0 right-0 z-0"
            />
            <div className="absolute z-10 py-7 px-7">
              <p className="text-[#02033b] text-xl font-bold mb-5">
                Sign up to our newsletter
              </p>
              <p className="text-[#02033b] text-sm mb-10">
                Receive the latest mobile security news, exclusive discounts &
                offers straight to your inbox!
              </p>
              <div className="w-full flex justify-between items-center">
                <input
                  type="email"
                  placeholder="Email address"
                  className="rounded-s-full ps-4 py-1 w-full"
                />
                <button className="bg-[#02033b] px-4 py-1 rounded-e-full w-[30%]">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="lg:w-[85%] w-[90%] mx-auto pb-20">
        <p className="2xl:w-1/2 md:w-[70%]">
          Apple, the Apple logo, and iPhone are trademarks of Apple Inc.,
          registered in the U.S. and other countries. App Store is a service
          mark of Apple Inc. Android, Google Play and the Google Play logo are
          trademarks of Google LLC.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
