import './AboutPage.scss'
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/layout/PageHeader";
import Facts from "@/components/sections/Facts";
import Ceo from "@/components/sections/Ceo";
import Values from "@/components/sections/Values/index.js";

const AboutPage = (props) => {
  const {
    className = ''
  } = props

  const facts = [
    {
      id: 1,
      image: 'images/facts/1.svg',
      title: '60%',
      subtitle: 'Clients on the recommendation of friends',
    },
    {
      id: 2,
      image: 'images/facts/2.svg',
      title: '2400+',
      subtitle: 'Apartments renovated',
    },
    {
      id: 3,
      image: 'images/facts/3.svg',
      title: '670',
      subtitle: 'Qualified specialists',
    },
    {
      id: 4,
      image: 'images/facts/4.svg',
      title: '150000+m2',
      subtitle: 'Finishing work was carried out',
    },
  ]

  return (
    <PageLayout className={`about-page ${className}`}>
      <PageHeader
        title="About Us"
        bgImage="images/page-headers/about-us.jpg"
      >
        <p>Createx Construction Bureau has been successfully operating in the USA construction market since 2000. We are proud to offer you quality construction and exemplary service.</p>
      </PageHeader>
      <Facts facts={facts} />
      <Ceo />
      <Values />

    </PageLayout>
  )
}

export default AboutPage