import Articles from "../../components/articles";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";

const Category = ({ category, categories }) => {
  return (
    <Layout categories={categories}>
      {/* <Seo seo={seo} /> */}
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{category.name}</h1>
          <Articles articles={category.articles} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const categories = await fetchAPI("/categories?populate=*");
  return {
    paths: categories.data.map((category) => ({
      params: {
        slug: category?.attributes?.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const category = await fetchAPI(
    `/categories?filters[slug][$eq]=${params.slug}&populate=*`
  );
  const categories = await fetchAPI("/categories");

  return {
    props: { category, categories },
    revalidate: 1,
  };
}

export default Category;
