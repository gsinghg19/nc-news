import "./App.css";
import { Router } from "react-router-dom";
import Homepage from "./components/Homepage";
import ArticlesList from "./components/ArticleList.jsx";
import TopicList from "./components/TopicList";
function App() {
  return (
    <div className="App">
      <Router>
        <Homepage path="/" />
        <TopicList path="/topics/*" />
        <ArticlesList path="/articles/" />
        <ArticlesList path="/articles/topic/:topic_slug" />
      </Router>
    </div>
  );
}

export default App;
