import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import CreateWithEmailAndPassword from "./pages/CreateWithEmailAndPassword";
import Login from "./pages/Login";
import { useAuth } from "./firebase/auth";

const App = () => {
  const { authUser, isLoading } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoading && authUser) {
      navigate("/dashboard");
    }
  }, [authUser, isLoading]);

  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<CreateWithEmailAndPassword />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
