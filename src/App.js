import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Titlebar from "./Components/Titlebar/Titlebar";
import Home from "./Routes/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Titlebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
