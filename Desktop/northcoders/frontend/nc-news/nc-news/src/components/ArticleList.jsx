import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllArticles } from "../utils/api";
import * as api from "../utils/api";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles()
      .then((articlesFromApi) => {
        setArticles(articlesFromApi);
      })
      .catch((error) => {
        console.log(error, "running line 14<<<>>>");
      });
  }, []);

  return (
    <body className="articles">
      <h3>ArticleList</h3>
      <ul className="articles-list">
        {articles.map((article) => {
          return (
            <li key={article.article_id} className="article-card">
              <Link to={`/articles/${article.article_id}`}>
                <h2>(articles.article_name)</h2>
              </Link>
            </li>
          );
        })}
      </ul>
    </body>
  );
};

export default ArticleList;
