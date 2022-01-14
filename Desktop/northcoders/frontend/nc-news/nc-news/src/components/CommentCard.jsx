import DeleteComment from "./DeleteComment";
import AddComment from "./AddComment";
import { ButtonGroup } from "@mui/material";

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
        <ButtonGroup>
          <AddComment
            comment_id={comment_id}
            getsComments={getComments}
            body={body}
            author={author}
            username={username}
            created_at={created_at}
          />
          <DeleteComment
            comment_id={comment_id}
            getsComments={getComments}
            body={body}
            author={author}
            username={username}
            created_at={created_at}
          />
        </ButtonGroup>
      </div>
    </div>
  );
};

export default CommentCard;
