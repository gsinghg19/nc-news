import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <Link to="/">
        <img
          id="Home"
          src="https://media.istockphoto.com/vectors/latest-news-vector-id1329330958"
          alt="News logo"
          height="130"
          width="130"
        />
      </Link>
    </div>
  );
};

export default Home;
