import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/layout/PageHeader";
import Services from "@/components/sections/Services/index.js";
import './ServicesPage.scss'
import servicesData from '@/data/services.json'

const ServicesPage = () => {
  return (
    <PageLayout className="services-page">
      <PageHeader
        title="Services"
        bgImage="images/page-headers/services.jpg"
      >
        <p>
          If you are looking for a full-service construction company, look to Createx Construction Bureau.
          We are doing our best to be a partner for all of your construction needs.
        </p>
      </PageHeader>
      <Services services={servicesData} />
    </PageLayout>
  )
}

export default ServicesPage