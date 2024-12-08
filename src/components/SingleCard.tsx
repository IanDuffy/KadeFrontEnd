"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Link from "next/link";
import { getImageUrl } from "@/utilits/imageFunction";

const SingleCard = ({
  data,
}: {
  data: {
    image?: { url?: string; filename?: string };
    altText?: string;
    title: string;
    content: string;
    tags?: { label: string }[];
    slug: string;
  }[];
}) => {
  useEffect(() => {
    const workLinks = document.querySelectorAll(".js-work-link");

    workLinks.forEach((link) => {
      const underline = link.querySelector(".underline");
      const tl = gsap.timeline({ paused: true });

      tl.to(underline, {
        scaleX: 1, // Animate to full width
        transformOrigin: "left", // Ensure the animation starts from the left
        duration: 1,
      });

      tl.add("midway");

      tl.to(underline, {
        scaleX: 0, // Animate back to hidden
        transformOrigin: "right", // Ensure the animation ends at the right
        duration: 1,
      });

      link.addEventListener("mouseenter", () => {
        tl.tweenFromTo(0, "midway");
      });

      link.addEventListener("mouseleave", () => {
        tl.reverse(); // Reverse the animation on mouse leave
      });
    });
  }, []);

  return (
    <div className="main-container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.map(
          (
            article: {
              image?: { url?: string; filename?: string };
              altText?: string;
              title: string;
              content: string;
              tags?: { label: string }[];
              slug: string;
            },
            index: number
          ) => {
            const validImageUrl =
              getImageUrl(article?.image || {})?.startsWith("/") ||
              getImageUrl(article?.image || {})?.startsWith("http")
                ? getImageUrl(article?.image || {})
                : "/default-image.webp"; // Fallback image

            return (
              <div key={index} className="mb-8">
                <Image
                  src={validImageUrl}
                  alt={article?.altText || "alt"}
                  width={276}
                  height={184}
                  className="w-full h-auto mb-4 rounded-xl"
                />
                <h2>
                  <Link
                    href={`/insights/article/${article?.slug}`}
                    className="js-work-link lg:text-[44px] md:text-[34px] text-[24px] lg:leading-[49px] md:leading-[40px] leading-[32px] font-bold mb-2 relative group"
                    rel="noopener noreferrer"
                  >
                    <span className="js-an-word underlineas">
                      {article.title}
                    </span>
                    <span className="underline"></span>
                  </Link>
                </h2>
                <p className="mb-4 md:text-base text-sm ">{article.content}</p>
                <div className="flex flex-wrap gap-2">
                  {article?.tags?.map(
                    (button: { label: string }, index: number) => (
                      <button
                        key={index}
                        className="dark:bg-transparent font-normal dark:text-white text-puprleNormal bg-purple border hover:rounded-[15px] dark:border-white border-purple dark:hover:bg-[#24232D] hover:bg-purple-500 transition-all duration-300 ease-in-out py-[6px] px-[26px] rounded-lg text-sm"
                      >
                        {button.label}
                      </button>
                    )
                  )}
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default SingleCard;
