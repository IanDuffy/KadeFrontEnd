import Layout from "@/components/Layout";
import React from "react";
import Hero from "./Hero";
import Cards from "./Cards";
import AboutContact from "./AboutContact";

const About = ({
  data,
}: {
  data: {
    cards: { videoUrl: string; title: string; description: string }[];
    contact: {
      videoUrl: string;
      title: string;
      authorImage: { url?: string; filename?: string };
      description: string;
      altText: string;
      buttonHref: string;
      buttonName: string;
    };
  };
}) => {
  return (
    <div>
      <Layout>
        <Hero
          data={{ title: data.contact.title, videoUrl: data.contact.videoUrl }}
        />
        <Cards data={data?.cards} />
        <AboutContact data={data.contact} />
      </Layout>
    </div>
  );
};

export default About;
