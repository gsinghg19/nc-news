import { useEffect, useState } from "react";
import { getAllArticles } from "../utils/api";
import { Button } from "@mui/material";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles()
      .then((articlesFromApi) => {
        console.log(articlesFromApi);
        setArticles(articlesFromApi);
      })
      .catch((error) => {
        console.log(error, "running line 14<<<>>>");
      });
  }, []);

  return (
    <div>
      <h5>ArticleList</h5>
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <Button
                variant="contained"
                href={`/articles/${article.article_id}`}
              >
                <h5>{article.title}</h5>
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ArticleList;
