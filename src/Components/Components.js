import Shopping from "./Shopping/Shopping.js";
import Requests from "./Requests/Requests.js";
import Calendar from "./Calendar/Calendar.js";
import Home from "./Home/Home.js";
import NavBar from "./NavBar/NavBar.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Components() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/requests" element={<Requests />}/>
        <Route path="/calendar" element={<Calendar />}/>
      </Routes>
    </Router>
  );
}
