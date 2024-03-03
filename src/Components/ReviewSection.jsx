import React from "react";
import Button from "../Layouts/Button";
import { FaLongArrowAltRight } from "react-icons/fa";

const customerServices = [
  {
    id: 1,
    image: "images/vmware.png",
    brand: "vmware",
    review:
      "When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.",
    customer: "Roxanne Mustafa",
    customerImage: "images/Roxanne.png",
    customerTitle: "Design Team Lead at VMware",
  },
  {
    id: 2,
    image: "images/Docusign.png",
    brand: "DocuSign",
    review:
      "Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.",
    customer: "Jane Ashley",
    customerImage: "images/Jane.png",
    customerTitle: "Head of design at DocuSign",
  },
  {
    id: 3,
    image: "images/frog.png",
    brand: "frog",
    review:
      "“As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at the core of what we do and will continue to extend into the future.”",
    customer: "Laura Baird",
    customerImage: "images/Laura.png",
    customerTitle: "Associate design director at frog",
  },
];

const ReviewSection = () => {
  return (
    <div className="lg:w-[85%] w-[95%] mx-auto py-28 flex flex-col justify-center items-center lg:gap-0 gap-10 relative">
      <h1 className="md:text-5xl text-4xl font-bold text-center 2xl:w-[100%] md:w-[60%] w-[95%] leading-10 mx-auto mb-10 ">
        Loved by the world's best teams{" "}
      </h1>
      <button className=" bg-[#fff] hover:bg-[#264aff] text-[#4262FF] hover:text-[#fff] px-5 py-3 border-[#4262FF] border-[1px] rounded-full flex items-center justify-center gap-2 transition duration-300 ease-out md:mb-20 mb-16">
        See all customer services{" "}
        <FaLongArrowAltRight size={14} strokeWidth="0" />
      </button>
      <div className="md:w-11/12 w-[90%] mb-20 mx-auto flex md:flex-row flex-col gap-y-20 justify-around items-start gap-3">
        {customerServices.map((customerService) => (
          <div
            key={customerService.id}
            className="flex flex-col justify-between 2xl:w-1/2 md:w-9/12 w-11/12 md:h-[350px] h-[320px]"
          >
            <div className="flex flex-col gap-5">
              <img
                src={customerService.image}
                alt={customerService.brand}
                className="md:w-1/2 w-9/12"
              />
              <p className="text-slate-400 2xl:w-[55%] md:w-[90%] w-[95%]">
                "{customerService.review}"
              </p>
            </div>
            <div className="w-full flex items-center gap-3">
              <img
                src={customerService.customerImage}
                alt={customerService.customer}
              />
              <div>
                <p className="text-sm text-slate-400">
                  {customerService.customer}
                </p>
                <p className="text-sm text-slate-400">
                  {customerService.customerTitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
