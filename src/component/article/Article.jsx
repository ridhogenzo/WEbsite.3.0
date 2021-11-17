import React from "react";
import "./article.scss";

const Article = ({ imageUrl, date, title }) => {
  return (
    <div className="gpt3_article">
      <div className="article_image">
        <img src={imageUrl} alt="Blog Article" />
      </div>
      <div className="article_content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
