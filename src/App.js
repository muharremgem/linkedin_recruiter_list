import "./App.css";
import data from "./data";
import Input from "./components/Input";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  return (
    <div className="App bg-white">
      <Navbar />
      <Header />
      <Search />
    </div>
  );
}

export default App;
