import React, { useEffect, useState } from "react";
import Container from "../layout/Container";
import Banner from "../layout/Banner";
import Feed from "../layout/Feed";
import Sidebar from "../layout/Sidebar";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { getDefaultAvatar, getUserAvatar } from "../firebase/storage";
import { useAuth } from "../firebase/auth";

const Dashboard = () => {
  const { authUser, isLoading } = useAuth();
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    if (authUser) {
      try {
        getUserAvatar(authUser.uid).then((image) => setAvatar(image));
      } finally {
        getDefaultAvatar().then((image) => setAvatar(image));
      }
    }
  }, [authUser]);

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
      <Banner avatar={avatar} />
      <Feed avatar={avatar} />
      <Sidebar />
    </Container>
  );
};

export default Dashboard;
