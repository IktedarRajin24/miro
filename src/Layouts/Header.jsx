import React, { useState } from "react";
import { CiGlobe } from "react-icons/ci";
import { TfiMenu } from "react-icons/tfi";
import { MdClose } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import Button from "./Button";

const ListItem = ({ children, isExpandable }) => {
  return (
    <li className="px-2 py-1 hover:bg-slate-200 hover:underline cursor-pointer transition-all duration-300  rounded-lg flex items-center gap-1">
      {children}
      {isExpandable ? (
        <button>
          <IoIosArrowDown />
        </button>
      ) : null}
    </li>
  );
};

const Header = ({ isOpen, onSetIsOpen }) => {
  return (
    <nav
      className={`w-full flex items-baseline lg:justify-normal lg:gap-10 gap-3 px-10 py-5 border-b-2 relative `}
      onClick={() => onSetIsOpen(!isOpen)}
    >
      <button className="lg:hidden">
        <TfiMenu size={28} />
      </button>
      <img src="images/miro-logo.png" alt="miro-logo" />
      <div
        className={`lg:w-full lg:h-auto h-screen w-[90%]  lg:px-0 px-10 lg:py-0 py-5 lg:bg-white bg-slate-200 lg:relative absolute lg:top-0 lg:left-0 top-0 ${
          isOpen ? "left-0" : "-left-[2000px]"
        } text-lg flex lg:flex-row flex-col lg:items-center lg:justify-between lg:gap-0 gap-14 transition-all duration-500`}
      >
        <div className="lg:hidden flex justify-between border-b-2 border-slate-300 pb-3">
          <p>Menu</p>
          <button onClick={() => onSetIsOpen(!isOpen)}>
            <MdClose size={28} />
          </button>
        </div>
        <ul className="flex lg:flex-row flex-col lg:items-center justify-evenly gap-2 ">
          <ListItem children="Product" isExpandable={true} />
          <ListItem children="Solutions" isExpandable={true} />
          <ListItem children="Resources" isExpandable={true} />
          <ListItem children="Enterprise" />
          <ListItem children="Pricing" />
        </ul>
        <ul className="flex lg:flex-row flex-col lg:items-center justify-evenly gap-2">
          <li className="flex items-center gap-2 px-2 py-1 hover:bg-slate-200 hover:underline cursor-pointer transition-all duration-300  rounded-lg">
            <CiGlobe size={28} strokeWidth="1" />
            <span>En</span>
          </li>
          <ListItem children="Contact Sales" />
          <ListItem children="Login" />
          <Button children="Sign up free" />
        </ul>
      </div>
    </nav>
  );
};

export default Header;
