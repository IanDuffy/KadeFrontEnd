import CustomImage from "@/components/CustomImage";
import { getImageUrl } from "@/utilits/imageFunction";
import Link from "next/link";
const ArticleLayout = ({
  data,
}: {
  data: {
    title: string;
    image: { url?: string; filename?: string };
    content: string;
    tags?: { label: string }[];
    slug?: string;
  }[];
}) => {
  // Define the array of card data

  return (
    <div className="main-container grid lg:grid-cols-2 grid-cols-1 gap-8 border-b border-white pt-4 pb-28">
      <div className="w-full">
        <Link href={`/insights/article/${data[0]?.slug}`}>
          <h1 className="lg:text-[72px] md:text-[58px] underlineas md:leading-[65px] sm:text-[32px] sm:leading-[40px] text-[28px] leading-[35px] lg:leading-[80px] font-medium md:mb-4 mb-2 font-suisse">
            {data[0]?.title}
          </h1>
        </Link>
        <p className="md:mb-6 mb-4 md:text-base text-sm ">{data[0]?.content}</p>
        {data[0]?.tags?.map((tag: { label: string }, index: number) => (
          <button
            key={index}
            className="bg-transparent border hover:rounded-[15px] dark:border-white border-primary dark:hover:bg-[#24232D] hover:bg-purple-500  transition-all duration-300 ease-in-out pt-[5px] pb-[7px] px-[26px] rounded-lg text-sm"
          >
            {tag?.label}
          </button>
        ))}
        {/* <button>{data[0]?.buttonText}</button> */}
      </div>

      <div className="grid grid-cols-2 justify-start lg:flex-nowrap flex-wrap w-full gap-4">
        {data?.slice(1).map(
          (
            card: {
              title: string;
              content: string;
              image?: { url?: string; filename?: string };
              altText?: string;
              tags?: { label: string }[];
              slug?: string;
            },
            index: number
          ) => (
            <div
              key={index + 1}
              className="rounded-xl dark:hover:bg-primaryNormal hover:bg-[#eee] p-4 md:max-w-[377px] max-w-full w-full mx-auto flex md:flex-col sm:flex-row flex-col sm:items-center md:gap-0 gap-4"
            >
              <div className="w-full mt-2">
                <Link href={`/insights/article/${card?.slug}`}>
                  <CustomImage
                    src={getImageUrl(card?.image ?? { url: "", filename: "" })}
                    alt={card?.altText || "alt"}
                    className="w-full max-w-[345px] object-cover h-full rounded-lg mb-4"
                    width={276}
                    height={184}
                  />
                </Link>
              </div>
              <div>
                <Link href={`/insights/article/${card?.slug}`}>
                  <h2 className="lg:text-[44px] md:text-[34px] text-[24px] font-normal lg:leading-[48px] md:leading-[40px] leading-[32px] underlineas mb-2">
                    {card?.title}
                  </h2>
                </Link>
                <p className="mb-6 md:text-base text-sm ">{card?.content}</p>

                {card?.tags?.map((tag: { label: string }, tagIndex: number) => (
                  <button
                    key={tagIndex}
                    className="bg-transparent border hover:rounded-[15px] border-white hover:bg-[#24232D]  transition-all duration-300 ease-in-out pt-[5px] pb-[7px] px-[26px] rounded-lg text-sm"
                  >
                    {tag?.label}
                  </button>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ArticleLayout;
