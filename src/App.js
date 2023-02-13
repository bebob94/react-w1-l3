import "./App.css";
import AllTheBooks from "./Component/AllTheBooks";
import MyNav from "./Component/MyNav";
import { Row, Container, Col } from "react-bootstrap";
import fantasy from "./Data/fantasy.json";
// import history from "./Data/history.json";
// import horror from "./Data/horror.json";
// import romance from "./Data/romance.json";
// import scifi from "./Data/scifi.json";
import "./Component/Cards.css";
import { Component } from "react";
import CommentArea from "./Component/CommentArea";

class App extends Component {
  state = {
    asin: null,
  };
  selectedAsin = (asinCard) => {
    this.setState({ asin: asinCard });
  };

  render() {
    return (
      <div className="App">
        <MyNav />
        <Container className="mt-4">
          <Row className="justify-content-center">
            <Col xs={8}>
              <AllTheBooks
                category={fantasy}
                myAsin={this.state.asin}
                selectedAsin={this.selectedAsin}
              />
            </Col>
            <Col xs={4}>
              <CommentArea myAsin={this.state.asin} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
