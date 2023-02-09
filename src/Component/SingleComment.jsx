import { Button, ListGroup } from "react-bootstrap";

const SingleComment = ({ comment }) => {
  const deleteComment = async (id) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U0ZmEwY2EyNDc4ZDAwMTNhMDU4MDQiLCJpYXQiOjE2NzU5NTA2MDUsImV4cCI6MTY3NzE2MDIwNX0.WBc70ihwt-ObJLpE_akpC_wwB-PL8K-1Wef9yR5aqYY",
          },
        }
      );
      if (response.ok) {
        alert("Commento eliminato!");
      } else {
        alert("Error - commento non eliminato!");
      }
    } catch (error) {
      alert("Error - commento non eliminato!");
    }
  };

  return (
    <ListGroup.Item>
      {comment.comment}
      <Button
        variant="danger"
        className="ml-2"
        onClick={() => deleteComment(comment._id)}
      >
        Delete
      </Button>
    </ListGroup.Item>
  );
};

export default SingleComment;
