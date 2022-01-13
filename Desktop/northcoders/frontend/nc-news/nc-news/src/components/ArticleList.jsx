import { useEffect, useState } from "react";
import { getAllArticles } from "../utils/api";
import { Button } from "@mui/material";
import sorter from "./sorter";
import ErrorMessage from "./ErrorMessage";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading, error] = useState(true);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    setIsLoading(true);
    getAllArticles()
      .then((articlesFromApi) => {
        console.log(articlesFromApi);
        setArticles(articlesFromApi);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return isLoading ? (
    <h1>Loading please wait.....</h1>
  ) : (
    <ul>
      {" "}
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
  );
};

export default ArticleList;
