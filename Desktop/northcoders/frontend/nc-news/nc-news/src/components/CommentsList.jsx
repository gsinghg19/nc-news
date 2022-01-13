import { useEffect, useState } from "react";
import { fetchArticleCommentsByArticleId } from "../utils/api";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react-router-dom";
import CommentCard from "./CommentCard";

const CommentList = () => {
  const [username, setUsername] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    ></Box>
  );

  useEffect(() => {
    fetchArticleCommentsByArticleId(article_id)
      .then((articleData) => {
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
      {/* {username.map((article_id) => {
        return (
          <li key={article_id.comments}>
            <Button variant="contained">
              <h5>{article_id.comments}</h5>
            </Button>
          </li>
        );
      })} */}

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <CommentCard>
            <Typography
              sx={{ fontSize: 18 }}
              color="text.secondary"
              gutterBottom
            >
              {" "}
              <article className="comments">
                <h4>test</h4>
              </article>
              <br />
            </Typography>
          </CommentCard>
        </CardContent>
      </Card>
    </ul>
  );
};

export default CommentList;
