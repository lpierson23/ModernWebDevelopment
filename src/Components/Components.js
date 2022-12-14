import Shopping from "./Shopping/Shopping.js";
import Requests from "./Requests/Requests.js";
import Calendar from "./Calendar/Calendar.js";
import RecipeBook from "./RecipeBook/RecipeBook.js";
import RecipeBookSelected from "./RecipeBook/RecipeBookSelected.js";
import Home from "./Home/Home.js";
import AuthModule from "./Auth/Auth.js";
import AuthLogin from "./Auth/AuthRegister.js";
import AuthRegister from "./Auth/AuthLogin.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute.js";
import Pinterest from "./Pinterest/Pinterest.js";

export default function Components() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthModule />} />
        {/* There was an error in differentiation between registration and log in so this was the makeshift solution */}
        <Route path="/auth/register" element={<AuthLogin />} />
        <Route path="/auth/login" element={<AuthRegister />} />
        <Route 
          path="/" 
          element={
            <ProtectedRoute path="/" element={Home} />
          }
        />
        <Route 
          path="/shopping" 
          element={
            <ProtectedRoute path="/shopping" element={Shopping} />
          }
        />
        <Route 
          path="/requests" 
          element={
            <ProtectedRoute path="/requests" element={Requests} />
          }
        />
        <Route 
          path="/calendar" 
          element={
            <ProtectedRoute path="/calendar" element={Calendar} />
          }
        />
        <Route 
          path="/pinterest" 
          element={
            <ProtectedRoute path="/pinterest" element={Pinterest} />
          }
        />
        <Route
          path="/recipebook" 
          element={
            <ProtectedRoute path="/recipebook" element={RecipeBook} />
          }
        />
        <Route 
          path="/recipebook/:mealId" 
          element={
            <ProtectedRoute path="/recipebook/:mealId" element={RecipeBookSelected} />
          }
        />
      </Routes>
    </Router>
  );
}