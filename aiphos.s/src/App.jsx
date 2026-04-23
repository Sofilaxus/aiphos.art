import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './index.css';

import StarField from './components/StarField';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import CommissionsPage from './pages/CommissionsPage';
import ContactPage from './pages/ContactPage';
import LinksPage from './pages/LinksPage';

// scroll to top whenever the route changes
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [pathname]);
  return null;
}

function Layout() {
  return (
    <>
      <StarField />
      <ScrollToTop />
      <Navbar />

      <main>
        <Routes>
          {/* bare root redirects to home */}
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/commissions" element={<CommissionsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/links" element={<LinksPage />} />
          {/* send unknown URLs to home */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
