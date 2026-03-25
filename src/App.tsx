import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BottomNav } from './components/BottomNav';
import { Home } from './pages/Home';
import { Talent } from './pages/Talent';
import { Services } from './pages/Services';
import { Backlog } from './pages/Backlog';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background text-on-background font-body">
        <Header />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/talent" element={<Talent />} />
            <Route path="/services" element={<Services />} />
            <Route path="/backlog" element={<Backlog />} />
          </Routes>
        </main>
        <Footer />
        <BottomNav />
      </div>
    </Router>
  );
}
