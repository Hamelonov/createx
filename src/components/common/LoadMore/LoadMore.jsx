import styles from './LoadMore.module.scss'
import clsx from 'clsx'
import Icon from "@/components/ui/Icon";

const LoadMore = (props) => {
  const {
    className
  } = props

  return (
    <div className={clsx(styles.loadMore, className)}>
      <button className={styles.button} type="button">
        <Icon
          className="h6"
          src="icons/load-more.svg"
          size={24}
        >
          Load more
        </Icon>
      </button>
    </div>
  )
}

export default LoadMore