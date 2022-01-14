import DeleteComment from "./DeleteComment";
import Counter from "./Counter";

const CommentCard = ({
  author,
  body,
  comment_id,
  votes,
  getComments,
  username,
  created_at,
}) => {
  console.log({ comment_id, body });
  return (
    <div className="CommentCard">
      <div className="CommentInfo">
        <strong>{comment_id}</strong> {body}
        <DeleteComment
          comment_id={comment_id}
          getsComments={getComments}
          author={author}
          username={username}
          created_at={created_at}
        />
        <div className="CommentsVotingBox">
          <div className="CommentsVoter">
            <Counter votes={votes} id={comment_id} type={"comments"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
