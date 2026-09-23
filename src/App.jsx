import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";
import PageTransition from "./components/PageTransition";

import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AiAutomationPage from "./pages/services/AiAutomationPage";
import CrmAutomationPage from "./pages/services/CrmAutomationPage";
import CustomSoftwarePage from "./pages/services/CustomSoftwarePage";
import WebDevelopmentPage from "./pages/services/WebDevelopmentPage";
import DataAnalyticsPage from "./pages/services/DataAnalyticsPage";
import DigitalMarketingPage from "./pages/services/DigitalMarketingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import GetQuotePage from "./pages/GetQuotePage";
import FreeAuditPage from "./pages/FreeAuditPage";
import SecurityPage from "./pages/SecurityPage";
import BlogIndexPage from "./pages/BlogIndexPage";
import BlogPostPage from "./pages/BlogPostPage";
import NotFoundPage from "./pages/NotFoundPage";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PageTransition>
                <HomePage />
              </PageTransition>
            }
          />
          <Route
            path="services"
            element={
              <PageTransition>
                <ServicesPage />
              </PageTransition>
            }
          />
          <Route
            path="services/ai-automation"
            element={
              <PageTransition>
                <AiAutomationPage />
              </PageTransition>
            }
          />
          <Route
            path="services/crm-development"
            element={
              <PageTransition>
                <CrmAutomationPage />
              </PageTransition>
            }
          />
          <Route
            path="services/crm-automation"
            element={
              <PageTransition>
                <CrmAutomationPage />
              </PageTransition>
            }
          />
          <Route
            path="services/custom-software"
            element={
              <PageTransition>
                <CustomSoftwarePage />
              </PageTransition>
            }
          />
          <Route
            path="services/web-development"
            element={
              <PageTransition>
                <WebDevelopmentPage />
              </PageTransition>
            }
          />
          <Route
            path="services/data-analytics"
            element={
              <PageTransition>
                <DataAnalyticsPage />
              </PageTransition>
            }
          />
          <Route
            path="services/digital-marketing"
            element={
              <PageTransition>
                <DigitalMarketingPage />
              </PageTransition>
            }
          />
          <Route
            path="about"
            element={
              <PageTransition>
                <AboutPage />
              </PageTransition>
            }
          />
          <Route
            path="contact"
            element={
              <PageTransition>
                <ContactPage />
              </PageTransition>
            }
          />
          <Route
            path="get-quote"
            element={
              <PageTransition>
                <GetQuotePage />
              </PageTransition>
            }
          />
          <Route
            path="free-audit"
            element={
              <PageTransition>
                <FreeAuditPage />
              </PageTransition>
            }
          />
          <Route
            path="security"
            element={
              <PageTransition>
                <SecurityPage />
              </PageTransition>
            }
          />
          <Route
            path="blog"
            element={
              <PageTransition>
                <BlogIndexPage />
              </PageTransition>
            }
          />
          <Route
            path="blog/:slug"
            element={
              <PageTransition>
                <BlogPostPage />
              </PageTransition>
            }
          />
          {/* Catch-all: a real 404, not the homepage — see NotFoundPage. */}
          <Route
            path="*"
            element={
              <PageTransition>
                <NotFoundPage />
              </PageTransition>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return <AnimatedRoutes />;
}
