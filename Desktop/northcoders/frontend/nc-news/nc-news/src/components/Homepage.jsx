import React from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useState } from "react";
import { useParams } from "react-router-dom";

function Homepage() {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  console.log(article);
  const { article_id } = useParams();
  console.log(article_id);
  return (
    <Stack spacing={1}>
      <Skeleton variant="text" />
      <Card sx={{ minWidth: 375 }}>
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

      <Card sx={{ minWidth: 375 }}>
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

      <Card sx={{ minWidth: 375 }}>
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

      <Card sx={{ minWidth: 375 }}>
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

      <Card sx={{ minWidth: 375 }}>
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
    </Stack>
  );
}
export default Homepage;
