import { Link } from "react-router-dom";

const NavBar = () => (
  <nav>
    <ul className="navigation">
      <li>
        <Link to="/">Home</Link>
        <Link to="/shopping">Shopping</Link>
        <Link to="/requests">Requests</Link>
        <Link to="/calendar">Calendar</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
