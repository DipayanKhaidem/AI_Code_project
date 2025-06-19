import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from './components/Navbar';
import PdfSummarizer from './components/PdfSummarizer';
import CodeGenerator from './components/CodeGenerator';
import Footer from "./components/Footer";
import './App.css';
import LandingPage from "./components/Landingpage/LandingPage";
import AuthPage from './components/Auth/AuthPage';

function AppWrapper() {
  const location = useLocation();

 
  const hideNavbarRoutes = ["/","/auth"];
  const showNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="app-wrapper">
      {showNavbar && <Navbar />}
      <div className="content">
        <Routes>
  <Route path="/" element={<LandingPage />} />
  <Route path="/pdf" element={<PdfSummarizer />} />
  <Route path="/code" element={<CodeGenerator />} />
  <Route path="/auth" element={<AuthPage />} />
</Routes>

      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}
