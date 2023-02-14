import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const CommentArea = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        let response = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${props.myAsin}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U0ZmEwY2EyNDc4ZDAwMTNhMDU4MDQiLCJpYXQiOjE2NzU5NTA2MDUsImV4cCI6MTY3NzE2MDIwNX0.WBc70ihwt-ObJLpE_akpC_wwB-PL8K-1Wef9yR5aqYY",
            },
          }
        );
        if (response.ok) {
          let comments = await response.json();
          setComments(comments);
          setIsLoading(false);
          setIsError(false);
        } else {
          setIsLoading(false);
          setIsError(true);
        }
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    };

    if (props.myAsin) {
      fetchComments();
    }
  }, [props.myAsin]);

  return (
    <div
      className="text-center "
      style={{
        marginTop: "10em",
      }}
    >
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={props.asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};

export default CommentArea;
