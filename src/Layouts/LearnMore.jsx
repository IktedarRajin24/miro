import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const LearnMore = () => {
  return (
    <p className="text-[#4262FF] hover:text-[#264aff] transition-colors duration-300 cursor-pointer flex items-center gap-3">
      <span className="border-b-2 border-[#4262FF]">Learn more</span>
      <FaLongArrowAltRight size={14} strokeWidth="0" />
    </p>
  );
};

export default LearnMore;
