import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './index.css';

import StarField       from './components/StarField';
import Navbar          from './components/Navbar';
import Footer          from './components/Footer';

import HomePage        from './pages/HomePage';
import PortfolioPage   from './pages/PortfolioPage';
import CommissionsPage from './pages/CommissionsPage';
import ContactPage     from './pages/ContactPage';
import LinksPage       from './pages/LinksPage';

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
      <div style={{
        minHeight: '100vh',
        position: 'relative',
        zIndex: 1,
        background: `
          radial-gradient(ellipse at 20% 0%,   rgba(80,30,130,.45)  0%, transparent 50%),
          radial-gradient(ellipse at 80% 10%,  rgba(140,50,100,.25) 0%, transparent 45%),
          radial-gradient(ellipse at 50% 100%, rgba(40,20,80,.6)    0%, transparent 55%),
          #16101e
        `,
      }}>
        <ScrollToTop />
        <Navbar />

        <main>
          <Routes>
            {/* bare root redirects to home */}
            <Route path="/"            element={<Navigate to="/home" replace />} />
            <Route path="/home"        element={<HomePage />} />
            <Route path="/portfolio"   element={<PortfolioPage />} />
            <Route path="/commissions" element={<CommissionsPage />} />
            <Route path="/contact"     element={<ContactPage />} />
            <Route path="/links"       element={<LinksPage />} />
            {/* send unknown URLs to home */}
            <Route path="*"            element={<Navigate to="/home" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
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
