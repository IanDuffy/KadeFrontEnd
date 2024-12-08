import React from "react";
import Hero from "./Hero";
import Layout from "@/components/Layout";

const SingleArticleDetail = ({ data }: { data: any }) => {
  return (
    <Layout>
      <Hero data={data} />
    </Layout>
  );
};

export default SingleArticleDetail;
