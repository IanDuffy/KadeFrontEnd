import React from "react";
import SingleInsights from "@/views/SingleInsights";

// Define the Category type
type Category = {
  id: string;
  title: string;
  description: string;
  image: { url: string };
  articles: Array<{ id: string; title: string }>;
};

const Page = async ({ params }: { params: { slug?: string } }) => {
  const { slug } = params;

  let category: Category | null = null;
  let categories: Category[] = [];

  try {
    if (slug) {
      // Fetch single category by slug
      const response = await fetch(
        `${process.env.PAYLOAD_URL}/api/categories?where[slug][equals]=${slug}`,
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
      //console.log("Fetched single category data:", data);
      category = data.docs[0] || null; // Assuming the API returns an array of documents
    } else {
      // Fetch all categories
      const response = await fetch(
        `${process.env.PAYLOAD_URL}/api/categories`,
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
      //console.log("Fetched all categories data:", data);
      categories = data.docs || []; // Assuming the API returns an array of documents
    }
  } catch (error) {
    console.error("Error fetching category data:", error);
  }

  if (slug && !category) {
    return <div>Category not found</div>;
  }

  if (category) {
    // Render SingleInsights component with the category data
    return <SingleInsights category={category} />;
  }

  return (
    <div>
      {categories.map((cat) => (
        <div key={cat.id}>
          <h2>{cat.title}</h2>
          <p>{cat.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
