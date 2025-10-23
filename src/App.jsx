import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/public/home';
import AboutPage from './pages/public/about';
import ProgramsPage from './pages/public/education';
import ProjectsPage from './pages/public/projects';
import EcoWatchPage from './pages/public/projects/ecowatch';
import ContactPage from './pages/public/contact';
import AdminPage from './pages/admin/DashboardPage';

// Service pages
import EducationPage from './pages/public/education';
import ManufacturingPage from './pages/public/manufacturing';
import SoftwarePage from './pages/public/software';
import CustomSoftwarePage from './pages/public/software/custom';
import IoTPage from './pages/public/software/iot';
import HouseholdPage from './pages/public/software/household';
import SoftwareContactPage from './pages/public/software/contact';
import OpenLabsPage from './pages/public/open-labs';

// Import other pages that need routes
import DonatePage from './pages/public/donate';
import MonthlySupporter from './pages/public/donation/MonthlySupporter';
import PaymentPage from './pages/public/donation/PaymentPage';
import PayPalPayment from './pages/public/donation/PayPalPayment';
import MobileMoneyPayment from './pages/public/donation/MobileMoneyPayment';
import EWastePage from './pages/public/donation/EWastePage';
import FaqPage from './pages/public/faq';
import ImpactPage from './pages/public/impact';
import PartnershipPage from './pages/public/partnership';
import PartnershipApplicationPage from './pages/public/partnership/apply';
import BlogPage from './pages/public/blog';
import GalleryPage from './pages/public/gallery';
import NewsletterPage from './pages/public/newsletter';


function App() {
  const location = useLocation();
  
  // Check if current route is a software page or projects page
  const isSoftwarePage = location.pathname.startsWith('/services/software');
  const isProjectsPage = location.pathname.startsWith('/projects');
  const hideMainNavbar = isSoftwarePage || isProjectsPage;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Only show main Navbar if NOT on software or projects pages */}
      {!hideMainNavbar && <Navbar />}
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/ecowatch" element={<EcoWatchPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<AdminPage />} />
          
          {/* Service Pages */}
          <Route path="/services/education" element={<EducationPage />} />
          <Route path="/services/manufacturing" element={<ManufacturingPage />} />
          <Route path="/services/software" element={<SoftwarePage />} />
          <Route path="/services/software/custom" element={<CustomSoftwarePage />} />
          <Route path="/services/software/iot" element={<IoTPage />} />
          <Route path="/services/software/household" element={<HouseholdPage />} />
          <Route path="/services/software/contact" element={<SoftwareContactPage />} />
          <Route path="/services/open-labs" element={<OpenLabsPage />} />
          
          {/* Other Pages */}
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/donate/monthly-supporter" element={<MonthlySupporter />} />
          <Route path="/donate/payment" element={<PaymentPage />} />
          <Route path="/donate/paypal" element={<PayPalPayment />} />
          <Route path="/donate/mobile-money" element={<MobileMoneyPayment />} />
          <Route path="/donate/ewaste" element={<EWastePage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/partner" element={<PartnershipPage />} />
          <Route path="/partner/apply" element={<PartnershipApplicationPage />} />
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
