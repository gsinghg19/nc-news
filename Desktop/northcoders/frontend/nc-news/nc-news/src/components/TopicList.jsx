import { useEffect, useState } from "react";
import { getAllTopics } from "../utils/api";
import { Button } from "@mui/material";

const TopicList = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getAllTopics()
      .then((topicsFromApi) => {
        console.log(topicsFromApi);
        setTopics(topicsFromApi);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(topics);

  return (
    <div>
      <h5>All Topics Available</h5>
      <ul>
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
    </div>
  );
};

export default TopicList;
