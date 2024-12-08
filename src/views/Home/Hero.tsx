import { getImageUrl } from "@/utilits/imageFunction";
import CustomImage from "../../components/CustomImage";

export default function Hero({
  data,
}: {
  data: { heroImage: { url?: string; filename?: string }; altText?: string };
}) {
  return (
    <div className="pt-16">
      <div className="relative main-container text-white min-h-screen">
        <div className="absolute inset-0 w-full xl:px-4 px-6">
          <CustomImage
            src={getImageUrl(data?.heroImage) || ""}
            alt={data?.altText || "alt"}
            className="w-full h-full object-cover rounded-xl aspect-video"
            width={1440}
            height={1080}
          />
          <div className="text-white">{data?.altText}</div>
          <div className="absolute inset-0 bg-black opacity-10 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
}
