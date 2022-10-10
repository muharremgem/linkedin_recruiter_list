import "./App.css";
import data from "./data";
import Input from "./components/Input";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return (
    <div className="App bg-white">
      <Navbar />
      <Search />
    </div>
  );
}

export default App;
