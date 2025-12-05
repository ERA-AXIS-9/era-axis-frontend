import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/public/home';
import AboutPage from './pages/public/about';
import ProgramsPage from './pages/public/education';
import ProjectsPage from './pages/public/projects';
import EcoWatchPage from './pages/public/projects/ecowatch';
import SafeDrivePage from './pages/public/projects/safedrive';
import AgrizPlanterPage from './pages/public/projects/agrizplanter';
import EraTechnologiesPage from './pages/public/projects/eraTechnologies';
import EcoWatchGalleryPage from './pages/public/projects/EcoWatchGalleryPage';
import SafeDriveGalleryPage from './pages/public/projects/SafeDriveGalleryPage';
import AgrizPlanterGalleryPage from './pages/public/projects/AgrizPlanterGalleryPage';
import ContactPage from './pages/public/contact';
import AdminPage from './pages/admin/DashboardPage';

// Service pages
import EducationPage from './pages/public/education';
import EducationPaymentPage from './pages/public/education/PaymentPage';
import EducationConfirmationPage from './pages/public/education/ConfirmationPage';
import EducationPaymentFailedPage from './pages/public/education/PaymentFailedPage';
import LearningModePage from './pages/public/education/LearningModePage';
import PhysicalEnrollmentPage from './pages/public/education/PhysicalEnrollmentPage';
import PhysicalConfirmationPage from './pages/public/education/PhysicalConfirmationPage';
import OnlineEnrollmentPage from './pages/public/education/OnlineEnrollmentPage';
import InPersonEnrollmentPage from './pages/public/education/InPersonEnrollmentPage';
import InPersonConfirmationPage from './pages/public/education/InPersonConfirmationPage';
import MembershipEnrollmentPage from './pages/public/education/MembershipEnrollmentPage';
import MembershipPaymentPage from './pages/public/education/MembershipPaymentPage';
import MembershipConfirmationPage from './pages/public/education/MembershipConfirmationPage';
import FAQPage from './pages/public/education/FAQPage';
import EducationMobileMoneyPage from './pages/public/education/MobileMoneyPaymentPage';
import ProgramDetailsPage from './pages/public/education/ProgramDetailsPage';
import EducationContactPage from './pages/public/education/EducationContactPage';
import ManufacturingPage from './pages/public/manufacturing';
import CustomFabricationPage from './pages/public/manufacturing/CustomFabricationPage';
import MaintenancePage from './pages/public/manufacturing/MaintenancePage';
import BookTechnicianPage from './pages/public/manufacturing/BookTechnicianPage';
import BookingConfirmationPage from './pages/public/manufacturing/BookingConfirmationPage';
import QuoteConfirmationPage from './pages/public/manufacturing/QuoteConfirmationPage';
import ProjectsShowcasePage from './pages/public/manufacturing/ProjectsShowcasePage';
import ProductDevelopmentPage from './pages/public/manufacturing/ProductDevelopmentPage';
import ManufacturingContactPage from './pages/public/manufacturing/ManufacturingContactPage';
import SubscribePlanPage from './pages/public/manufacturing/SubscribePlanPage';
import SubscriptionConfirmationPage from './pages/public/manufacturing/SubscriptionConfirmationPage';
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
import ArticlePage from './pages/public/newsletter/ArticlePage';


