import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ArticlesList from "./components/ArticleList.jsx";
import TopicList from "./components/TopicList";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage.jsx";
import SingleArticle from "./components/SingleArticle";
import ArticlesByTopic from "./components/ArticlesByTopic";
import UserLogin from "./components/UserLogin";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/topics/" element={<TopicList />} />
          <Route path="/articles/" element={<ArticlesList />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route path="/topics/:slug" element={<ArticlesByTopic />} />
          <Route path="/users/" element={<UserLogin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
