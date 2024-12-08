import Layout from "@/components/Layout";
import React from "react";
import Hero from "./Hero";
import SingleCard from "@/components/SingleCard";

const Insights = ({
  data,
}: {
  data: {
    title: string;
    description: string;
    latestArticles: {
      image?: { url?: string; filename?: string };
      altText?: string;
      title: string;
      content: string;
      tags?: { label: string }[];
      slug: string;
    }[];
  };
}) => {
  return (
    <Layout>
      <Hero data={data} />
      <SingleCard data={data?.latestArticles} />
    </Layout>
  );
};

export default Insights;