function App() {
  const location = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  // Check if current route is a service page or projects page
  const isSoftwarePage = location.pathname.startsWith('/services/software');
  const isEducationPage = location.pathname.startsWith('/services/education');
  const isManufacturingPage = location.pathname.startsWith('/services/manufacturing');
  const isOpenLabsPage = location.pathname.startsWith('/services/open-labs');
  const isProjectsPage = location.pathname.startsWith('/projects');
  const isProjectsShowcase = location.pathname === '/services/projectShowcase';
  
  // Check if on contact page with service context
  const isContactWithService = location.pathname === '/contact' && location.state?.from;
  
  const hideMainNavbar = isSoftwarePage || isEducationPage || isManufacturingPage || isOpenLabsPage || isProjectsPage || isContactWithService || isProjectsShowcase;

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
          <Route path="/projects/ecowatch/gallery" element={<EcoWatchGalleryPage />} />
          <Route path="/projects/safedrive" element={<SafeDrivePage />} />
          <Route path="/projects/safedrive/gallery" element={<SafeDriveGalleryPage />} />
          <Route path="/projects/agrizplanter" element={<AgrizPlanterPage />} />
          <Route path="/projects/agrizplanter/gallery" element={<AgrizPlanterGalleryPage />} />
          <Route path="/projects/era-technologies" element={<EraTechnologiesPage />} />
          <Route path="/news/nef-2025-finalist" element={<Navigate to="/newsletter/article/1" replace />} />
          <Route path="/news/yeco-2025-selection" element={<Navigate to="/newsletter/article/2" replace />} />
          <Route path="/news/bagaboard-nexora-2025" element={<Navigate to="/newsletter/article/3" replace />} />
                    <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<AdminPage />} />
          
          {/* Service Pages */}
          <Route path="/services/education" element={<EducationPage />} />
                    <Route path="/services/education/payment" element={<EducationPaymentPage />} />
          <Route path="/services/education/confirmation" element={<EducationConfirmationPage />} />
          <Route path="/services/education/payment-failed" element={<EducationPaymentFailedPage />} />
          <Route path="/services/education/learning-mode" element={<LearningModePage />} />
          <Route path="/services/education/physical-enrollment" element={<PhysicalEnrollmentPage />} />
          <Route path="/services/education/physical-confirmation" element={<PhysicalConfirmationPage />} />
          <Route path="/services/education/online-enrollment" element={<OnlineEnrollmentPage />} />
          <Route path="/services/education/in-person-enrollment" element={<InPersonEnrollmentPage />} />
          <Route path="/services/education/in-person-confirmation" element={<InPersonConfirmationPage />} />
          <Route path="/services/education/membership-enrollment" element={<MembershipEnrollmentPage />} />
          <Route path="/services/education/membership-payment" element={<MembershipPaymentPage />} />
          <Route path="/services/education/membership-confirmation" element={<MembershipConfirmationPage />} />
          <Route path="/services/education/mobile-money" element={<EducationMobileMoneyPage />} />
          <Route path="/services/education/faq" element={<FAQPage />} />
          <Route path="/services/education/program-details" element={<ProgramDetailsPage />} />
          <Route path="/services/education/contact" element={<EducationContactPage />} />
          <Route path="/services/manufacturing" element={<ManufacturingPage />} />
          <Route path="/services/manufacturing/custom-fabrication" element={<CustomFabricationPage />} />
          <Route path="/services/manufacturing/maintenance" element={<MaintenancePage />} />
          <Route path="/services/manufacturing/product-development" element={<ProductDevelopmentPage />} />
          <Route path="/services/manufacturing/book-technician" element={<BookTechnicianPage />} />
          <Route path="/services/manufacturing/booking-confirmation" element={<BookingConfirmationPage />} />
          <Route path="/services/manufacturing/subscribe-plan" element={<SubscribePlanPage />} />
          <Route path="/services/manufacturing/subscription-confirmation" element={<SubscriptionConfirmationPage />} />
          <Route path="/services/manufacturing/quote-confirmation" element={<QuoteConfirmationPage />} />
          <Route path="/services/projectShowcase" element={<ProjectsShowcasePage />} />
          <Route path="/services/manufacturing/projects" element={<ProjectsShowcasePage />} />
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
          <Route path="/newsletter/article/:id" element={<ArticlePage />} />
          
          {/* Redirects for old/broken links */}
          <Route path="/labs" element={<Navigate to="/services/open-labs" replace />} />
          <Route path="/enroll" element={<Navigate to="/services/education" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
