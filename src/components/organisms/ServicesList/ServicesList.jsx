import styles from './ServicesList.module.scss'
import clsx from "clsx"
import ServicesArticle from "@/components/molecules/ServicesArticle/index.js";

const ServicesList = (props) => {
  const {
    className,
    articles = []
  } = props

  return (
    <div className={clsx(styles.services, className)}>
      {articles.map((article) => (
        <ServicesArticle
          key={article.id}
          className={styles.service}
          {...article}
        />
      ))}
    </div>
  )
}

export default ServicesList