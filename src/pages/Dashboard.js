import React, { useEffect } from "react";
import Container from "../layout/Container";
import Banner from "../layout/Banner";
import Feed from "../layout/Feed";
import Sidebar from "../layout/Sidebar";
import { useAuth } from "../firebase/auth";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const Dashboard = () => {
  const { authUser, isLoading } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoading && !authUser) {
      navigate("/");
    }
  }, [authUser, isLoading]);

  return !authUser ? (
    <CircularProgress sx={{ marginLeft: "50%", marginTop: "25%" }} />
  ) : (
    <Container>
      <Banner />
      <Feed />
      <Sidebar />
    </Container>
  );
};

export default Dashboard;
