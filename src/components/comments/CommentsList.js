import CommentItem from './CommentItem';
import classes from './CommentsList.module.css';
var randomString = require("randomstring")
const CommentsList = (props) => {
  return (
    <ul className={classes.comments}>
      {props.comments.map((comment) => (
        <CommentItem key={randomString.generate(5)} text={comment} />
      ))}
    </ul>
  );
};

export default CommentsList;
