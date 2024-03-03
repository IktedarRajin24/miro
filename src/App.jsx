import { useState } from "react";
import "./App.css";
import Header from "./Layouts/Header";
import HeroSection from "./Components/HeroSection";
import Brands from "./Components/Brands";
import TrustedSection from "./Components/TrustedSection";
import Footer from "./Layouts/Footer";
import WorkSection from "./Components/WorkSection";
import ToolsSection from "./Components/ToolsSection";
import ReviewSection from "./Components/ReviewSection";
import Banner from "./Components/Banner";
import UseCaseSection from "./Components/UseCaseSection";
import TeamsSection from "./Components/TeamsSection";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Header isOpen={isOpen} onSetIsOpen={setIsOpen} />
      <HeroSection />
      <Brands />
      <TrustedSection />
      <WorkSection />
      <ToolsSection />
      <Banner />
      <UseCaseSection />
      <TeamsSection />
      <ReviewSection />
      <Footer />
    </>
  );
}

export default App;
