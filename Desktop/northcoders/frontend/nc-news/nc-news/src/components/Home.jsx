import { Link } from "react-router-dom";
import { getArticles } from "../utils/api";

const Home = () => {
  return (
    <div className="Home">
      <Link to="/articles"></Link>
    </div>
  );
};

export default Home;
