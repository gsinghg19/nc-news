import DeleteComment from "./DeleteComment";
import AddComment from "./AddComment";

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
        <AddComment
          comment_id={comment_id}
          getsComments={getComments}
          author={author}
          username={username}
          created_at={created_at}
        />
        <DeleteComment
          comment_id={comment_id}
          getsComments={getComments}
          author={author}
          username={username}
          created_at={created_at}
        />
        <div className="CommentsVotingBox">
          <div className="CommentsVoter"></div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
