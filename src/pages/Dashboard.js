import React, { useEffect, useState } from "react";
import Container from "../layout/Container";
import Banner from "../layout/Banner";
import Feed from "../layout/Feed";
import Sidebar from "../layout/Sidebar";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { getUserAvatar } from "../firebase/storage";
import { useAuth } from "../firebase/auth";
import defaultAvatar from "../assets/twitter-bg-image.png";

const Dashboard = () => {
  const { authUser, isLoading } = useAuth();
  const [avatar, setAvatar] = useState(defaultAvatar);

  useEffect(() => {
    if (authUser) {
      getUserAvatar(authUser.uid).then((image) => setAvatar(image));
    }
  }, [authUser]);

  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoading && !authUser) {
      navigate("/");
    }
  }, [authUser, isLoading, navigate]);

  return !authUser ? (
    <CircularProgress sx={{ marginLeft: "50%", marginTop: "25%" }} />
  ) : (
    <Container>
      <Banner avatar={avatar} />
      <Feed avatar={avatar} />
      <Sidebar />
    </Container>
  );
};

export default Dashboard;
