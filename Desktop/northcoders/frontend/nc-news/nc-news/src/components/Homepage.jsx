import React from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NewspaperIcon from "@mui/icons-material/Newspaper";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle } from "../utils/api";

function Homepage() {
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

  return (
    <>
      <Stack spacing={1}>
        <Skeleton variant="text" />
        <Card sx={{ minWidth: 375 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 18 }}
              color="text.secondary"
              gutterBottom
            >
              <article className="SingleArticle">
                <h2>
                  <NewspaperIcon sx={{ fontSize: 100 }}></NewspaperIcon>
                  Some of our writers on our books{" "}
                  <NewspaperIcon sx={{ fontSize: 100 }}></NewspaperIcon>
                </h2>
              </article>
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ minWidth: 375 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 18 }}
              color="text.secondary"
              gutterBottom
            >
              <article className="SingleArticle">
                <h4>Author name and picture/avatar {article.author}</h4>
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

        <Card sx={{ minWidth: 375 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 18 }}
              color="text.secondary"
              gutterBottom
            >
              <article className="SingleArticle">
                <h4>Author name and picture/avatar {article.author}</h4>
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

        <Card sx={{ minWidth: 375 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 18 }}
              color="text.secondary"
              gutterBottom
            >
              <article className="SingleArticle">
                <h4>Author name and picture/avatar {article.author}</h4>
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

        <Card sx={{ minWidth: 375 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 18 }}
              color="text.secondary"
              gutterBottom
            >
              <article className="SingleArticle">
                <h4>Author name and picture/avatar {article.author}</h4>
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
      </Stack>
    </>
  );
}
export default Homepage;
