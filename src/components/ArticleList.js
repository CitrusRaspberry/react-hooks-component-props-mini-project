import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  const articles = posts.map(({ id, minutes, preview, title, date }) => {
    return <Article key={id} date={date} title={title} preview={preview} minutes={minutes} />
  })
  return (
    <main>
      {articles}
    </main>
  )
}

export default ArticleList;
