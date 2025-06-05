import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LoadingSpinner from './components/ui/LoadingSpinner';

// Lazy loading des pages pour optimiser les performances
const Home = lazy(() => import('./pages/Home'));
const EspacesPage = lazy(() => import('./pages/EspacesPage'));
const AbonnementsPage = lazy(() => import('./pages/AbonnementsPage'));
const EvenementsPage = lazy(() => import('./pages/EvenementsPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const LegalPage = lazy(() => import('./pages/LegalPage'));

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-blush">
        <Navbar />
        <main className="pt-18">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/espaces" element={<EspacesPage />} />
              <Route path="/abonnements" element={<AbonnementsPage />} />
              <Route path="/evenements" element={<EvenementsPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/legal" element={<LegalPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}