"use client";
import Form from "@/components/Form";
import TheTypeWriter from "@/components/TheTypeWriter";
// import { getImageUrl } from "@/utilits/imageFunction";
// import Image from "next/image";

const Contact = ({
  data,
}: {
  data: {
    title: string;
    description: string;
    authorImage: { url?: string; filename?: string };
    image: { url?: string; filename?: string };
    formHeading: string;
    formSubHeading: string;
    name: string;
    email: string;
    buttonName: string;
  };
}) => {
  return (
    <div className="mx-6 pb-12 rounded-xl lg:mb-8 mb-0">
      <div className=" rounded-3xl bg-[#1F1F28] px-10 pt-10  pb-10 main-container">
        <p className="text-white lg:text-[96px] px-10  md:text-[82px] text-6xl md:leading-[88px] lg:mb-0 mb-7 lg:leading-[100px] max-w-[900px] w-full">
          {data?.title}
        </p>
        <div className="flex justify-between flex-wrap  items-end gap-4 px-6">
          <div>
            <TheTypeWriter
              data={{
                ...data,
                authorImage: data?.authorImage || { url: "", filename: "" },
                description: data?.description || "",
                altText: "",
              }}
            />
          </div>
          <div>
            <Form
              data={{
                image: data?.image || { url: "", filename: "" },
                formHeading: data?.formHeading || "Default Heading",
                formSubHeading: data?.formSubHeading || "Default Subheading",
                name: data?.name || "Default Name",
                email: data?.email || "Default Email",
                buttonName: data?.buttonName || "Submit",
                // altText: data?.altText || "alt",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
