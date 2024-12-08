import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
const Hero = ({ data }: { data: any }) => {
  return (
    <div className="main-container py-12">
      <div className="max-w-[791px] w-full">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="text-sm "> Insights</div>
            <IoMdArrowDropright className="text-xl dark:text-white text-purpleNormal" />
          </div>
          <div className="text-sm capitalize ">{data?.title}</div>
        </div>
        <h2 className="lg:text-[94px] capitalize md:text-[74px] text-[54px] lg:leading-[99px] md:leading-[79px] leading-[59px] font-bold -tracking-[0.25px] pt-5 md:pb-6 pb-3">
          {data?.title}
        </h2>
        <p className="lg:text-[22px] md:text-[18px] text-[14px] lg:leading-[33px] md:leading-[27px] leading-[21px]">
          {data?.description}
        </p>
      </div>
    </div>
  );
};

export default Hero;
