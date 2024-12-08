import Insights from "@/views/Insights";

async function getPageData() {
  const response = await fetch(
    `${process.env.PAYLOAD_URL}/api/globals/insights-page?locale=undefined&draft=false&depth=3`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // Optional: Ensures fresh data on each load
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch page data");
  }

  return response.json();
}

export default async function HomePage() {
  const data = await getPageData();
  return (
    <main>
      <Insights data={data} />
    </main>
  );
}
