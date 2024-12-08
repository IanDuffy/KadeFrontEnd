"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

const CustomImage = ({
  src ,
  alt ,
  width ,
  height,
  className ,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <Image
      ref={ref}
      src={src}
      alt={alt}
      objectFit="cover"
      width={width}
      height={height}
      className={className}
      loading={inView ? "eager" : "lazy"}
      unoptimized
    />
  );
};

export default CustomImage;
