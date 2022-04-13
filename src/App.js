import { Container } from "react-bootstrap";
import Cards from "./components/Cards";
function App() {
  return (
    <div className="App">
      <h1> Memory Game </h1>
      <Container>
        <Cards />
      </Container>
    </div>
  );
}

export default App;
