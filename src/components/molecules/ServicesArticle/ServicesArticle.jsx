import styles from './ServicesArticle.module.scss'
import clsx from 'clsx'
import {Link} from "react-router-dom";
import Button from "@/components/atoms/Button/index.js";

const ServicesArticle = (props) => {
  const {
    className,
    image,
    title,
    text,
    to
  } = props

  return (
    <article className={clsx(styles.article, className)}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={image}
          alt=""
          width="575"
          height="420"
          loading="lazy"
        />
      </div>
      <div className={styles.body}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        <Link to={to}>
          <Button altStyle>Learn more</Button>
        </Link>
      </div>
    </article>
  )
}

export default ServicesArticle