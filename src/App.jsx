import './styles/main.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from "@/pages/HomePage";
import ServicesPage from "@/pages/ServicesPage";
import NotFound from "@/pages/NotFound/index.js";
import ScrollToTop from "@/components/common/ScrollToTop/index.js";
import AboutPage from "@/pages/AboutPage/index.js";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/createx" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
