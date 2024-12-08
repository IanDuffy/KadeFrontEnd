"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { getImageUrl } from "@/utilits/imageFunction";
// import TheTypeWriter from "./TheTypeWriter";
// import TheTypeWriter from "./TheTypeWriter";

const Form = ({
  // typeWritter = false,
  data,
}: {
  // typeWritter?: boolean;
  data?: {
    image: { url?: string; filename?: string };
    formHeading: string;
    formSubHeading: string;
    name: string;
    email: string;
    altText?: string;
    buttonName: string;
  };
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [focused, setFocused] = useState({ name: false, email: false });

  // Create a ref for the form container
  const formRef = useRef(null);
  const validImageUrl =
    getImageUrl(data?.image || {})?.startsWith("/") ||
    getImageUrl(data?.image || {})?.startsWith("http")
      ? getImageUrl(data?.image || {})
      : "/default-author-image.webp"; // Fallback image
  useGSAP(() => {
    // Animate the form container to slide up from the bottom
    gsap.from(formRef.current, {
      y: 50, // Start 50 pixels below
      opacity: 0, // Start with 0 opacity
      duration: 1, // Duration of 1 second
      ease: "power3.out", // Easing function
    });
  }, []);
  //console.log(data, "form details");
  return (
    <div
      ref={formRef}
      className="max-w-[595px] mx-auto flex flex-col items-center justify-center h-full"
    >
      {/* {typeWritter && (
        <div className="mb-10">
          <TheTypeWriter data={data} />
        </div>
      )} */}

      <div className="w-full flex justify-end">
        <div className="bg-purpledark rounded-xl py-10 max-w-[420px] w-full">
          <div className="mb-12 px-6 flex items-center gap-3">
            <div>
              <Image
                src={validImageUrl}
                alt={data?.altText || "alt"}
                className="w-[48px] h-[48px] rounded-full"
                width={48}
                height={48}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <p className="text-puprleNormal">{data?.formHeading}</p>
              <p className="text-puprleNormal">{data?.formSubHeading}</p>
            </div>
          </div>
          <form>
            <div className="relative mb-6">
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={() => setFocused({ ...focused, name: true })}
                onBlur={() => setFocused({ ...focused, name: false })}
                className="focus:outline-none bg-transparent border-b border-gray-500 w-full text-white text-sm py-2"
              />
              <label
                htmlFor="name"
                className={`absolute left-0 text-sm transition-all px-6 text-puprleNormal duration-300 ease-in-out ${
                  focused.name || name ? "transform -translate-y-6" : ""
                }`}
              >
                {data?.name}
              </label>
            </div>
            <div className="relative mb-6">
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocused({ ...focused, email: true })}
                onBlur={() => setFocused({ ...focused, email: false })}
                className="focus:outline-none bg-transparent border-b border-gray-500 w-full text-puprleNormal text-sm py-2"
              />
              <label
                htmlFor="email"
                className={`absolute left-0 text-puprleNormal text-sm px-6 transition-all duration-300 ease-in-out ${
                  focused.email || email ? "transform -translate-y-6" : ""
                }`}
              >
                {data?.email}
              </label>
            </div>
            <div className="flex justify-end px-6">
              <button
                type="submit"
                className="capitalize hover:bg-[#C4B5F7] bg-purple rounded-full text-puprleNormal transition-all duration-300 ease-in-out py-3 px-[28px] text-sm"
              >
                {data?.buttonName}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
