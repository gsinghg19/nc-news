import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import ArticlesList from "./components/ArticleList.jsx";
import TopicList from "./components/TopicList";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage.jsx";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/" element={<Home />} />
          <Route path="/topics/*" element={<TopicList />} />
          <Route path="/articles/" elements={<ArticlesList />} />
          <Route
            path="/articles/topic/:topic_slug"
            elements={<ArticlesList />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
