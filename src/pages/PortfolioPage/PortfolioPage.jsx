import styles from './PortfolioPage.module.scss'
import clsx from 'clsx'
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/layout/PageHeader";
import Portfolio from "@/components/sections/Portfolio";
import bg from '/public/images/page-headers/portfolio.jpg'
import portfolioData from '@/data/portfolio.json'
import Section from "@/components/layout/Section/index.js";
import LoadMore from "@/components/common/LoadMore/index.js";

const PortfolioPage = (props) => {
  return (
    <PageLayout
      className={clsx(styles.portfolioPage)}
    >
      <PageHeader
        title="OUR WORK"
        bgImage={bg}
      >
        <p>
          Our portfolio represents 20 years of construction experience backed by a passion for perfect client service, quality and innovations in consctuction industry.
        </p>
      </PageHeader>
      <Section
        paddingTop={100}
        paddingBottom={100}
      >
        <Portfolio works={portfolioData} />
        <LoadMore />
      </Section>
    </PageLayout>
  )
}

export default PortfolioPage