import styles from './SliderFullScreen.module.scss'
import clsx from "clsx"
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination} from 'swiper/modules'
import Button from "@/components/atoms/Button"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {useRef} from "react";

const SliderFullScreen = (props) => {
  const {
    slides = [
      {
        id: 1,
        image: 'images/slider/1.jpg',
        title: `<p>CREATE<span>X</span></p>CONSTRUCTION`,
        subtitle: 'Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis.',
        link: {
          name: 'Learn more about us',
          href: '#'
        },
      },
      {
        id: 2,
        image: 'images/slider/2.jpg',
        title: `<p>CREATE<span>X</span></p>CONSTRUCTION`,
        subtitle: 'Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis.',
        link: {
          name: 'Learn more about us',
          href: '#'
        },
      },
      {
        id: 3,
        image: 'images/slider/3.jpg',
        title: `<p>CREATE<span>X</span></p>CONSTRUCTION`,
        subtitle: 'Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis.',
        link: {
          name: 'Learn more about us',
          href: '#'
        },
      },
    ]
  } = props

  const prevEl = useRef(null);
  const nextEl = useRef(null);

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation={{
        nextEl: nextEl.current,
        prevEl: prevEl.current,
      }}
      onBeforeInit={(swiper) => {
        swiper.params.navigation.prevEl = prevEl.current;
        swiper.params.navigation.nextEl = nextEl.current;
      }}
      pagination={{
        clickable: true,
        el: `.${styles.pagination}`,
        renderBullet: (index, className) => {
          // Форматируем число: 01, 02 и т.д.
          const tabNumber = (index + 1).toString().padStart(2, '0');
          return `
            <div class="${className}">
              <span class="${styles.number}">${tabNumber}</span>
              <span class="${styles.line}"></span>
            </div>
          `
        },
      }}
      slidesPerView={1}
      className={styles.slider}
    >
      {slides.map(({id, image, title, subtitle, link}) => (
          <SwiperSlide key={id} className={styles.slide}>
            <img
              className={styles.bgImage}
              src={image}
              alt=""
              width="1920"
              height="988"
              loading="lazy"
            />
            <div className={clsx(styles.body, 'container')}>
              <h1
                className={styles.title}
                dangerouslySetInnerHTML={{__html: title}}
              />
              <p className={styles.subtitle}>
                {subtitle}
              </p>
              <Button
                className={styles.link}
                href={link.href}
                altStyle
              >
                {link.name}
              </Button>
            </div>
          </SwiperSlide>
      ))}
      <div className={styles.navigation}>
        <button ref={prevEl} className={styles.prevEl}>
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
        <button ref={nextEl} className={styles.nextEl}>
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
      <div className={clsx(styles.paginationWrapper, 'container')}>
        <div className={styles.pagination}></div>
      </div>
    </Swiper>
  )
}

export default SliderFullScreen