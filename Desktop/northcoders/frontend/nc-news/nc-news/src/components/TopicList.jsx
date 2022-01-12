import { useEffect, useState } from "react";
import { getAllTopics } from "../utils/api";
import { Button } from "@mui/material";
import { Article } from "@mui/icons-material";

const TopicList = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getAllTopics()
      .then((topicsFromApi) => {
        console.log(topicsFromApi);
        setTopics(topicsFromApi);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(topics);

  return isLoading ? (
    <p>Loading please wait.....</p>
  ) : (
    <ul>
      {" "}
      {topics.map((topic) => {
        return (
          <li key={topic.slug}>
            <Button variant="contained" href={`/topics/${topic.slug}`}>
              <h5>{topic.description}</h5>
            </Button>
          </li>
        );
      })}
    </ul>
  );
};

export default TopicList;
