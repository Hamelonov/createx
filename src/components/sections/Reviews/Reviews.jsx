import ReviewsSlider from "@/components/common/ReviewsSlider";
import styles from './Reviews.module.scss'

const Reviews = (props) => {
  const {
    reviews = []
  } = props

  return (
    <div className={styles.reviews}>
      <div className={styles.main}>
        <h2 className={styles.title}>What our clients are saying</h2>
        <ReviewsSlider slides={reviews} />
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