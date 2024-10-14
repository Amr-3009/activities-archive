import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Titlebar from "./Components/Titlebar/Titlebar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Archive from "./Routes/Archive";
import ParentsA from "./Routes/ParentsA";

function App() {
  return (
    <div className="App">
      <Header />
      <Titlebar />
      <Routes>
        <Route path="activities-archive/" element={<Home />} />
        <Route path="activities-archive/home" element={<Home />} />
        <Route path="activities-archive/contact-us" element={<Contact />} />
        <Route path="activities-archive/archive" element={<Archive />} />
        <Route
          path="/activities-archive/archive/parent-meeting-1"
          element={<ParentsA />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
