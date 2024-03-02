import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Button = ({ children, width }) => {
  return (
    <button
      className={` bg-[#4262FF] hover:bg-[#264aff] text-white px-5 py-3 rounded-full flex items-center justify-center gap-2 transition duration-300 ${width}`}
    >
      {children} <FaLongArrowAltRight size={14} strokeWidth="0" />
    </button>
  );
};

export default Button;
