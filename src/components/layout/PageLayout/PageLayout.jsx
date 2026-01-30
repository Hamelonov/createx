import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Contacts from "@/components/sections/Contacts";
import './PageLayout.scss'

const PageLayout = (props) => {
  const {
    className = '',
    hasContactsLayout = true,
    children,
  } = props

  return (
    <div className={`page-layout ${className}`}>
      <Header />
      <main className="page-layout__main">
        {children}
      </main>
      {hasContactsLayout && (<Contacts />)}
      <Footer />
    </div>
  )
}

export default PageLayout