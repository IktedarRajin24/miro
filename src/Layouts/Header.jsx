import React, { useState } from "react";
import { CiGlobe } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";
import { TfiMenu } from "react-icons/tfi";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      className="w-full flex items-baseline lg:justify-normal justify-between lg:gap-10 px-10 py-10 border-b-2 relative"
      onClick={() => setIsOpen(!isOpen)}
    >
      <img src="images/miro-logo.png" alt="miro-logo" />
      <button className="lg:hidden">
        {isOpen ? <MdClose size={28} /> : <TfiMenu size={28} />}
      </button>
      <div
        className={`w-full lg:px-0 px-10 lg:bg-white bg-white lg:relative absolute lg:top-0 lg:left-0 left-0 ${
          isOpen ? "top-32" : "-top-[2000px]"
        } text-lg flex lg:flex-row flex-col lg:items-center justify-between lg:gap-0 gap-14 transition-all duration-500 `}
      >
        <ul className="flex lg:flex-row flex-col lg:items-center justify-evenly gap-8">
          <li>Product</li>
          <li>Solutions</li>
          <li>Resources</li>
          <li>Enterprise</li>
          <li>Pricing</li>
        </ul>
        <ul className="flex lg:flex-row flex-col lg:items-center justify-evenly gap-8">
          <li className="flex items-center gap-2">
            <CiGlobe size={28} strokeWidth="1" />
            <span>En</span>
          </li>
          <li>Contact Sales</li>
          <li>Login</li>
          <li>
            <button className="bg-[#4262FF] text-white px-5 py-3 rounded-full flex items-center gap-2">
              Sign up free <FaLongArrowAltRight size={14} strokeWidth="0" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
