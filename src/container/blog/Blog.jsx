import React from "react";
import Article from "../../component/article/Article";
import { Blog1, Blog2, Blog3, Blog4, Blog5 } from "./import";
import "./blog.scss";

const blog = () => {
  return (
    <div className="gpt3_blog section_padding" id="blog">
      <div className="blog_heading">
        <h1 className="gradient_text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="blog_container">
        <div className="container_a">
          <Article
            imageUrl={Blog1}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="container_b">
          <Article
            imageUrl={Blog2}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imageUrl={Blog3}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imageUrl={Blog4}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imageUrl={Blog5}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default blog;
