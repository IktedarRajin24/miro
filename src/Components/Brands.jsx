import React from "react";
import Marquee from "react-fast-marquee";

const Brands = () => {
  return (
    <div>
      <p className="text-slate-500 text-center">Trusted by 45M+ users</p>
      <Marquee speed={50} className="lg:w-[85%] w-[95%] mx-auto my-12 px-5">
        <div className="md:w-[230px] w-[150px] mx-8">
          <img src="images/walmart.png" alt="walmart" />
        </div>
        <div className="md:w-[230px] w-[150px] mx-8">
          <img src="images/cisco.png" alt="cisco" />
        </div>
        <div className="md:w-[230px] w-[150px] mx-8">
          <img src="images/deloitte.png" alt="deloitte" />
        </div>
        <div className="md:w-[230px] w-[150px] mx-8">
          <img src="images/Volvo.png" alt="volvo" />
        </div>
        <div className="md:w-[230px] w-[150px] mx-8">
          <img src="images/okta.png" alt="okta" />
        </div>
        <div className="md:w-[230px] w-[150px] mx-8">
          <img src="images/walmart.png" alt="walmart" />
        </div>
        <div className="md:w-[230px] w-[150px] mx-8">
          <img src="images/cisco.png" alt="cisco" />
        </div>
        <div className="md:w-[230px] w-[150px] mx-8">
          <img src="images/deloitte.png" alt="deloitte" />
        </div>
        <div className="md:w-[230px] w-[150px] mx-8">
          <img src="images/Volvo.png" alt="volvo" />
        </div>
        <div className="md:w-[230px] w-[150px] mx-8">
          <img src="images/okta.png" alt="okta" />
        </div>
      </Marquee>
    </div>
  );
};

export default Brands;
