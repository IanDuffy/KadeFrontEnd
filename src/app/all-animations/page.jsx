import CustomImage from "@/components/CustomImage";
import Layout from "@/components/Layout";
import React from "react";

const page = () => {
  return (
    <Layout>
      <div className="max-w-[1440px] min-h-[80dvh] mx-auto py-10 flex flex-col gap-8">
        <div className="p-4 rounded-xl hover:bg-primaryNormal transition-all">
          <p className="underlineas text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            rerum.
          </p>
        </div>
        <CustomImage 
            src="/images/hero.webp"
            alt="animation"
            className="w-full h-full object-cover rounded-xl"
            width={1440}
        />
      </div>
    </Layout>
  );
};

export default page;
