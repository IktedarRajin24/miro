import { useState } from "react";
import "./App.css";
import Header from "./Layouts/Header";
import HeroSection from "./HeroSection";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Header isOpen={isOpen} onSetIsOpen={setIsOpen} />
      <HeroSection />
    </>
  );
}

export default App;
