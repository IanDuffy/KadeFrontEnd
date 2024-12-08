import { getImageUrl } from "@/utilits/imageFunction";
import Image from "next/image";
import Link from "next/link";

export default function LatestInsights({
  data,
  title,
}: {
  data: {
    image: { url?: string; filename?: string };
    title: string;
    content: string;
    altText?: string;
    tags?: { label: string }[];
    slug: string;
  }[];
  title: string;
}) {
  return (
    <section className="pt-4 md:pb-20  pb-40">
      <div className="main-container ">
        <h2 className="lg:text-[96px] md:text-[72px] text-[48px] font-normal mb-12 capitalize">
          {title}
        </h2>

        {data?.map(
          (
            insight: {
              image: { url?: string; filename?: string };
              title: string;
              content: string;
              altText?: string;
              tags?: { label: string }[];
              slug: string;
            },
            index: number
          ) => (
            <div
              key={index}
              className="flex justify-between md:flex-row flex-col gap-8 items-start transition-all mb-12 hover:bg-[#eee] dark:hover:bg-primaryNormal p-4 rounded-lg group"
            >
              {/* Text Section */}
              <div className="max-w-[420px] w-full">
                <Link href={`/insights/article/${insight?.slug}`}>
                  <h3 className="text-3xl font-semibold mb-4 underlineas dark:group-hover:text-white">
                    {insight.title}
                  </h3>
                </Link>
                <p className="text-base dark:text-[#e4e1ee] text-primary mb-6 dark:group-hover:text-white">
                  {insight?.content}
                </p>
                {/* <button className="bg-transparent border hover:rounded-[15px]  dark:group-hover:text-white dark:group-hover:border-white dark:border-white border-primary hover:bg-[#24232D] hover:text-white transition-all duration-300 ease-in-out pt-[5px] pb-[7px] px-[26px] rounded-lg text-sm">
                {insight?.buttonText}
              </button> */}
                {insight?.tags?.map(
                  (tag: { label: string }, tagIndex: number) => (
                    <button
                      key={tagIndex}
                      className="bg-transparent border hover:rounded-[15px]  dark:group-hover:text-white dark:group-hover:border-white dark:border-white border-primary hover:bg-[#24232D] hover:text-white transition-all duration-300 ease-in-out pt-[5px] pb-[7px] px-[26px] rounded-lg text-sm"
                    >
                      {tag?.label}
                    </button>
                  )
                )}
              </div>

              {/* Image Section */}
              <div className="w-full relative">
                <div className="relative w-full  rounded-lg">
                  <Image
                    src={getImageUrl(insight?.image)}
                    alt={insight?.altText || "alt"}
                    className="rounded-lg shadow-lg filter blur-sm" // Apply blur here
                    layout="responsive"
                    width={1000}
                    height={653}
                  />
                  <div className="absolute top-0 bottom-0 left-0 z-20 p-4  m-auto h-full">
                    <Link href={`/insights/article/${insight?.slug}`}>
                      <Image
                        src={getImageUrl(insight?.image)}
                        alt={insight?.altText || "alt"}
                        className="rounded-lg  " // Apply blur here
                        layout="responsive"
                        width={980} // 20 pixels less than the first image
                        height={633} // 20 pixels less than the first image
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
// const insights = [
//   {
//     title:
//       "Brand Advertising Strategies: A Step-by-Step Guide to Building a Strong Brand",
//     description: `In today’s competitive market, consumers seek brands that resonate with their values. This step-by-step guide explores effective brand advertising strategies to help you build a strong, recognizable brand. Discover how to craft compelling narratives, choose the right channels, and create ads that foster long-term loyalty and brand equity.`,
//     buttonLabel: "Business Growth",
//     imageUrl:
//       "/images/66fd86db65ffb93dce209054_smart goals examples for work-1-1-1.webp",
//     altText: "Brand Advertising",
//   },
//   {
//     title: "Open AI o1: Advancing AI Reasoning Capabilities",
//     description: `OpenAI o1 marks a significant advancement in artificial intelligence, enhancing reasoning abilities beyond previous models. Dive into how this new model excels in complex tasks across science, coding, and mathematics, employing advanced techniques like chain-of-thought reasoning and reinforcement learning to set new benchmarks in AI problem-solving.`,
//     buttonLabel: "Artificial Intelligence",
//     imageUrl: "/images/66fd8ae318b2c405fcda050f_brand advertising-1-1-1.webp",
//     altText: "OpenAI Advancements",
//   },
//   {
//     title: "Top 30 SMART Goals Examples for Work to Boost Your Career Success",
//     description: `Discover the top 30 SMART goals examples for work that can help you achieve professional growth. This guide explains how setting Specific, Measurable, Achievable, Relevant, and Time-bound goals can enhance your leadership skills, improve time management, and lead to career advancement.`,
//     buttonLabel: "Entrepreneurship",
//     imageUrl: "/images/66fd8bed33be7e6abbb11923_open ai o1-1-1-1.webp",
//     altText: "SMART Goals",
//   },
// ];
