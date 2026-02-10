import styles from './Footnote.module.scss'
import clsx from "clsx";

const Footnote = (props) => {
  const {
    className,
    children
  } = props

  return (
    <div className={clsx(styles.footnote, className)}>
      {children}
    </div>
  )
}

export default Footnote