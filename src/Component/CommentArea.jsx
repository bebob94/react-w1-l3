import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    selected: false,

    comment: [],
  };
  response = async () => {
    const res = await fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${this.props.id}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U0ZmEwY2EyNDc4ZDAwMTNhMDU4MDQiLCJpYXQiOjE2NzU5NTA2MDUsImV4cCI6MTY3NzE2MDIwNX0.WBc70ihwt-ObJLpE_akpC_wwB-PL8K-1Wef9yR5aqYY",
        },
      }
    );
    console.log(res);
    const data = await res.json();
    console.log(data);
    this.setState({
      comment: this.data,
    });
  };

  componentDidMount = () => {
    console.log("SONO COMPONENT DID MOUNT!");
    this.response();
  };

  render() {
    return (
      <ListGroup>
        <ListGroup.Item>fffffff</ListGroup.Item>
      </ListGroup>
    );
  }
}

export default CommentArea;
