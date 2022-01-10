import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="Home">
      <Link to="/">
        <button onClick="/">Homepage</button>
      </Link>
      <Link to="/articles">
        <button onClick="/articles/">Articles</button>
      </Link>
      <Link to="/TopicList">
        <button onClick="/topics/">Article Topics</button>
      </Link>
    </nav>
  );
};

export default Nav;
