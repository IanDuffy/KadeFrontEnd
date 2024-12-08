"use client";
import TheTypeWriter from "@/components/TheTypeWriter";
import Link from "next/link";
// import TheTypeWriter from "@/components/TheTypeWriter";
import React from "react";

const AboutContact = ({
  data,
}: {
  data: {
    videoUrl: string;
    title: string;
    authorImage: { url?: string; filename?: string };
    description: string;
    altText: string;
    buttonHref: string;
    buttonName: string;
  };
}) => {
  return (
    <div className="main-container mb-20 relative rounded-xl">
      <video
        src={data?.videoUrl}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0 rounded-xl"
      >
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-60 z-10 rounded-xl"></div>
      <div className="relative z-20 p-12 text-white rounded-xl">
        <p className="lg:text-8xl md:text-6xl text-5xl leading-[99px] md:leading-[72px] sm:leading-[48px] font-normal max-w-[1119px] w-full -tracking-[0.25px]">
          {data?.title}
        </p>
        <div className="mt-8"></div>
        <TheTypeWriter
          data={{
            ...data,
            authorImage: data?.authorImage || { url: "", filename: "" },
            description: data?.description || "",
            altText: "",
          }}
        />
      </div>
      <div className="mt-8 pb-5">
        <Link
          href={`/${data?.buttonHref}`}
          className="bg-purpledark text-sm text-puprleNormal px-5 py-2 rounded-2xl font-semibold"
        >
          {data?.buttonName}
        </Link>
      </div>
    </div>
  );
};

export default AboutContact;
