import React, { useState } from "react";
import Menu from "../Layouts/Menu";
import { FaLongArrowAltRight } from "react-icons/fa";
import { RiCheckLine } from "react-icons/ri";

const teams = [
  {
    id: 1,
    name: "UI & Design",
    image: "images/uiuxdesign.png",
    description: [
      "Build low-fi wireframes",
      "Involve stakeholders in the design process",
      "Run engaging design workshops",
    ],
  },
  {
    id: 2,
    name: "Marketing",
    image: "images/marketing.webp",
    description: [
      "Build low-fi wireframes",
      "Involve stakeholders in the design process",
      "Run engaging design workshops",
    ],
  },
  {
    id: 3,
    name: "Product Management",
    image: "images/product_management.webp",
    description: [
      "Build low-fi wireframes",
      "Involve stakeholders in the design process",
      "Run engaging design workshops",
    ],
  },
  {
    id: 4,
    name: "Engineering",
    image: "images/engineering.webp",
    description: [
      "Build low-fi wireframes",
      "Involve stakeholders in the design process",
      "Run engaging design workshops",
    ],
  },
  {
    id: 5,
    name: "Consultants",
    image: "images/consultants.webp",
    description: [
      "Build low-fi wireframes",
      "Involve stakeholders in the design process",
      "Run engaging design workshops",
    ],
  },
  {
    id: 6,
    name: "Agile Coachers",
    image: "images/agile.webp",
    description: [
      "Build low-fi wireframes",
      "Involve stakeholders in the design process",
      "Run engaging design workshops",
    ],
  },
  {
    id: 7,
    name: "Sales",
    image: "images/sales.webp",
    description: [
      "Build low-fi wireframes",
      "Involve stakeholders in the design process",
      "Run engaging design workshops",
    ],
  },
];

const TeamsSection = () => {
  const names = teams.map((team) => team.name);
  const [team, setTeam] = useState(teams[0]);
  const handleSetUseCase = (teamName) => {
    setTeam(teams.filter((team) => team.name === teamName)[0]);
  };
  return (
    <div className="lg:w-[85%] w-[95%] lg:h-[780px] mx-auto py-20 flex flex-col justify-center items-start lg:gap-0 gap-10">
      <h1 className="2xl:text-5xl text-4xl font-bold lg:w-[60%] w-[95%] leading-[56px] mb-10">
        Built for all kinds of teams
      </h1>
      <div className="flex items-center flex-wrap gap-4 font-semibold">
        <Menu
          menuItems={names}
          onSetView={handleSetUseCase}
          itemName={team.name}
        />
      </div>
      {team && (
        <div className="w-full mx-auto py-10 flex lg:flex-row flex-col justify-between items-start lg:gap-0 gap-10">
          <div className="lg:w-1/2 w-[95%] lg:mx-0 mx-auto">
            <h1 className="text-xl font-semibold lg:w-[60%] w-[95%] leading-[56px] mb-3">
              {team.name}
            </h1>
            {team.description.map((desc) => (
              <p className="lg:w-[60%] w-[100%] mb-3 leading-6 flex items-center gap-2">
                <RiCheckLine />
                {desc}
              </p>
            ))}

            <p className="text-[#4262ff] flex items-center gap-3 cursor-pointer mb-10">
              Learn more <FaLongArrowAltRight size={14} strokeWidth="0" />
            </p>
            <p className="text-slate-500 mb-3">Integrate your favorite tools</p>
            <div className="flex items-center gap-3">
              <img
                src="images/diamond.png"
                alt="diamond"
                className="w-[27px]"
              />
              <img src="images/adobe-xd.svg" alt="" className="w-[45px]" />
              <img src="images/figma.png" alt="" className="w-[27px]" />
              <img src="images/notion.png" alt="" className="w-[27px]" />
            </div>
          </div>
          <div className="lg:w-1/2 w-[95%] lg:mx-0 mx-auto ">
            <img src={team.image} alt={team.name} className="w-[90%] mx-auto" />
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamsSection;
