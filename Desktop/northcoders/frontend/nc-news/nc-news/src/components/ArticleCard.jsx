import { Link } from "react-router-dom";

const ArticleCard = ({ article_id, title, created_at, author }) => {
  return (
    <article className="ArticleCard">
      <div className="ArticleInfo">
        <h2 id="ArticleAuthor">
          Posted by {author} on {created_at.slice(0, 10)}
        </h2>
        <Link className="ArticleTitle" to={`/articles/${article_id}`}>
          <h2>{title}</h2>
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;
