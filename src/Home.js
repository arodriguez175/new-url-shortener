import React from "react";
import Hero from "./components/Hero";
import AdvancedStatistics from "./components/AdvancedStatistics";
import Boost from "./components/Boost";
import Footer from "./components/Footer";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Hero />
        <AdvancedStatistics />
        <Boost />
        <Footer />
      </div>
    );
  }
}

export default Home;
