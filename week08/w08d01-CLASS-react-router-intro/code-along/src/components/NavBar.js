import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/one-link">One link</Link>
        </li>
        <li>
          <Link to="/anotehr-link">Another link</Link>
        </li>
      </ul>
    </nav>
  );
}
