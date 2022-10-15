import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import About from './pages/About.jsx';
import Books from './pages/Books.jsx';
import Venues from './pages/Venues';
import VenueSinglePage from './venuepage/VenueSinglePage';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/books" element={<Books />} />
          <Route path="/venues" element={<Venues />} />
          <Route path="/venues/:id" element={<VenueSinglePage />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;