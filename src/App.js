import React from 'react';
import './style.css';
import Home from './component/Home';
import Contact from './component/Contact';
import AboutUs from './component/Aboutus';

export default function App() {
  return (
    <div>
      <Home />
      <AboutUs />
      <Contact />
    </div>
  );
}
