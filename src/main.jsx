import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import OurServices from './pages/OurServices.jsx';
import Work from './pages/Work.jsx'

import AboutUs from './pages/AboutUs.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Setting up the router */}
    <Router>
      <Routes>
        {/* Define the route for Home component */}
        <Route path="/" element={<Home />} />
        {/* Define the route for OurServices component */}
        <Route path="/services" element={<OurServices />} />
         {/* Define the route for work component */}
         <Route path="/work" element={<Work />} />
          {/* Define the route for work component */}
          <Route path="/about" element={<AboutUs />} />

      </Routes>
    </Router>
  </StrictMode>,
);
