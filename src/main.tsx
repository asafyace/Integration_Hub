import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import IntegrationDetailPage from './pages/IntegrationDetailPage';
import CategoriesPage from './pages/CategoriesPage';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/integration/:id" element={<IntegrationDetailPage />} />
      </Routes>
    </Router>
  </StrictMode>
);