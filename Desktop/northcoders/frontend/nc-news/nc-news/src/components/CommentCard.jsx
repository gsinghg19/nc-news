import DeleteComment from "./DeleteComment";

const CommentCard = (
  author,
  body,
  comment_id,
  votes,
  getComments,
  username,
  created_at
) => {
  return (
    <div className="CommentCard">
      <div className="CommentInfo">
        <strong>{author}</strong> {body}
        <DeleteComment
          comment_id={comment_id}
          getsComments={getComments}
          author={author}
          username={username}
        />
      </div>
    </div>
  );
};

export default CommentCard;
