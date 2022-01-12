import { useState, useEffect } from "react";
import { getSingleArticle } from "../utils/api";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react-router-dom";

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  console.log(article);
  const { article_id } = useParams();
  console.log(article_id);

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    ></Box>
  );

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
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          <article className="SingleArticle">
            <h4>Written by {article.author}</h4>
            <h2>{article.title}</h2>
            <p>{article.body}</p>
          </article>
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large">Expand</Button>
      </CardActions>
    </Card>
  );
};
export default SingleArticle;
