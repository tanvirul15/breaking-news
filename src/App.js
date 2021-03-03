import { Button, Card } from "react-bootstrap";
import News from "./News";

import Topheadline from "./Topheadline";
//79bc5fa2bd3a455897ecf7b2e2d6c07b
function App() {
  return (
    <div className="App ">
      <h2 className="display-2 p-3 text-center bg-info">Breaking News</h2>
      <div id="news-container" className="container bt-light">
        <div className="d-flex">
          <Topheadline></Topheadline>
        </div>
      </div>
    </div>
  );
}

export default App;
