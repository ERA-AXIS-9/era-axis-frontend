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
import EnrollmentPage from './pages/public/education/EnrollmentPage';
import EducationPaymentPage from './pages/public/education/PaymentPage';
import EducationConfirmationPage from './pages/public/education/ConfirmationPage';
import EducationPaymentFailedPage from './pages/public/education/PaymentFailedPage';
import LearningModePage from './pages/public/education/LearningModePage';
import PhysicalEnrollmentPage from './pages/public/education/PhysicalEnrollmentPage';
import PhysicalConfirmationPage from './pages/public/education/PhysicalConfirmationPage';
import EducationMobileMoneyPage from './pages/public/education/MobileMoneyPaymentPage';
import ProgramDetailsPage from './pages/public/education/ProgramDetailsPage';
import EducationContactPage from './pages/public/education/EducationContactPage';
import ManufacturingPage from './pages/public/manufacturing';
import CustomFabricationPage from './pages/public/manufacturing/CustomFabricationPage';
import MaintenancePage from './pages/public/manufacturing/MaintenancePage';
import ProductDevelopmentPage from './pages/public/manufacturing/ProductDevelopmentPage';
import BookTechnicianPage from './pages/public/manufacturing/BookTechnicianPage';
import BookingConfirmationPage from './pages/public/manufacturing/BookingConfirmationPage';
import QuoteConfirmationPage from './pages/public/manufacturing/QuoteConfirmationPage';
import ManufacturingProjectsPage from './pages/public/manufacturing/ManufacturingProjectsPage';
import ManufacturingContactPage from './pages/public/manufacturing/ManufacturingContactPage';
import SoftwarePage from './pages/public/software';
import CustomSoftwarePage from './pages/public/software/custom';
import IoTPage from './pages/public/software/iot';
import HouseholdPage from './pages/public/software/household';
import SoftwareContactPage from './pages/public/software/contact';
import ContactConfirmationPage from './pages/public/software/ContactConfirmationPage';
import ProjectConfirmationPage from './pages/public/software/ProjectConfirmationPage';
import OpenLabsPage from './pages/public/open-labs';
import OpenLabsContactPage from './pages/public/open-labs/OpenLabsContactPage';

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
  
  // Check if current route is a service page or projects page
  const isSoftwarePage = location.pathname.startsWith('/services/software');
  const isEducationPage = location.pathname.startsWith('/services/education');
  const isManufacturingPage = location.pathname.startsWith('/services/manufacturing');
  const isOpenLabsPage = location.pathname.startsWith('/services/open-labs');
  const isProjectsPage = location.pathname.startsWith('/projects');
  
  // Check if on contact page with service context
  const isContactWithService = location.pathname === '/contact' && location.state?.from;
  
  const hideMainNavbar = isSoftwarePage || isEducationPage || isManufacturingPage || isOpenLabsPage || isProjectsPage || isContactWithService;

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
          <Route path="/services/education/enroll" element={<EnrollmentPage />} />
          <Route path="/services/education/payment" element={<EducationPaymentPage />} />
          <Route path="/services/education/confirmation" element={<EducationConfirmationPage />} />
          <Route path="/services/education/payment-failed" element={<EducationPaymentFailedPage />} />
          <Route path="/services/education/learning-mode" element={<LearningModePage />} />
          <Route path="/services/education/physical-enrollment" element={<PhysicalEnrollmentPage />} />
          <Route path="/services/education/physical-confirmation" element={<PhysicalConfirmationPage />} />
          <Route path="/services/education/mobile-money" element={<EducationMobileMoneyPage />} />
          <Route path="/services/education/program-details" element={<ProgramDetailsPage />} />
          <Route path="/services/education/contact" element={<EducationContactPage />} />
          <Route path="/services/manufacturing" element={<ManufacturingPage />} />
          <Route path="/services/manufacturing/custom-fabrication" element={<CustomFabricationPage />} />
          <Route path="/services/manufacturing/maintenance" element={<MaintenancePage />} />
          <Route path="/services/manufacturing/product-development" element={<ProductDevelopmentPage />} />
          <Route path="/services/manufacturing/book-technician" element={<BookTechnicianPage />} />
          <Route path="/services/manufacturing/booking-confirmation" element={<BookingConfirmationPage />} />
          <Route path="/services/manufacturing/quote-confirmation" element={<QuoteConfirmationPage />} />
          <Route path="/services/manufacturing/projects" element={<ManufacturingProjectsPage />} />
          <Route path="/services/manufacturing/contact" element={<ManufacturingContactPage />} />
          <Route path="/services/software" element={<SoftwarePage />} />
          <Route path="/services/software/custom" element={<CustomSoftwarePage />} />
          <Route path="/services/software/iot" element={<IoTPage />} />
          <Route path="/services/software/household" element={<HouseholdPage />} />
          <Route path="/services/software/contact" element={<SoftwareContactPage />} />
          <Route path="/services/software/contact-confirmation" element={<ContactConfirmationPage />} />
          <Route path="/services/software/project-confirmation" element={<ProjectConfirmationPage />} />
          <Route path="/services/open-labs/*" element={<OpenLabsPage />} />
          <Route path="/services/open-labs/contact" element={<OpenLabsContactPage />} />
          
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
