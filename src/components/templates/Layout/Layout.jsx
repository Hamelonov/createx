import styles from './Layout.module.scss'
import clsx from "clsx";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import routes from '@/router/routes.jsx'

const Layout = (props) => {
  const {
    className,
    children,
  } = props

  return (
    <div className={clsx(styles.layout, className)}>
      <Header routes={routes} />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout