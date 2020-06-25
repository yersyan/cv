import React from "react";
import {Titles} from "./components";
import "../App.css"

export const Home = () => {
  return <section data-id="home" className="animatedSection startPage">
      <div className="sectionContent vcentered">
          <Titles title={"60px"} description={"20px"}/>
      </div>
  </section>
}
