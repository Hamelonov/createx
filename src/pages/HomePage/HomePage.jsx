import './HomePage.scss'
import Hero from "@/components/sections/Hero"
import Values from "@/components/sections/Values"
import ServicesPreview from "@/components/sections/ServicesPreview"
import PageLayout from "@/components/layout/PageLayout"
import MiniContactForm from "@/components/sections/MiniContactForm"
import Reviews from "@/components/sections/Reviews"
import Stats from "@/components/sections/Stats"
import News from "@/components/sections/News"
import Section from "@/components/layout/Section"
import Videoplayer from "@/components/common/Videoplayer"
import SectionHeader from "@/components/layout/SectionHeader"
import SectionFooter from "@/components/layout/SectionFooter"
import Partners from "@/components/common/Partners"
import Slider from "@/components/common/Slider"
import partnersData from "@/data/partners.json"
import valuesData from "@/data/values.json"
import servicesPreviewData from '@/data/servicesPreview.json'
import portfolioData from "@/data/portfolio.json"
import reviewsData from "@/data/reviews.json"
import statsData from '@/data/stats.json'
import newsData from '@/data/news.json'

const HomePage = () => {
  return (
    <PageLayout className="home-page">
      <Hero />
      <Section
        id="about-us"
      >
        <SectionHeader
          title="We are Createx Construction Bureau"
          subtitle="We are rightfully considered to be the best construction company in the USA."
        />
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
        <SectionHeader
          title="Our core values"
          subtitle="Our mission is to set the highest standards for construction sphere."
        />
        <Values cards={valuesData} />
      </Section>
      <MiniContactForm id="mini-contacts" />
      <Section
        id="services-preview"
        bgColor='gray'
        paddingTop={212}
      >
        <SectionHeader
          title="Our services"
          subtitle="Createx Construction Bureau is a construction giant with a full range of construction services."
        />
        <ServicesPreview cards={servicesPreviewData} />
        <SectionFooter
          title="Learn more about our services"
          link={{
            name: "View services",
            to: "/services"
          }}
        />
      </Section>
      <Section
        id="portfolio"
      >
        <SectionHeader
          id="portfolio-title"
          title="Browse our selected projects and learn more about our work"
          textAlign="left"
        />
        <Slider slides={portfolioData} />
        <SectionFooter
          title="Explore all our works"
          link={{
            name: "View portfolio",
            to: "/portfolio"
          }}
        />
      </Section>
      <Section
        id="reviews"
        bgColor="gray"
        paddingTop={80}
        paddingBottom={0}
      >
        <SectionHeader title="Supported by 12+ partners" />
        <Partners partners={partnersData} />
        <Reviews reviews={reviewsData} />
      </Section>
      <Section
        id="stats"
      >
        <SectionHeader title="Some facts and figures" />
        <Stats stats={statsData} />
      </Section>
      <Section
        id="news"
        className="news"
        paddingTop={60}
      >
        <SectionHeader title="Recent news" />
        <News articles={newsData} />
        <SectionFooter
          title="Explore all our news posts"
          link={{
            name:"View all news",
            to:"/news"
          }}
        />
      </Section>
    </PageLayout>
  )
}

export default HomePage