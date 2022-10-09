import "./App.css";
import Card from "./components/Card";
import data from "./data";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Card data={data} />
    </div>
  );
}

export default App;
