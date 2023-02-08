import { Button, Card, Col } from "react-bootstrap";

function SingleBookCard(props) {
  return (
    <Col>
      <Card className="m-3" key={props.asin} style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.category}</Card.Text>
          <Button variant="primary">{props.price}</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SingleBookCard;
