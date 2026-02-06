import styles from './Slider.module.scss'
import clsx from "clsx";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import ProjectCard from "@/components/ui/ProjectCard";
import {useRef} from "react";

const Slider = (props) => {
  const {
    className,
    gap = 30,
    slides = [],
    alt,
  } = props

  const prevElRef = useRef(null);
  const nextElRef = useRef(null);

  return (
    <div className={clsx(styles.slider, className)}>
      <div className={styles.navigation}>
        <button
          ref={prevElRef}
          className={styles.prevEl}
        >
          <svg
            width="18"
            height="11"
            viewBox="0 0 18 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.20711 10.7071C5.81658 11.0976 5.18342 11.0976 4.79289 10.7071L0.292892 6.20711C-0.0976315 5.81658 -0.0976315 5.18342 0.292892 4.79289L4.79289 0.292893C5.18342 -0.0976315 5.81658 -0.0976315 6.20711 0.292893C6.59763 0.683417 6.59763 1.31658 6.20711 1.70711L3.41421 4.5L17 4.5C17.5523 4.5 18 4.94772 18 5.5C18 6.05228 17.5523 6.5 17 6.5L3.41421 6.5L6.20711 9.29289C6.59763 9.68342 6.59763 10.3166 6.20711 10.7071Z"
              fill="#424551"
            />
          </svg>
        </button>
        <button
          ref={nextElRef}
          className={styles.nextEl}
        >
          <svg
            width="18"
            height="11"
            viewBox="0 0 18 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.7929 0.292893C12.1834 -0.0976311 12.8166 -0.0976311 13.2071 0.292893L17.7071 4.79289C18.0976 5.18342 18.0976 5.81658 17.7071 6.20711L13.2071 10.7071C12.8166 11.0976 12.1834 11.0976 11.7929 10.7071C11.4024 10.3166 11.4024 9.68342 11.7929 9.29289L14.5858 6.5H1C0.447715 6.5 0 6.05228 0 5.5C0 4.94772 0.447715 4.5 1 4.5H14.5858L11.7929 1.70711C11.4024 1.31658 11.4024 0.683417 11.7929 0.292893Z"
              fill="#424551"
            />
          </svg>
        </button>
      </div>
      {alt ? (
        <Swiper
          className={styles.swiper}
          modules={[Navigation]}
          navigation={{
            prevEl: prevElRef.current,
            nextEl: nextElRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevElRef.current;
            swiper.params.navigation.nextEl = nextElRef.current;
          }}
        >
          {slides.map(({image}) => (
            <SwiperSlide>
              <img
                className={styles.slideImage}
                src={image}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Swiper
          className={styles.swiper}
          modules={[Navigation]}
          navigation={{
            prevEl: prevElRef.current,
            nextEl: nextElRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevElRef.current;
            swiper.params.navigation.nextEl = nextElRef.current;
          }}
          slidesPerView={3}
          spaceBetween={gap}
          breakpoints={{
            320: {
              slidesPerView: 1
            },
            767: {
              slidesPerView: 2,
              spaceBetween: gap / 2,
            },
            1023: {
              slidesPerView: 3
            },
          }}
        >
          {slides.map(({image, title, category, link}) => (
            <SwiperSlide
              className={styles.slide}
            >
              <ProjectCard
                image={image}
                title={title}
                category={category}
                link={link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  )
}

export default Slider