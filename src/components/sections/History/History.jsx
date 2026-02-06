import styles from './History.module.scss'
import clsx from 'clsx'
import SectionHeader from "@/components/layout/SectionHeader";
import Slider from "@/components/common/Slider";

const History = (props) => {
  const {
    className,
    slides,
    timeline,
  } = props

  return (
    <div className={clsx(className)}>
      <SectionHeader
        title="Our history"
        textAlign="left"
      />
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

export default History