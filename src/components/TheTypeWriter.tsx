import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { useInView } from "react-intersection-observer";
import { getImageUrl } from "@/utilits/imageFunction";

const TheTypeWriter = ({
  data,
}: {
  data: {
    authorImage: { url?: string; filename?: string };
    description: string;
    altText: string;
  };
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const authorImageUrl = getImageUrl(data?.authorImage || {});
  const validAuthorImageUrl =
    authorImageUrl?.startsWith("/") || authorImageUrl?.startsWith("http")
      ? authorImageUrl
      : "/default-author-image.webp"; // Fallback image

  return (
    <div className="flex items-end gap-3 mb-4">
      <div>
        <Image
          src={validAuthorImageUrl}
          alt={data?.altText || "alt"}
          className="w-[48px] h-[48px] rounded-full"
          width={48}
          height={48}
        />
      </div>

      <div
        className=" bg-orange md:text-2xl text-xl text-brown p-6 rounded-xl max-w-[530px] w-full h-full min-h-[159px] md:min-w-[530px]"
        ref={ref}
      >
        {inView && (
          <TypeAnimation
            sequence={[data?.description]}
            wrapper="h1"
            cursor={true}
            speed={50}
            repeat={0}
          />
        )}
      </div>
    </div>
  );
};

export default TheTypeWriter;
