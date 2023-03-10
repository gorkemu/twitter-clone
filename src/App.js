import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Logout from "./pages/Logout";
import Deactivate from "./pages/Deactivate";
import Deactivated from "./pages/Deactivated";

const App = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/deactivate" element={<Deactivate />} />
      <Route path="/deactivated" element={<Deactivated />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
