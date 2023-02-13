import { Component } from "react";
import { Button, Card, Col } from "react-bootstrap";

class SingleBookCard extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Col xs={3}>
        <Card
          onClick={() => {
            this.setState({ selected: !this.state.selected });
            this.props.selectedAsin(this.props.asin);
          }}
          className="m-3"
          key={this.props.asin}
          style={{
            border: this.state.selected ? "3px solid red" : "none",
          }}
        >
          <Card.Img variant="top" src={this.props.img} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.category}</Card.Text>
            <Button variant="primary">{this.props.price}</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBookCard;
