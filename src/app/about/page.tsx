import About from "@/views/About";
import React from "react";

async function getAboutPageData() {
  const response = await fetch(
    `${process.env.PAYLOAD_URL}/api/globals/about-page?locale=undefined&draft=false&depth=1`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // Optional: Ensures fresh data on each load
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch about page data");
  }

  return response.json();
}

const page = async () => {
  const data = await getAboutPageData();
  return <About data={data} />;
};

export default page;
