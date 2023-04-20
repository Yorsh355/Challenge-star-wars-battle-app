import React from "react";
import NavBar from "./NavBar";
import Cards from "./Cards";
import List from "./List";
import stars from "../images/stars.webp";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${stars})`,
        backgroundSize: "cover",
      }}
    >
      <NavBar />
      <Cards />
      <List />
    </div>
  );
};

export default Home;
