import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import { getStrapiMedia } from "../../lib/media";

const Article = (props) => {
  let { article } = props;

  const imageUrl = getStrapiMedia(article?.attributes?.image?.data?.attributes);

  return (
<<<<<<< HEAD
    <Layout categories={category.attributes?.name}>
      {/* <Seo seo={seo} /> */}
=======
    <Layout>
>>>>>>> 1c85a1f913156b88276de12e7a5d9483f90ef426
      <div
        id="banner"
        className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
        data-src={imageUrl}
        data-srcset={imageUrl}
        data-uk-img
      >
        <h1>{article?.attributes?.title} </h1>
      </div>
      <div className="uk-section">
        <div className="uk-container uk-container-small">
          <ReactMarkdown
            children={article?.attributes?.content}
            escapeHtml={false}
          />
          <hr className="uk-divider-small" />
          <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
            <div className="uk-width-expand">
              <p className="uk-margin-remove-bottom">
                By {article?.attributes?.author?.data?.attributes?.name}
              </p>
              <p className="uk-text-meta uk-margin-remove-top">
                <Moment format="MMM Do YYYY">
                  {article?.attributes?.published_at}
                </Moment>
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
  const articles = await fetchAPI(
    `/articles?filters[slug][$eq]=${params.slug}&populate=*`
  );

  return {
    props: { article: articles.data[0] },
    revalidate: 1,
  };
}

export default Article;
