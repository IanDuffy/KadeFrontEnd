import Layout from "@/components/Layout";
import React from "react";
import Hero from "./Hero";
import ArticleLayout from "./ArticleLayout";
import LatestInsights from "./LatestInsights";
import CustomerExperience from "./CustomerExperience";
import QA from "./QA";
import Contact from "./Contact";

const Home = ({
  data,
}: {
  data: {
    heroImage: {
      url: string;
      filename: string;
      altText?: string;
    };
    featuredArticles: {
      title: string;
      content: string;
      image?: { url?: string; filename?: string };
      tags?: { label: string }[];
    }[];
    insightsArticles: {
      image: { url?: string; filename?: string };
      title: string;
      content: string;
      tags?: { label: string }[];
      slug?: string;
    }[];
    insightsTitle: string;
    highlightedArticles: {
      image?: { url?: string; filename?: string };
      title: string;
      content: string;
      tags?: { label: string }[];
      slug?: string;
    }[];
    highlightedTitle: string;

    moreArticles?: {
      title: string;
      content: string;
      image?: { url?: string; filename?: string };
      tags?: { label: string }[];
    }[];
    contact: {
      title: string;
      content: string;
      tags?: { label: string }[];
      description: string;
      authorImage: { url?: string; filename?: string };
      image: { url?: string; filename?: string };
      formHeading: string;
      formSubHeading: string;
      name: string;
      email: string;
      buttonName: string;
    };
  };
}) => {
  return (
    <Layout>
      <Hero
        data={{
          heroImage: {
            url: data?.heroImage?.url || "",
            filename: data?.heroImage?.filename || "",
          },
          altText: data?.heroImage?.altText || "alt",
        }}
      />
      <ArticleLayout
        data={data?.featuredArticles.map((article) => ({
          ...article,
          image: article.image || { url: "", filename: "" },
        }))}
      />
      <LatestInsights
        data={data?.insightsArticles.map((article) => ({
          ...article,
          image: article.image || { url: "", filename: "" },
          slug: article.slug || "",
        }))}
        title={data?.insightsTitle}
      />
      <CustomerExperience
        data={data?.highlightedArticles.map((article) => ({
          ...article,
          image: article.image || { url: "", filename: "" },
          slug: article.slug || "",
        }))}
        title={data?.highlightedTitle}
      />
      <QA
        data={{
          leftColumn:
            data?.moreArticles?.slice(0, 1).map((article) => ({
              ...article,
              image: article.image?.url || "",
            })) || [],
          rightColumn:
            data?.moreArticles?.slice(1).map((article) => ({
              ...article,
              image: article.image?.url || "",
            })) || [],
        }}
      />
      <Contact data={data?.contact} />
    </Layout>
  );
};

export default Home;
