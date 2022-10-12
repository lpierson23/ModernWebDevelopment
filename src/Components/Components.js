import Shopping from "./Shopping/Shopping.js";
import NavBar from "./NavBar/NavBar.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Components() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Shopping />} />
        {/* <Route path="/requests" element={<Requests />}/>
        <Route path="/calendar" element={<Calendar />}/>
        <Route path="/" element={<Home />}/> */}
        {/* <Route path="/about" element={<About />}></Route> */}
      </Routes>
    </Router>
  );
}
