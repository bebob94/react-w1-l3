import { Component } from "react";
import SingleBookCard from "./SingleBookCard";
import { Form, Button } from "react-bootstrap";

class AllTheBooks extends Component {
  state = {
    query: "",
  };

  filterBookList(e) {
    console.log(e.target.value);
    this.setState({
      query: e.target.value,
    });
  }

  render() {
    return (
      <>
        <Form>
          <Form.Group className="mb-3 ">
            <Form.Label>titolo Libro</Form.Label>
            <Form.Control
              type="text"
              placeholder="inserisci il titolo"
              onChange={(event) => this.filterBookList(event)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        {this.props.category
          .filter((book) => {
            return book.title
              .toLowerCase()
              .includes(this.state.query.toLowerCase());
          })
          .map((Book) => {
            return (
              <SingleBookCard
                key={Book.asin}
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
