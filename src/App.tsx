import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App() {
  let item = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  return (
    <div>
      <ListGroup items={item} heading="Cities" />
    </div>
  );
}

export default App;
