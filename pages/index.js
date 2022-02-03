import React from "react";
import Articles from "../components/articles";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";

const Home = ({ articles, categories, homepage }) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage?.data?.attributes?.seo} />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{homepage?.data?.attributes?.hero?.title}</h1>
          <Articles articles={articles} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles?populate=*"),
    fetchAPI("/categories?populate=*"),
    fetchAPI("/homepage?populate=*"),
  ]);

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  };
}

export default Home;
