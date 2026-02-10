import styles from './NewsNavFilter.module.scss'
import clsx from 'clsx'

const NewsNavFilter = (props) => {
  const {
    className
  } = props

  return (
    <div className={clsx(styles.newsnavfilter, className)}>

    </div>
  )
}

export default NewsNavFilter