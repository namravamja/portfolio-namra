import React from "react";
import Herosection from "./components/Herosection";
import InfiniteScroll from "./components/InfiniteScroll";
import HomepageSection1 from "./components/HomepageSection1";

function Homepage() {
  return (
    <div>
      <Herosection />
      <HomepageSection1 />
    </div>
  );
}

export default Homepage;
