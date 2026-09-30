import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Each page is its own chunk, so a page only downloads its own CSS and markup.
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const CoreTechnology = lazy(() => import("./pages/CoreTechnology"));
const ComplianceGuide = lazy(() => import("./pages/ComplianceGuide"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Careers = lazy(() => import("./pages/Careers"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const CarbonfreeRecd = lazy(() => import("./pages/CarbonfreeRecd"));
const CarbonfreeEsp = lazy(() => import("./pages/CarbonfreeEsp"));
const CarbonfreeAdvancedCatalystPlus = lazy(() => import("./pages/CarbonfreeAdvancedCatalystPlus"));
const CarbonfreeCaps = lazy(() => import("./pages/CarbonfreeCaps"));
const CarbonfreeApcd = lazy(() => import("./pages/CarbonfreeApcd"));
const TenYearTco = lazy(() => import("./pages/TenYearTco"));
const CarbonfreeAts = lazy(() => import("./pages/CarbonfreeAts"));
const Ccus = lazy(() => import("./pages/Ccus"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

/** Old static-site URLs (/page.html, /index.html) → clean URLs. */
function LegacyUrl() {
  const { pathname, search, hash } = useLocation();
  if (/\.html$/.test(pathname)) {
    const clean = pathname.replace(/(index)?\.html$/, "").replace(/\/$/, "") || "/";
    return <Navigate to={clean + search + hash} replace />;
  }
  return <NotFound />;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/core-technology" element={<CoreTechnology />} />
            <Route path="/compliance-guide" element={<ComplianceGuide />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/carbonfree-recd" element={<CarbonfreeRecd />} />
            <Route path="/carbonfree-recd/carbonfree-esp" element={<CarbonfreeEsp />} />
            <Route path="/carbonfree-recd/carbonfree-advanced-catalyst-plus" element={<CarbonfreeAdvancedCatalystPlus />} />
            <Route path="/carbonfree-recd/carbonfree-cac-plus" element={<Navigate to="/carbonfree-recd/carbonfree-advanced-catalyst-plus" replace />} />
            <Route path="/carbonfree-caps" element={<CarbonfreeCaps />} />
            <Route path="/carbonfree-apcd" element={<CarbonfreeApcd />} />
            <Route path="/carbonfree-apcd/10-year-tco" element={<TenYearTco />} />
            <Route path="/carbonfree-ats" element={<CarbonfreeAts />} />
            <Route path="/ccus" element={<Ccus />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blogs/:slug" element={<BlogPost />} />
            <Route path="*" element={<LegacyUrl />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
