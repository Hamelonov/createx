import styles from './News.module.scss'
import clsx from 'clsx'
import Layout from "@/components/templates/Layout/index.js";
import Hero from "@/components/templates/Hero/index.js";
import Section from "@/components/templates/Section/index.js";
import Heading from "@/components/atoms/Heading/index.js";
import Contacts from "@/components/templates/Contacts/index.js";

const News = (props) => {
  const {
    className
  } = props

  return (
    <Layout className={clsx(styles.news, className)}>
      <Hero
        title="NEWS"
        bgImage="/images/page-headers/news.jpg"
      >
        <p>Stay tuned with our news, expert tips and articles.</p>
      </Hero>
      <Section>
        <Heading marginBottom={40}>
          <h2>Categories</h2>
        </Heading>

      </Section>
      <Contacts />
    </Layout>
  )
}

export default News