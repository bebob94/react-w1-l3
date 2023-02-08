import "./App.css";
import AllTheBooks from "./Component/AllTheBooks";
import Row from "react-bootstrap/Row";
import fantasy from "./Data/fantasy.json";
import history from "./Data/history.json";
import horror from "./Data/horror.json";
import romance from "./Data/romance.json";
import scifi from "./Data/scifi.json";
import "./Component/Cards.css";
function App() {
  return (
    <div className="App">
      <Row>
        <AllTheBooks category={fantasy} />
        <AllTheBooks category={history} />
        <AllTheBooks category={horror} />
        <AllTheBooks category={romance} />
        <AllTheBooks category={scifi} />
      </Row>
    </div>
  );
}

export default App;
