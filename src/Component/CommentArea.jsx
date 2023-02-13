import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

class CommentArea extends Component {
  state = {
    isLoading: true,
    isError: false,
    comments: [],
  };

  componentDidUpdate = async (prevProps) => {
    if (prevProps.this.props.myAsin !== this.props.myAsin) {
      console.log("Props CAMBIATE");

      try {
        let response = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${this.props.myAsin}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U0ZmEwY2EyNDc4ZDAwMTNhMDU4MDQiLCJpYXQiOjE2NzU5NTA2MDUsImV4cCI6MTY3NzE2MDIwNX0.WBc70ihwt-ObJLpE_akpC_wwB-PL8K-1Wef9yR5aqYY",
            },
          }
        );
        console.log(this.props.myAsin);
        if (response.ok) {
          let comments = await response.json();
          this.setState({
            comments: comments,
            isLoading: false,
            isError: false,
          });
        } else {
          console.log("error");
          this.setState({ isLoading: false, isError: true });
        }
      } catch (error) {
        console.log(error);
        this.setState({ isLoading: false, isError: true });
      }
    } else {
      console.log("Props IDENTICHE");
    }
  };

  render() {
    return (
      <div
        className="text-center "
        style={{
          marginTop: "10em",
        }}
      >
        {this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}
        <AddComment asin={this.props.asin} />
        <CommentList commentsToShow={this.state.comments} />
      </div>
    );
  }
}

export default CommentArea;
