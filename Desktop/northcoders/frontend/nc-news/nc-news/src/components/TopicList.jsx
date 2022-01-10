import { useEffect, useState } from "react";
import { getAllTopics } from "../utils/api";
import TopicCard from "./TopicCard";

const TopicList = () => {
  const [topic, setTopic] = useState([]);

  useEffect(() => {
    getAllTopics().then((topicApi) => {
      setTopic(topicApi);
    });
  }, []);

  return (
    <div className="TopicList">
      {topic.map((topic) => {
        return <TopicCard key={topic.slug} {...topic} />;
      })}
      ;
    </div>
  );
};

export default TopicList;
