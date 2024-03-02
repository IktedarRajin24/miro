import React from "react";
import Marquee from "react-fast-marquee";

const Brands = () => {
  return (
    <div>
      <p></p>
      <Marquee speed={50} className="lg:w-[85%] w-[95%] mx-auto my-12 px-5">
        <div className="w-[230px] mx-8">
          <img src="images/walmart.png" />
        </div>
        <div className="w-[230px] mx-8">
          <img src="images/cisco.png" />
        </div>
        <div className="w-[230px] mx-8">
          <img src="images/deloitte.png" />
        </div>
        <div className="md:w-[230px] mx-8">
          <img src="images/Volvo.png" />
        </div>
        <div className="w-[230px] mx-8">
          <img src="images/okta.png" />
        </div>
        <div className="w-[230px] mx-8">
          <img src="images/walmart.png" />
        </div>
        <div className="w-[230px] mx-8">
          <img src="images/cisco.png" />
        </div>
        <div className="w-[230px] mx-8">
          <img src="images/deloitte.png" />
        </div>
        <div className="w-[230px] mx-8">
          <img src="images/Volvo.png" />
        </div>
        <div className="w-[230px] mx-8">
          <img src="images/okta.png" />
        </div>
      </Marquee>
    </div>
  );
};

export default Brands;
