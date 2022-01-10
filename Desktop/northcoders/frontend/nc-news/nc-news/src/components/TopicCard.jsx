import { Link } from "react-router-dom";

const TopicCard = ({ slug, description }) => {
  return (
    <article className="TopicCard">
      <Link className="Link" to={`/articles/topic/${slug}`}>
        <h2>{slug.toUppercase()}</h2>
      </Link>
      <p>{description}</p>
    </article>
  );
};

export default TopicCard;
