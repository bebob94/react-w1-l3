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
import { useState } from "react";
import CommentArea from "./Component/CommentArea";

const App = () => {
  // state = {
  //   asin: null,
  // };

  const [asin, setAsin] = useState(null);

  const selectedAsin = (asinCard) => {
    setAsin(asinCard);
  };

  return (
    <div className="App">
      <MyNav />
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col xs={8}>
            <AllTheBooks
              category={fantasy}
              myAsin={asin}
              selectedAsin={selectedAsin}
            />
          </Col>
          <Col xs={4}>
            <CommentArea myAsin={asin} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
