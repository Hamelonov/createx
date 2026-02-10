import styles from './About.module.scss'
import factsData from '@/data/facts.json'
import valuesData from '@/data/values.json'
import historyData from '@/data/history.json'
import partnersData from "@/data/partners.json";
import teamData from "@/data/team.json";
import Layout from "@/components/templates/Layout"
import Hero from "@/components/templates/Hero"
import FactsList from "@/components/organisms/FactsList"
import Ceo from "@/components/organisms/Ceo"
import ValuesList from "@/components/organisms/ValuesList"
import Section from "@/components/templates/Section"
import Heading from "@/components/atoms/Heading"
import HistorySection from "@/components/organisms/HistorySection";
import PartnersList from "@/components/organisms/PartnersList";
import TeamSection from "@/components/organisms/TeamSection";
import Contacts from "@/components/templates/Contacts";

const About = () => {
  return (
    <Layout>
      <Hero
        title="About Us"
        bgImage="images/page-headers/about-us.jpg"
      >
        <p>Createx Construction Bureau has been successfully operating in the USA construction market since 2000. We are proud to offer you quality construction and exemplary service.</p>
      </Hero>
      <Section id="facts">
        <FactsList facts={factsData} />
      </Section>
      <Section id="ceo">
        <Ceo />
      </Section>
      <Section
        id="our-history"
        bgColor="gray"
      >
        <Heading>
          <h2>Our core values</h2>
          <p>Our mission is to set the highest standards for construction sphere.</p>
        </Heading>
        <ValuesList cards={valuesData} />
        <HistorySection
          className="mt180"
          // Нужно реализовать передачу слайдов через Context
          slides={historyData.slides}
          timeline={historyData.timeline}
        />
      </Section>
      <Section id="our-partners">
        <Heading>
          <h2>Our partners</h2>
          <p>We are supported by 12+ industry bodies and media partners</p>
        </Heading>
        <PartnersList partners={partnersData} />
      </Section>
      <Section
        id="our-team"
        className={styles.team}
        paddingTop={60}
      >
        <Heading>
          <h2>Our team</h2>
          <p>People are at the heart of Createx Construction Bureau</p>
        </Heading>
        <TeamSection workers={teamData} />
      </Section>
      <Section
        id="map"
        bgColor="gray"
      >
        <Heading>
          <h2>We work worldwide</h2>
        </Heading>
        <img
          src="/images/map.svg"
          alt="map"
          loading="lazy"
        />
      </Section>
      <Contacts />
    </Layout>
  )
}

export default About