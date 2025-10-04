import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/public/home';
import AboutPage from './pages/public/about';
import ProgramsPage from './pages/public/education';
import ProjectsPage from './pages/public/projects';
import ContactPage from './pages/public/contact';
import AdminPage from './pages/admin/DashboardPage';

// Import other pages that need routes
import DonationPage from './pages/public/donation';
import FaqPage from './pages/public/faq';
import ImpactPage from './pages/public/impact';
import PartnershipPage from './pages/public/partnership';
import BlogPage from './pages/public/blog';
import GalleryPage from './pages/public/gallery';
import NewsletterPage from './pages/public/newsletter';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/donate" element={<DonationPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/partner" element={<PartnershipPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/newsletter" element={<NewsletterPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
