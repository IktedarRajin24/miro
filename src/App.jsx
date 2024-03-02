import { useState } from "react";
import "./App.css";
import Header from "./Layouts/Header";
import HeroSection from "./HeroSection";
import Brands from "./Components/Brands";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Header isOpen={isOpen} onSetIsOpen={setIsOpen} />
      <HeroSection />
      <Brands />
    </>
  );
}

export default App;
