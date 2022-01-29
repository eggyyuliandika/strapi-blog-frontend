import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Image from "../../components/image";
// import Seo from "../../components/seo";

import { getStrapiMedia } from "../../lib/media";

const Article = (props) => {
  let { article } = props
  article = article.attributes

  // console.log(article)
 
  const imageUrl = getStrapiMedia(article.image.data.attributes);
   
  // const seo = {
  //   metaTitle: article.title,
  //   metaDescription: article.description,
  //   shareImage: article.image,
  //   article: true,
  // };

  return (
    <Layout categories={categories}>
      {/* <Seo seo={seo} /> */}
      <div
        id="banner"
        className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
        data-src={imageUrl}
        data-srcset={imageUrl}
        data-uk-img
      >
        <h1>{article?.title} </h1>
      </div>
      <div className="uk-section">
        <div className="uk-container uk-container-small">
          <ReactMarkdown children={article?.content} escapeHtml={false} />
          <hr className="uk-divider-small" />
          <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
            <div>
              {/* {article?.author?.data?.attributes?.picture && (
                <Image
                  image={article?.attributes?.picture}
                  style={{
                    position: "static",
                    borderRadius: "50%",
                    height: 30,
                  }}
                />
              )} */}
            </div>
            <div className="uk-width-expand">
              <p className="uk-margin-remove-bottom">
                By {article?.attributes?.author?.data?.attributes?.name}
              </p>
              <p className="uk-text-meta uk-margin-remove-top">
                <Moment format="MMM Do YYYY">{article?.attributes?.published_at}</Moment>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles?populate=*");
  return {
    paths: articles.data.map((article) => ({
      params: {
        slug: article?.attributes?.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articles = await fetchAPI(`/articles?filters[slug][$eq]=${params.slug}&populate=*`);
  const categories = await fetchAPI("/categories");

  return {
    props: { article: articles.data[0], categories },
    revalidate: 1,
  };
}

export default Article;