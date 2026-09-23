import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import Seo from "./Seo";
import FaqSection from "./FaqSection";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-dark text-slate-100 selection:bg-brand-blue selection:text-white font-sans relative">
      {/* Per-route title, canonical, Open Graph and JSON-LD. */}
      <Seo />
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Outlet />
        {/* Renders only on routes that define an faq array in siteConfig.
            Blog posts place their own, mid-article. */}
        <FaqSection excludePosts />
      </main>
      <Footer />
    </div>
  );
}
