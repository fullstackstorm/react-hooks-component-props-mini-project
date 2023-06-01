import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  const articleElements = posts.map((post) => {
    return <Article key={post.id} {...post} />;
  });

  return <main>{articleElements}</main>;
}

export default ArticleList;
