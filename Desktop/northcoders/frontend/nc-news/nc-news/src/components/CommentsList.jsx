import { useEffect, useState } from "react";
import { fetchArticleCommentsByArticleId } from "../utils/api";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react-router-dom";
import CommentCard from "./CommentCard";

const CommentList = () => {
  const { article_id } = useParams();
  const [username, setUsername] = useState({ article_id });
  const [isLoading, setIsLoading] = useState(true);

  //console.log(article_id);
  console.log(username);

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    ></Box>
  );

  useEffect(() => {
    fetchArticleCommentsByArticleId(article_id)
      .then((articleData) => {
        console.log(articleData);
        setUsername(articleData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [article_id]);

  return isLoading ? (
    <h1>Loading please wait.....</h1>
  ) : (
    <ul>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <CommentCard>
            <Typography
              sx={{ fontSize: 18 }}
              color="text.secondary"
              gutterBottom
            >
              {" "}
              <article className="comments"></article>
              <br />
            </Typography>
          </CommentCard>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
            {" "}
            <article className="comments">
              <h4>added comments go here as well as original fetch comments</h4>
            </article>
            <br />
          </Typography>
        </CardContent>
      </Card>
    </ul>
  );
};

export default CommentList;
