import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router components
import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
// import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
// import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
// import { Team } from "./components/Team";
// import { Testimonials } from "./components/Testimonials";
import { PrivacyPolicy } from "./components/PrivacyPolicy"; // Import PrivacyPolicy component
import { TermsOfService } from "./components/TermsOfService"; // Import TermsOfService component
import "./App.css";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Set light theme as default
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
  }, []);

  return (
    <Router> {/* Wrap the application with Router */}
      <div className="mx-auto max-w-screen-lg">
        <Routes> {/* Define Routes within Routes component */}
          <Route path="/" element={(
            <>
              <Navbar />
              <Hero />
              <About />
              <HowItWorks />
              {/* <Features /> */}
              <Services />
              <Cta />
              {/* <Testimonials /> */}
              {/* <Team /> */}
              {/* <Pricing /> */}
              {/* <Newsletter /> */}
              <FAQ />
            </>
          )} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} /> {/* Route for Privacy Policy */}
          <Route path="/terms-of-service" element={<TermsOfService />} /> {/* Route for Terms of Service */}
        </Routes>
        <Footer /> {/* Footer is outside Routes to be displayed on all pages */}
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
