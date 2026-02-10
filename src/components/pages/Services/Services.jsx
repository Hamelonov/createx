import Layout from "@/components/templates/Layout";
import Hero from "@/components/templates/Hero";
import Section from "@/components/templates/Section"
import ServicesList from "@/components/organisms/ServicesList";
import Contacts from "@/components/templates/Contacts"
import servicesData from '@/data/services.json'

const Services = () => {
  return (
    <Layout>
      <Hero
        title="Services"
        bgImage="images/page-headers/services.jpg"
      >
        <p>
          If you are looking for a full-service construction company, look to Createx Construction Bureau.
          We are doing our best to be a partner for all of your construction needs.
        </p>
      </Hero>
      <Section id="services">
        <ServicesList articles={servicesData} />
      </Section>
      <Contacts />
    </Layout>
  )
}

export default Services