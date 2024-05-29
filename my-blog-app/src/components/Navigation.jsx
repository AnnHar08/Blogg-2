import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navigation = () => {
  const { currentUser, logout } = useAuth();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {currentUser && (
          <li>
            <Link to="/myposts">My Posts</Link>
          </li>
        )}
        <li>
          {currentUser ? (
            <>
              Logged in as: {currentUser.email}
              <button onClick={logout}>Log Out</button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
