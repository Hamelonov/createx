import HomePage from "@/pages/HomePage"
import ServicesPage from "@/pages/ServicesPage"
import AboutPage from "@/pages/AboutPage"
import NotFound from "@/pages/NotFound"
import PortfolioPage from "@/pages/PortfolioPage";
import Contacts from "@/components/sections/Contacts";
import News from "@/components/sections/News";

const routes = [
  {path: "/", element: <HomePage />},
  {path: "/about", element: <AboutPage />, name: 'About Us'},
  {path: "/services", element: <ServicesPage />, name: 'Services'},
  {path: "/portfolio", element: <PortfolioPage />, name: 'Works'},
  {path: "/news", element: <NotFound />, name: 'News'},
  {path: "/contacts", element: <NotFound />, name: 'Contacts'},
  {path: "*", element: <NotFound />},
]

export default routes