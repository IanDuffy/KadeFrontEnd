import React from "react";

const Hero = ({ data }: { data: { title: string; videoUrl: string } }) => {
  return (
    <div className="main-container">
      <div>
        <p className="lg:py-[120px] py-14 text-8xl md:text-6xl sm:text-4xl leading-[99px] md:leading-[72px] sm:leading-[48px] font-normal max-w-[1119px] w-full dark:text-purple text-primary -tracking-[0.25px]">
          {data?.title}
        </p>
      </div>
      <div className="video-container">
        <video
          src={data?.videoUrl}
          autoPlay
          loop
          muted
          className="w-full h-[591px] md:h-[400px] sm:h-[250px] rounded-xl object-cover"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Hero;
