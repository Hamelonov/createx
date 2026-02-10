import Layout from "@/components/templates/Layout/index.js";
import Hero from "@/components/templates/Hero/index.js";
import {Link, useLocation} from 'react-router-dom'

const NotFound = () => {
  const location = useLocation()
  const cleanPath = location.pathname.replace('/', '')
  const formattedPath = cleanPath.charAt(0).toUpperCase() + cleanPath.slice(1);

  return (
    <Layout>
      <Hero
        page={formattedPath}
        title="Page 404"
        bgImage="images/page-headers/404.gif"
      >
        <p>This page doesnt exist...</p>
        <Link to="/">Go to main page</Link>
      </Hero>
    </Layout>
  )
}

export default NotFound