import Layout from "@/components/Layout";
import React from "react";
import Hero from "./Hero";
import SingleCard from "@/components/SingleCard";
// import SingleCard from "@/components/SingleCard";

const SingleInsights = ({ category }: { category: any }) => {
  return (
    <Layout>
      <Hero data={category} />
      <SingleCard data={category?.articles} />
    </Layout>
  );
};

export default SingleInsights;
