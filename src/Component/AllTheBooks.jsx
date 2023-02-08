import { Component } from "react";
import SingleBookCard from "./SingleBookCard";
import { Form, Button } from "react-bootstrap";

class AllTheBooks extends Component {
  state = {
    title: null,
  };
  render() {
    return (
      <>
        <Form>
          <Form.Group className="mb-3 ">
            <Form.Label>titolo Libro</Form.Label>
            <Form.Control type="text" placeholder="inserisci il titolo" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        {this.props.category.map((Book) => {
          return (
            <SingleBookCard
              title={Book.title}
              img={Book.img}
              category={Book.category}
              price={Book.price}
            />
          );
        })}
      </>
    );
  }
}

export default AllTheBooks;
