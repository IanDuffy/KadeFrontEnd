import Home from "@/views/Home";

async function getPageData() {
  const response = await fetch(
    `${process.env.PAYLOAD_URL}/api/globals/home-page?locale=undefined&draft=false&depth=4`,
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
      <Home data={data} />
    </main>
  );
}
