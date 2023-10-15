import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/tesimonial/Testimonial";
import './App.css';
import { SiWhatsapp } from 'react-icons/si';

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Testimonial />
        <Contact />
        <Footer />
        <FooterBottom />
        <a
        href="https://wa.me/+918457092615"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiWhatsapp className="whatsapp-icon"/>
      </a>
      </div>
    </div>
  );
}

export default App;
