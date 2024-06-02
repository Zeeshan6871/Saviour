import React from "react";

function RoadMapItem({ title, description, imageUrl }) {
  const zoomItemStyle = {
    transition: "transform 0.3s ease-in-out",
  };

  const zoomItemHoverStyle = {
    transform: "scale(1.1)",
  };

  return (
    <div
      style={{
        background: `url(${imageUrl})`,
        ...zoomItemStyle,
      }}
      data-aos="fade-left"
      className={`w-[237.06px] h-[349px] bg-cover bg-center bg-no-repeat border-[#ED0137] border-[1px] rounded-[13.17px] max-[701px]:zoomout max-[375px]:zoomin hover:scale-110 transform-gpu overflow-x-hidden`}
    >
      <div className="h-[100%] w-fill bg-gradient-to-t from-[rgb(32,4,23)] to-[transparent] flex flex-col items-center justify-end rounded-[13.17px]">
        <div className="p-[2.3rem] flex flex-col gap-[1.5rem] rounded-[13.17px]">
          <p className="text-[2.195rem] font-inter font-bold">{title}</p>
          <p className="font-inter text-[#AEB1B8] text-[1.756rem] leading-[2.63rem]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default RoadMapItem;
