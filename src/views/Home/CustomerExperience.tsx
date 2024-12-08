import { getImageUrl } from "@/utilits/imageFunction";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CustomerExperience = ({
  data,
  title,
}: {
  data: {
    image: { url?: string; filename?: string };
    title: string;
    content: string;
    slug: string;
  }[];
  title: string;
}) => {
  return (
    <div className="bg-purple md:pb-40 pb-20">
      <div className="main-container">
        <div className="md:pt-6 pt-14 md:pb-8 pb-0">
          <h2 className="lg:text-[96px] md:text-[82px] text-6xl md:leading-[88px] lg:mb-0 mb-7 lg:leading-[100px]  w-full text-puprleNormal">
            {title}
          </h2>
        </div>
        <div className="relative">
          <div>
            <Image
              src={getImageUrl(data[0]?.image)}
              alt="icon"
              className="rounded-xl"
              width={1440}
              height={810}
            />
          </div>
          <div className="md:absolute lg:-bottom-20 md:-bottom-32 bottom-0 left-0 md:mt-0 mt-8 bg-purpledark rounded-xl p-10 max-w-[1008px] w-full">
            <Link href={`/insights/article/${data[0]?.slug}`}>
              <p className="hover:underline text-puprleNormal lg:text-[72px] md:text-[58px] text-[44px] lg:leading-[80px] md:leading-[65px] leading-[50px] font-normal mb-3">
                {data[0]?.title}
              </p>
            </Link>
            <p className="text-base text-puprleNormal max-w-[525px] w-full mb-6">
              {data[0]?.content}
            </p>
            <Link
              href={`/insights/article/${data[0]?.slug}`}
              className="capitalize hover:bg-[#C4B5F7] bg-purple  rounded-full   text-puprleNormal transition-all duration-300 ease-in-out py-3 px-[28px]  text-sm"
            >
              Read Article
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerExperience;
