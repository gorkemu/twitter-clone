import React from "react";
import Container from "../layout/Container";
import Banner from "../layout/Banner";
import Feed from "../layout/Feed";
import Sidebar from "../layout/Sidebar";

const Home = () => {
  return (
    <Container>
      <Banner />
      <Feed />
      <Sidebar />
    </Container>
  );
};

export default Home;
