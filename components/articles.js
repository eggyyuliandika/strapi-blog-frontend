import React from "react";
import Card from "./card";

const Articles = (props) => {
  
  const { articles } = props
  const leftArticlesCount = Math.ceil(articles?.data?.length / 5);
  const leftArticles = articles?.data?.slice(0, leftArticlesCount);
  const rightArticles = articles?.data?.slice(leftArticlesCount, articles.length);

  return (
    <div>
      {/* <div className="uk-child-width-1-2@s" data-uk-grid="true">
        <div>
          {leftArticles.map((article, i) => {
            return (
              <Card article={article} key={`article__left__${article?.attributes?.slug}`} />
              
              );
          })}
        </div>
        <div>
          <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
            {rightArticles.map((article, i) => {
              return (
                <Card
                  article={article} key={`article__right__${article?.attibutes?.slug}`}/>
              );
            })}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Articles;
