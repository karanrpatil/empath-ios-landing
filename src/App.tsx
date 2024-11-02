import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Philosophy from './pages/Philosophy';

function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Benefits />
      <Testimonials />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/philosophy" element={<Philosophy />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;