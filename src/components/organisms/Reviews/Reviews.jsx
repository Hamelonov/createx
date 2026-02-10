import styles from './Reviews.module.scss'
import clsx from "clsx";
import SliderReviews from "@/components/organisms/SliderReviews";

const Reviews = (props) => {
  const {
    className,
    reviews = []
  } = props

  return (
    <div className={clsx(styles.reviews, className)}>
      <div className={styles.main}>
        <h2 className={styles.title}>What our clients are saying</h2>
        <SliderReviews slides={reviews} />
      </div>
      <div className={styles.side}>
        <img
          className={styles.image}
          src="images/reviews/image.jpg"
          alt=""
          width="495"
          height="550"
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default Reviews