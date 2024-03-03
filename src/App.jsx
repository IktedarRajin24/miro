import { useState } from "react";
import "./App.css";
import Header from "./Layouts/Header";
import HeroSection from "./Components/HeroSection";
import Brands from "./Components/Brands";
import TrustedSection from "./Components/TrustedSection";
import Footer from "./Layouts/Footer";
import SectionOne from "./Components/SectionOne";
import SectionTwo from "./Components/SectionTwo";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Header isOpen={isOpen} onSetIsOpen={setIsOpen} />
      <HeroSection />
      <Brands />
      <TrustedSection />
      <SectionOne />
      <SectionTwo />
      <Footer />
    </>
  );
}

export default App;
