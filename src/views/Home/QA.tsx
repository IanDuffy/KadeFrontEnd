import { getImageUrl } from "@/utilits/imageFunction";
import Image from "next/image";
import { Article } from "../../types/Article";

const QA = ({
  data,
}: {
  data: {
    leftColumn?: Article[];
    rightColumn?: Article[];
  };
}) => {
  // Split the card data into two parts
  const leftColumnData = data?.leftColumn;
  const rightColumnData = data?.rightColumn;

  return (
    <div className="">
      <div className="main-container flex md:flex-row flex-col lg:gap-8 gap-2 justify-between pt-28 md:pb-28 pb-12">
        {/* Left Column */}
        <div className="">
          <div className="max-w-[720px] w-full sticky top-24">
            {leftColumnData?.map(
              (
                card: {
                  image: string;
                  altText?: string;
                  title: string;
                  content: string;
                  tags?: { label: string }[];
                },
                index: number
              ) => (
                <div key={index}>
                  <div className="hover:bg-[#eee] transition-all dark:hover:bg-primaryNormal p-4 rounded-xl">
                    <div className="max-w-[720px] w-full ">
                      <Image
                        src={getImageUrl({ url: card?.image })}
                        alt={card?.altText || ""}
                        className="w-full object-cover  h-full rounded-lg mb-4 max-h-[341px]"
                        width={720}
                        height={341}
                      />
                    </div>

                    <h1 className="text-[72px] leading-[80px] font-medium mb-4 underlineas">
                      {card?.title}
                    </h1>
                    <p className="mb-6 text-base dark:text-white">
                      {card?.content}
                    </p>

                    {card?.tags?.map(
                      (tag: { label: string }, tagIndex: number) => (
                        <button
                          key={tagIndex}
                          className="bg-transparent border hover:rounded-[15px] hover:text-white border-primary dark:border-white hover:bg-[#24232D] dark:text-white transition-all duration-300 ease-in-out pt-[5px] pb-[7px] px-[26px] rounded-lg text-sm"
                        >
                          {tag?.label}
                        </button>
                      )
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="max-w-[532px] w-full h-full scrollbar-hide">
          {rightColumnData?.map(
            (
              card: {
                image: string;
                altText?: string;
                title: string;
                content: string;
                tags?: { label: string }[];
              },
              index: number
            ) => (
              <div
                key={index}
                className="hover:bg-[#eee] transition-all rounded-xl dark:hover:bg-primaryNormal  p-4 mb-4 group"
              >
                <div className="max-w-[532px] w-full min-h-[355px] max-h-[355px] rounded-lg h-full overflow-hidden mb-4">
                  <Image
                    src={getImageUrl({ url: card?.image })}
                    alt={card?.altText || ""}
                    className="w-full object-cover h-full rounded-lg "
                    width={532}
                    height={355}
                  />
                </div>

                <h2 className="lg:text-[44px] md:text-[34px] text-[24px]  lg:leading-[48px] md:leading-[40px] sm:leading-[32px] leading-[24px] font-normal mb-2">
                  {card?.title}
                </h2>
                <p className="md:mb-6 mb-4 md:text-base text-sm dark:group-hover:text-white">
                  {card?.content}
                </p>

                {card?.tags?.map((tag: { label: string }, tagIndex: number) => (
                  <button
                    key={tagIndex}
                    className="bg-transparent border hover:rounded-[15px] dark:border-white border-primary hover:text-white hover:bg-[#24232D] transition-all duration-300 ease-in-out pt-[5px] pb-[7px] px-[26px] rounded-lg text-sm"
                  >
                    {tag?.label}
                  </button>
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
export default QA;
