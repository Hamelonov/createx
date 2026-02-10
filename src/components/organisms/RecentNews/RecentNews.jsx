import styles from './RecentNews.module.scss'
import NewsCard from "@/components/molecules/NewsCard";

const RecentNews = (props) => {
  const {
    articles = []
  } = props

  return (
    <div className={styles.news}>
      {articles.map((article) => (
        <NewsCard key={article.id} {...article} />
      ))}
    </div>
  )
}

export default RecentNews