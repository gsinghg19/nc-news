import { useState, useEffect } from "react";
import { getSingleArticle } from "../utils/api";
import { useParams } from "react-router-dom";

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  console.log(article);
  const { article_id } = useParams();
  console.log(article_id);

  useEffect(() => {
    setIsLoading(true);
    getSingleArticle(article_id).then((articleData) => {
      setArticle(articleData);
      console.log(articleData);
      setIsLoading(false);
    });
  }, [article_id]);

  return isLoading ? (
    <h1>Loading....</h1>
  ) : (
    <article className="SingleArticle">
      <div>
        <h2>{article.title}</h2>
        <h4>Posted by: {article.author}</h4>
        <p>{article.body}</p>
      </div>
    </article>
  );
};

export default SingleArticle;
