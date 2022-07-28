import React from "react";
import "./App.css";
import Header from "./components/header";
import Paragraphs from "./components/paragraph";
import CarouselPage from "./components/carouselPage";
import Subtitles from "./components/subtitle";
import YoutubeEmbed from "./components/video";
import Card from "./components/Card/card";
import Projects from "./components/project/projects";
import SecondPart from "./components/paragsecondpart";
import ToggleVisibility from "./components/button";

const App = () => {
  return (
    <div className="page">
      <>
        <CarouselPage />

        <Subtitles />

        <Header />

        <Paragraphs />

        <ToggleVisibility>
          <SecondPart />
        </ToggleVisibility>

        <YoutubeEmbed embedId="3aguZjkVLaE" />

        <Card />

        <Projects />
      </>
    </div>
  );
};

export default App;
