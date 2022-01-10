import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="Home">
      <Link to="/articles">
        <p>Articles</p>
      </Link>
    </div>
  );
};

export default Nav;
