import styles from './Heading.module.scss'
import clsx from "clsx";

const Heading = (props) => {
  const {
    className,
    textAlign = 'center',
    marginBottom = 60,
    children
  } = props

  return (
    <div
      className={clsx(styles.heading, className)}
      style={{
        '--text-align': textAlign,
        '--margin-bottom': marginBottom + 'px',
    }}
    >
      {children}
    </div>
  )
}

export default Heading