import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import { PaintProvider } from './context/PaintContext';
import { Header } from './components/layout/Header/Header';
import { Footer } from './components/layout/Footer/Footer';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';
import { DrawingCanvas } from './components/DrawingCanvas/DrawingCanvas';
import { PaintToolbar } from './components/PaintToolbar/PaintToolbar';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { WorksPage } from './pages/WorksPage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { SubProjectPage } from './pages/SubProjectPage';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <PaintProvider>
            <ScrollToTop />
            <DrawingCanvas />
            <PaintToolbar />
            <div className="app-layout">
              <Header />
              <main className="app-main">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/works" element={<WorksPage />} />
                  <Route path="/works/:slug" element={<CaseStudyPage />} />
                  <Route path="/works/:slug/:projectSlug" element={<SubProjectPage />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </PaintProvider>
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
