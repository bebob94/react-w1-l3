import { Button, Card, Col } from "react-bootstrap";

const SingleBookCard = (props) => {
  return (
    <Col xs={3}>
      <Card
        onClick={() => {
          props.selectedAsin(props.asin);
        }}
        className="m-3"
        key={props.asin}
        style={{
          border: props.myAsin === props.asin ? "3px solid red" : "none",
        }}
      >
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.category}</Card.Text>
          <Button variant="primary">{props.price}</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBookCard;
