import React, { useState } from "react";
import Menu from "../Layouts/Menu";
import { FaLongArrowAltRight } from "react-icons/fa";

const useCases = [
  {
    id: 1,
    name: "Brainstorming",
    image: "images/Brainstorm.png",
    description:
      "Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.",
  },
  {
    id: 2,
    name: "Diagramming",
    image: "images/diagramming.png",
    description:
      "Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.",
  },
  {
    id: 3,
    name: "Meetings & Workshops",
    image: "images/meetings.webp",
    description:
      "Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.",
  },
  {
    id: 4,
    name: "Scrum Events",
    image: "images/scrum.webp",
    description:
      "Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.",
  },
  {
    id: 5,
    name: "Mapping",
    image: "images/mapping.webp",
    description:
      "Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.",
  },
  {
    id: 6,
    name: "Research & Design",
    image: "images/r&d.webp",
    description:
      "Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.",
  },
  {
    id: 7,
    name: "Strategic Planning",
    image: "images/planning.webp",
    description:
      "Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.",
  },
];

const UseCaseSection = () => {
  const names = useCases.map((useCase) => useCase.name);
  const [useCase, setUseCase] = useState(useCases[0]);
  const handleSetUseCase = (useCaseName) => {
    setUseCase(useCases.filter((useCase) => useCase.name === useCaseName)[0]);
  };
  return (
    <div className="lg:w-[85%] w-[95%] lg:h-[780px] mx-auto py-20 flex flex-col justify-center items-start lg:gap-0 gap-5">
      <h1 className="2xl:text-5xl text-4xl font-bold lg:w-[60%] w-[95%] leading-[56px] mb-10">
        Built for the way you work
      </h1>
      <div className="flex items-center flex-wrap gap-4 font-semibold">
        <Menu
          menuItems={names}
          onSetView={handleSetUseCase}
          itemName={useCase.name}
        />
      </div>
      {useCase && (
        <div className="w-full  mx-auto py-10 flex lg:flex-row flex-col justify-between items-start lg:gap-0 gap-10">
          <div className="lg:w-1/2 w-[95%] lg:mx-0 mx-auto">
            <h1 className="text-xl font-semibold lg:w-[60%] w-[95%] leading-[56px] mb-3">
              {useCase.name}
            </h1>
            <p className="lg:w-[60%] w-[95%] mb-10 leading-6">
              {useCase.description}
            </p>
            <p className="text-[#4262ff] flex items-center gap-3 cursor-pointer">
              Learn more <FaLongArrowAltRight size={14} strokeWidth="0" />
            </p>
          </div>
          <div className="lg:w-1/2 w-[95%] lg:mx-0 mx-auto ">
            <img
              src={useCase.image}
              alt={useCase.name}
              className="w-[90%] mx-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UseCaseSection;
