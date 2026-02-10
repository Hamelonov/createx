import styles from './HistorySection.module.scss'
import clsx from 'clsx'
import Heading from "@/components/atoms/Heading";
import Slider from "@/components/organisms/Slider";

const HistorySection = (props) => {
  const {
    className,
    slides,
    timeline,
  } = props

  return (
    <div className={clsx(className)}>
      <Heading textAlign="left">
        <h2>Our history</h2>
      </Heading>
      <div className={styles.body}>
        <div className={styles.timeline}>
          {timeline.map(({line}, index) => (
            <time
              key={index}
              className={`h3 ${styles.line}`}
            >{line}</time>
          ))}
        </div>
        <div className={styles.side}>
          <Slider
            slides={slides}
            alt
          />
          <p>Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus. Eu nec vitae,</p>
        </div>
      </div>
    </div>
  )
}

export default HistorySection