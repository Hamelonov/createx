import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Contacts from "@/components/sections/Contacts";
import routes from '@/router/routes.jsx'
import './PageLayout.scss'
import clsx from "clsx";

const PageLayout = (props) => {
  const {
    className,
    hasContactsLayout = true,
    children,
  } = props

  return (
    <div className={clsx('page-layout', className)}>
      <Header routes={routes} />
      <main>
        {children}
      </main>
      {hasContactsLayout && (<Contacts />)}
      <Footer />
    </div>
  )
}

export default PageLayout