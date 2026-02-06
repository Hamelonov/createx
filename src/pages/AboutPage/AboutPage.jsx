import styles from './AboutPage.module.scss'
import factsData from '@/data/facts.json'
import valuesData from '@/data/values.json'
import historyData from '@/data/history.json'
import partnersData from "@/data/partners.json";
import teamData from "@/data/team.json";
import PageLayout from "@/components/layout/PageLayout"
import PageHeader from "@/components/layout/PageHeader"
import Facts from "@/components/sections/Facts"
import Ceo from "@/components/sections/Ceo"
import Values from "@/components/sections/Values"
import Section from "@/components/layout/Section"
import SectionHeader from "@/components/layout/SectionHeader"
import History from "@/components/sections/History";
import Partners from "@/components/common/Partners";
import Team from "@/components/sections/Team";

const AboutPage = () => {
  return (
    <PageLayout>
      <PageHeader
        title="About Us"
        bgImage="images/page-headers/about-us.jpg"
      >
        <p>Createx Construction Bureau has been successfully operating in the USA construction market since 2000. We are proud to offer you quality construction and exemplary service.</p>
      </PageHeader>
      <Section id="facts">
        <Facts facts={factsData} />
      </Section>
      <Section
        id="ceo"
      >
        <Ceo />
      </Section>
      <Section
        id="our-history"
        bgColor="gray"
      >
        <SectionHeader
          title="Our core values"
          subtitle="Our mission is to set the highest standards for construction sphere."
        />
        <Values cards={valuesData} />
        <History
          className="mt180"
          slides={historyData.slides}
          timeline={historyData.timeline}
        />
      </Section>
      <Section
        id="our-team"
        className={styles.team}
      >
        <SectionHeader
          title="Our partners"
          subtitle="We are supported by 12+ industry bodies and media partners"
        />
        <Partners partners={partnersData} />
        <SectionHeader
          className="mt180"
          title="Our team"
          subtitle="People are at the heart of Createx Construction Bureau  "
        />
        <Team workers={teamData} />
      </Section>
      <Section
        id="map"
        bgColor="gray"
      >
        <SectionHeader title="We work worldwide" />
        <img
          src="/images/map.svg"
          alt="map"
          loading="lazy"
        />
      </Section>
    </PageLayout>
  )
}

export default AboutPage