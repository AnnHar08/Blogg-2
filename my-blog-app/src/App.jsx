import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import MyPosts from "./pages/MyPosts";
import Login from "./pages/Login";
import { UserProvider } from "./context/UserContext";
import { BlogProvider } from "./context/BlogContext";
import { AuthProvider, useAuth } from "./context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <UserProvider>
          <BlogProvider>
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/myposts"
                element={
                  <PrivateRoute>
                    <MyPosts />
                  </PrivateRoute>
                }
              />
              <Route path="/login" element={<Login />} />
            </Routes>
          </BlogProvider>
        </UserProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
