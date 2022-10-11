import "./App.css";
import data from "./data";
import Input from "./components/Input";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Header />
      <Footer />
      <Search />
    </div>
  );
}

export default App;
