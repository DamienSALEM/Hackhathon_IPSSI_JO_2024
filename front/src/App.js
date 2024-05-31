import React from 'react'
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom'
import Navbar from './components/Header'
import Error404 from './pages/Error404'
import PredictionPage from './pages/PredictionPage'
import PresentationPage from './pages/PresentationPage'
import RawDatasPage from './pages/RawDatasPage'
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<PresentationPage />} />
        <Route path="pageIntrouvable" element={<Error404 />} />
        <Route path="/predictionPage" element={<PredictionPage />} />
        <Route path="/rawDatasPage" element={<RawDatasPage />} />
        <Route path="*" element={<Navigate to="pageIntrouvable" replace />} />
      </Routes>
    </Router>
  )
}

export default App
