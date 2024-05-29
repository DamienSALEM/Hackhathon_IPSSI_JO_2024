import React from 'react'
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom'
import Navbar from './components/Header'
import Error404 from './pages/Error404'
import Home from './pages/Home'
import PredictionPage from './pages/predictionPage'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="pageIntrouvable" element={<Error404 />} />
        <Route path="*" element={<Navigate to="pageIntrouvable" replace />} />
        <Route path="predictionPage" element={<PredictionPage />} />
      </Routes>
    </Router>
  )
}

export default App
