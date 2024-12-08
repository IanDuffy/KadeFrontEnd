import Image from "next/image";
import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { categoriesWithAttributes } from "@/data/categoriesData";
import { getImageUrl } from "@/utilits/imageFunction";

const Hero = ({ data }: { data: any }) => {
  const authorImageUrl = getImageUrl(data?.author?.image);
  // const heroImageUrl = getImageUrl({ url: data?.image || "" });
  const heroImageUrl = getImageUrl(data?.image);
  return (
    <div className="main-container py-12">
      <div className="w-full">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="text-sm">Insights</div>
            <IoMdArrowDropright className="text-xl dark:text-white text-purpleNormal" />
          </div>
          <div className="text-sm">{data?.category?.title}</div>
        </div>
        <h2 className="lg:text-[94px] md:text-[74px] sm:text-[54px] text-[40px] lg:leading-[99px] md:leading-[79px] sm:leading-[59px] leading-[45px] font-bold -tracking-[0.25px] pt-5 md:pb-6 pb-3">
          {data?.title}
        </h2>
      </div>
      <div className="flex md:items-center items-start md:flex-row flex-col gap-3 justify-between pb-8">
        <div className="flex items-center gap-3">
          <div>
            <Image
              src={authorImageUrl}
              alt={data?.author?.name || "Author"}
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div>
            <p>{data?.author?.title}</p>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap gap-2">
            {data?.tags?.map((tag: any, index: number) => (
              <button
                key={index}
                className="dark:bg-transparent font-normal dark:text-white text-purpleNormal bg-purple border hover:rounded-[15px] dark:border-offWhite border-purple dark:hover:bg-[#24232D] hover:bg-purple-500 transition-all duration-300 ease-in-out py-[6px] px-[26px] rounded-lg text-sm"
              >
                {tag?.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Image
          src={heroImageUrl}
          alt="hero"
          width={1440}
          height={810}
          className="rounded-xl"
        />
      </div>
    </div>
  );
};

export default Hero;
