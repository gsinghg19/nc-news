import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllArticles } from "../utils/api";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, []);

  return (
    <div>
      <h3>ArticleList</h3>
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <Link to={`/articles/${article.article_id}`}>
                <h2>(articles.article_name)</h2>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ArticleList;
