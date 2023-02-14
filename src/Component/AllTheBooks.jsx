import { useState } from "react";
import SingleBookCard from "./SingleBookCard";
import { Form, Button, Container, Row } from "react-bootstrap";

const AllTheBooks = (props) => {
  const [query, setQuery] = useState("");

  const filterBookList = (e) => {
    console.log(e.target.value);
    setQuery(e.target.value);
  };

  return (
    <Container>
      <Form className="mb-3">
        <Form.Group className="mb-3 ">
          <Form.Label>titolo Libro</Form.Label>
          <Form.Control
            type="text"
            placeholder="inserisci il titolo"
            value={query}
            onChange={(event) => filterBookList(event)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Row style={{ border: "2px solid black" }}>
        {props.category
          .filter((book) => {
            return book.title.toLowerCase().includes(query.toLowerCase());
          })
          .map((Book) => {
            return (
              <SingleBookCard
                myAsin={props.myAsin}
                selectedCard={props.selectedCard}
                selectedAsin={props.selectedAsin}
                key={Book.asin}
                title={Book.title}
                img={Book.img}
                category={Book.category}
                price={Book.price}
                asin={Book.asin}
              />
            );
          })}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
