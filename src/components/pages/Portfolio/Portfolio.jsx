import styles from './Portfolio.module.scss'
import clsx from 'clsx'
import Layout from "@/components/templates/Layout/index.js";
import Hero from "@/components/templates/Hero/index.js";
import PortfolioSection from "@/components/organisms/PortfolioSection/index.js";
import portfolioData from '@/data/portfolio.json'
import Section from "@/components/templates/Section/index.js";
import Heading from "@/components/atoms/Heading/index.js";
import PartnersList from "@/components/organisms/PartnersList/index.js";
import Reviews from "@/components/organisms/Reviews/index.js";
import reviewsData from "@/data/reviews.json";
import partnersData from "@/data/partners.json";
import Contacts from "@/components/templates/Contacts/index.js";

const Portfolio = (props) => {
  const partnersFirstSix = partnersData.slice(0, 6)

  return (
    <Layout className={clsx(styles.portfolio)}>
      <Hero
        title="OUR WORK"
        bgImage="/images/page-headers/portfolio.jpg"
      >
        <p>
          Our portfolio represents 20 years of construction experience backed by a passion for perfect client service, quality and innovations in consctuction industry.
        </p>
      </Hero>
      <Section
        paddingTop={215}
        paddingBottom={100}
      >
        <PortfolioSection works={portfolioData} />
      </Section>
      <Section
        id="reviews"
        bgColor="gray"
        paddingTop={80}
        paddingBottom={0}
      >
        <Reviews reviews={reviewsData} />
      </Section>
      <Section>
        <Heading>
          <h2>Our clients</h2>
        </Heading>
        <PartnersList partners={partnersFirstSix} />
      </Section>
      <Contacts />
    </Layout>
  )
}

export default Portfolio