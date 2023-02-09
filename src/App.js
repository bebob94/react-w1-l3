import "./App.css";
import AllTheBooks from "./Component/AllTheBooks";
import { Row, Container } from "react-bootstrap";
import fantasy from "./Data/fantasy.json";
import history from "./Data/history.json";
import horror from "./Data/horror.json";
import romance from "./Data/romance.json";
import scifi from "./Data/scifi.json";
import "./Component/Cards.css";
function App() {
  return (
    <div className="App">
      <Container className="mt-4">
        <Row className="justify-content-center">
          <AllTheBooks category={fantasy} />
          <AllTheBooks category={history} />
          <AllTheBooks category={horror} />
          <AllTheBooks category={romance} />
          <AllTheBooks category={scifi} />
        </Row>
      </Container>
    </div>
  );
}

export default App;
