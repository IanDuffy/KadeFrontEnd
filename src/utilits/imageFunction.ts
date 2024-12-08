export const getImageUrl = (image: {
  url?: string;
  filename?: string;
}): string => {
  if (!image) return "";

  // Handle case where image is already a URL string
  if (typeof image === "string") return image;

  // Handle case where image is an object with url property (from Payload CMS)
  if (image?.url) return `${process.env.PAYLOAD_URL}${image.url}`;

  // Handle case where image has filename
  if (image?.filename)
    return `${process.env.PAYLOAD_URL}/media/${image.filename}`;

  return "";
};
