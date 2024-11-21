import React from "react";
import Navbar from "./common/Navbar";
import Restaurants from "./components/Restaurants";
import Footer from "./common/Footer";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <Restaurants />
      <Footer />
    </div>
  );
};

export default Home;
