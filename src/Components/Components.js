import Shopping from "./Shopping/Shopping.js";
import Requests from "./Requests/Requests.js";
import Calendar from "./Calendar/Calendar.js";
import Home from "./Home/Home.js";
import AuthModule from "./Auth/Auth.js";
import AuthLogin from "./Auth/AuthRegister.js";
import AuthRegister from "./Auth/AuthLogin.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Components() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthModule />} />
        <Route path="/auth/register" element={<AuthRegister />} />
        <Route path="/auth/login" element={<AuthLogin />} />
        <Route 
          path="/" 
          element={
            <ProtectedRoute path="/" element={<Home />} />
          }
        />
        <Route 
          path="/shopping" 
          element={
            <ProtectedRoute path="/shopping" element={<Shopping />} />
          }
        />
        <Route 
          path="/requests" 
          element={
            <ProtectedRoute path="/requests" element={<Requests />} />
          }
        />
        <Route 
          path="/calendar" 
          element={
            <ProtectedRoute path="/calendar" element={<Calendar />} />
          }
        />
      </Routes>
    </Router>
  );
}