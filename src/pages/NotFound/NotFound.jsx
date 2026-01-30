import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/layout/PageHeader";
import {Link, useLocation} from 'react-router-dom'

const NotFound = () => {
  const location = useLocation()
  const cleanPath = location.pathname.replace('/', '')
  const formattedPath = cleanPath.charAt(0).toUpperCase() + cleanPath.slice(1);

  return (
    <PageLayout
      className="not-found"
      hasContactsLayout={false}
    >
      <PageHeader
        page={formattedPath}
        title="Page not found"
        bgImage="images/page-headers/404.gif"
      >
        <p>This page doesnt exist...</p>
        <Link to="/">Go to main page</Link>
      </PageHeader>
    </PageLayout>
  )
}

export default NotFound