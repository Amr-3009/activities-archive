import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Titlebar from "./Components/Titlebar/Titlebar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Archive from "./Routes/Archive";
import ParentsA from "./Routes/ParentsA";
import CultureA from "./Routes/CultureA";
import HonoringA from "./Routes/HonoringA";
import EquesTripA from "./Routes/EquesTripA";
import FootballA from "./Routes/FootballA";
import TeacherTrainingA from "./Routes/TeacherTrainingA";

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
        <Route
          path="/activities-archive/archive/culture-day-1"
          element={<CultureA />}
        />
        <Route
          path="/activities-archive/archive/honoring-students-1"
          element={<HonoringA />}
        />
        <Route path="/activities-archive/archive/eques-trip" element={<EquesTripA />} />
        <Route path="/activities-archive/archive/football-olympic-1" element={<FootballA />} />
        <Route path="/activities-archive/archive/teacher-training-1" element={<TeacherTrainingA />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
