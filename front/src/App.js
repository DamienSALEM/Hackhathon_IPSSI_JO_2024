import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import Navbar from './components/Header';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="pageIntrouvable" element={<Error404 />} />
        <Route path="*" element={<Navigate to="pageIntrouvable" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
