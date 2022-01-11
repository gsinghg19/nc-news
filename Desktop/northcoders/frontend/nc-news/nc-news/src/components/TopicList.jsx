import { useEffect, useState } from "react";
import { getAllTopics } from "../utils/api";

import { Link } from "react-router-dom";

const TopicList = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getAllTopics()
      .then((topicsFromApi) => {
        setTopics(topicsFromApi);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(topics);

  return (
    <div>
      <h5>ArticleList</h5>
      <ul>
        <li>
          <Link to={`/articles/${topics}`}>
            <h5>Article title goes here</h5>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TopicList;
