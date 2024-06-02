import Image from "next/image";
import React from "react";
import RoadMapItem from "./RoadMapItem";

function RoadMap() {
  const zoomItemStyle = {
    transition: "transform 0.3s ease-in-out",
  };

  const zoomItemHoverStyle = {
    transform: "scale(1.1)",
  };

  return (
    <div className="bg-black w-full h-fit flex flex-col items-center text-white overflow-x-hidden ">
      <div className="bg-roadmap-bg bg-no-repeat w-full flex flex-col items-center p-6 md:p-10">
        <div className="flex flex-col items-center w-full gap-7">
          <h3 className="text-samurai-red font-shojumaru text-5xl md:text-8xl mb-10 md:mb-10">
            Road Map
          </h3>
          <div className="flex items-center justify-center flex-wrap gap-9 md:gap-12 w-full h-full">
            <RoadMapItem
              imageUrl="/assets/roadmap/card_1.png"
              title={"Phase 1"}
              description={"Technical Readiness and Smart Contract Audit"}
              style={zoomItemStyle}
              hoverStyle={zoomItemHoverStyle}
            />

            <RoadMapItem
              imageUrl="/assets/roadmap/card_2.png"
              title={"Phase 2"}
              description={"Increase Liquidity and Trading Volume"}
              style={zoomItemStyle}
              hoverStyle={zoomItemHoverStyle}
            />

            <RoadMapItem
              imageUrl="/assets/roadmap/card_3.png"
              title={"Phase 3"}
              description={"Community Building and Marketing"}
              style={zoomItemStyle}
              hoverStyle={zoomItemHoverStyle}
            />
            <RoadMapItem
              imageUrl="/assets/roadmap/card_4.png"
              title={"Phase 4"}
              description={"Ecosystem Expansion and Partnerships"}
              style={zoomItemStyle}
              hoverStyle={zoomItemHoverStyle}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoadMap;
