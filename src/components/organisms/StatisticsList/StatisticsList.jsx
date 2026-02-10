import styles from './StatisticsList.module.scss'
import StatisticsArticle from "@/components/molecules/StatisticsArticle/index.js";

const StatisticsList = (props) => {
  const {
    stats = []
  } = props

  return (
    <div className={styles.list}>
      {stats.map((stat) => (
        <StatisticsArticle key={stat.id} {...stat} />
      ))}
    </div>
  )
}

export default StatisticsList