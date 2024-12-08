import React from "react";

const Card = ({
  data,
}: {
  data: { videoUrl: string; title: string; description: string }[];
}) => {
  return (
    <div className="main-container py-16">
      {data?.map(
        (
          item: { videoUrl: string; title: string; description: string },
          index: number
        ) => (
          <div
            key={index}
            className="rounded-lg shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-2 mb-12 py-4"
          >
            <video
              src={item.videoUrl}
              autoPlay
              loop
              muted
              className="w-full h-[291px] rounded-xl object-cover"
            >
              Your browser does not support the video tag.
            </video>
            <div className="p-6 flex flex-col justify-center">
              <h3 className="text-xl font-suisseMedium mb-2 text-primary dark:text-purple">
                {item.title}
              </h3>
              <p className="text-light dark:text-secondary">
                {item.description}
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Card;
