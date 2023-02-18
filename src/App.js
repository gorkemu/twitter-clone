import React from "react";
import Banner from "./layout/Banner";
import Container from "./layout/Container";
import Feed from "./layout/Feed";
import Sidebar from "./layout/Sidebar";

const App = () => {
  return (
    <Container>
      <Banner />
      <Feed />
      <Sidebar />
    </Container>
  );
};

export default App;
