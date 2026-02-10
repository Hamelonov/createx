import Home from "@/components/pages/Home"
import Services from "@/components/pages/Services"
import About from "@/components/pages/About"
import NotFound from "@/components/pages/NotFound"
import Portfolio from "@/components/pages/Portfolio";
import News from "@/components/pages/News";

const routes = [
  {path: "/", element: <Home />},
  {path: "/about", element: <About />, name: 'About Us'},
  {path: "/services", element: <Services />, name: 'Services'},
  {path: "/portfolio", element: <Portfolio />, name: 'Works'},
  {path: "/news", element: <News />, name: 'News'},
  {path: "/contacts", element: <NotFound />, name: 'Contacts'},
  {path: "*", element: <NotFound />},
]

export default routes