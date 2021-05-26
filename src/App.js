import React from "react";
import "./App.css";
import Aboutme from "./components/Aboutme";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Footer from "./components/Footer";
import ProjectSection from "./components/ProjectSection";
import RecommendationSection from "./components/RecommendationSection";
import SkillsSection from "./components/SkillsSection";

function App() {
  return (
    <div>
      <Navbar />
      <Title />
      <RecommendationSection />
      <SkillsSection />
      <ProjectSection />
      <Aboutme />
      <Footer />
    </div>
  );
}

export default App;
