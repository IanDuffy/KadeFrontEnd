import React from "react";
import SingleArticleDetail from "@/views/SingleArticleDetail";

// Define the Article type
type Article = {
  id: string;
  title: string;
  content: string;
  image: { url: string };
};

const Page = async ({ params }: { params: { slug?: string } }) => {
  const { slug } = params;

  let article: Article | null = null;

  try {
    if (slug) {
      // Fetch single article by slug
      const response = await fetch(
        `http://localhost:3000/api/articles?where[slug][equals]=${slug}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      //console.log("Fetched single article data:", data); // Log the fetched data
      article = data.docs[0] || null; // Assuming the API returns an array of documents
    }
  } catch (error) {
    console.error("Error fetching article data:", error);
  }

  if (!article) {
    return <div>Article not found</div>;
  }

  // Render SingleArticleDetail component with the article data
  return (
    <div>
      <SingleArticleDetail data={article} />
    </div>
  );
};

export default Page;
