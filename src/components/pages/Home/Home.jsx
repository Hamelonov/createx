import styles from './Home.module.scss'
import clsx from "clsx";
import SliderFullScreen from "@/components/organisms/SliderFullScreen"
import ValuesList from "@/components/organisms/ValuesList"
import ServicesPreview from "@/components/organisms/ServicesPreview"
import Layout from "@/components/templates/Layout"
import ContactsFormMini from "@/components/organisms/ContactsFormMini"
import Reviews from "@/components/organisms/Reviews"
import StatisticsList from "@/components/organisms/StatisticsList"
import RecentNews from "@/components/organisms/RecentNews"
import Section from "@/components/templates/Section"
import Videoplayer from "@/components/organisms/Videoplayer"
import Heading from "@/components/atoms/Heading"
import Footnote from "@/components/atoms/Footnote"
import PartnersList from "@/components/organisms/PartnersList"
import Slider from "@/components/organisms/Slider"
import Contacts from "@/components/templates/Contacts";
import partnersData from "@/data/partners.json"
import valuesData from "@/data/values.json"
import servicesPreviewData from '@/data/servicesPreview.json'
import portfolioData from "@/data/portfolio.json"
import reviewsData from "@/data/reviews.json"
import statsData from '@/data/stats.json'
import newsData from '@/data/recent-news.json'
import {Link} from "react-router-dom";
import Button from "@/components/atoms/Button/index.js";

const Home = () => {
  const partnersFirstSix = partnersData.slice(0, 6)

  return (
    <Layout className={clsx(styles.home)}>
      <SliderFullScreen />
      <Section
        id="about-us"
      >
        <Heading>
          <h2>We are Createx Construction Bureau</h2>
          <p>We are rightfully considered to be the best construction company in the USA.</p>
        </Heading>
        <Videoplayer
          source="videos/example.mp4"
          poster="images/poster/1.jpg"
          width={1230}
          height={500}
        />
      </Section>
      <Section
        id="values"
        paddingTop={60}
        paddingBottom={0}
      >
        <Heading>
          <h2>Our core values</h2>
          <p>Our mission is to set the highest standards for construction sphere.</p>
        </Heading>
        <ValuesList cards={valuesData} />
      </Section>
      <ContactsFormMini
        id="contacts-form-mini"
        className={styles.miniContacts}
      />
      <Section
        id="services-preview"
        bgColor='gray'
        paddingTop={212}
      >
        <Heading>
          <h2>Our services</h2>
          <p>Createx Construction Bureau is a construction giant with a full range of construction services.</p>
        </Heading>
        <ServicesPreview cards={servicesPreviewData} />
        <Footnote>
          <h3>Learn more about our services</h3>
          <Link to="/services">
            <Button>View services</Button>
          </Link>
        </Footnote>
      </Section>
      <Section
        id="portfolio"
      >
        <Heading
          className={styles.portfolioTitle}
          textAlign="left"
        >
          <h2>Browse our selected projects and learn more about our work</h2>
        </Heading>
        <Slider slides={portfolioData} />
        <Footnote>
          <h3>Explore all our works</h3>
          <Link to="/portfolio">
            <Button>View portfolio</Button>
          </Link>
        </Footnote>
      </Section>
      <Section
        id="reviews"
        bgColor="gray"
        paddingTop={80}
        paddingBottom={0}
      >
        <Heading>
          <h2>Supported by 12+ partners</h2>
        </Heading>
        <PartnersList partners={partnersFirstSix} />
        <Reviews
          className={styles.reviews}
          reviews={reviewsData}
        />
      </Section>
      <Section
        id="stats"
        className={styles.stats}
      >
        <Heading>
          <h2>Some facts and figures</h2>
        </Heading>
        <StatisticsList stats={statsData} />
      </Section>
      <Section
        id="news"
        className="news"
        paddingTop={60}
      >
        <Heading>
          <h2>Recent news</h2>
        </Heading>
        <RecentNews articles={newsData} />
        <Footnote>
          <h3>Explore all our news posts</h3>
          <Link to="/news">
            <Button>View all news</Button>
          </Link>
        </Footnote>
      </Section>
      <Contacts />
    </Layout>
  )
}

export default Home