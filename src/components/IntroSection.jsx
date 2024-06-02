import Image from "next/image";
import React from "react";

function IntroSection() {
  return (
    <div className="flex items-center justify-around p-[0_13%] max-[1285px]:flex-col-reverse max-[1285px]:p-[6rem_10px] bg-[#0B0A0B] w-[100%] overflow-x-hidden">
      <div className="flex flex-col justify-center items-start max-[1285px]:items-center gap-[2rem] basis-1/2 p-[3%_0] max-[1285px]:p-0">
        <p className="font-shojumaru font-bold text-[4.4rem] text-samurai-red">
          Introduction
        </p>
        <p className="text-white font-zcool text-[2.4rem] leading-[3.5rem] after:content-['read more...'] max-[1285px]:text-center">
          We&apos;ve all been in the mud once, and now we&apos;ve decided to
          fight it out. Pay tribute to those pioneers of WEB3 and the warriors
          who dedicated their love to the blockchain. Save the lucky ones alive,
          join us to save the future! Our mission is to empower everyone to
          share wealth and succeed.
        </p>
        <button className="font-zcool text-[2.003rem] bg-gradient-to-r from-smurai-grade-red to-smurai-grade-orange p-[15px_21px] text-white rounded-[21px] selft-start mt-[1rem]">
          <span className="gap-[11px]">
            Documents
            <Image
              className="inline-block ml-[11px] transition-transform transform-gpu hover:scale-110"
              src={"/assets/icons/down.svg"}
              width={16}
              height={16}
              alt="down arrow"
            />
          </span>
        </button>
      </div>
      <div className="flex items-center justify-center basis-0.8/2 overflow-hidden ">
        <Image
          className="object-cover animate-zoom"
          src={"/assets/images/danger-samurai.png"}
          width={600}
          height={723}
          alt="samurai logo"
        />
      </div>
    </div>
  );
}

export default IntroSection;
