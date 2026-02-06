import './Slider.scss'
import clsx from "clsx";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import Button from "@/components/ui/Button/index.js";
import {Link} from "react-router-dom";

const Slider = (props) => {
  const {
    className,
    gap = 30,
    slides = [],
    alt,
  } = props

  return (
    <div className={clsx('slider', className)}>
      <div className="slider__navigation">
        <button className="slider__navigation-prev">
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
        <button className="slider__navigation-next">
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
          className="slider__swiper"
          modules={[Navigation]}
          navigation={{
            prevEl: '.slider__navigation-prev',
            nextEl: '.slider__navigation-next',
          }}
        >
          {slides.map(({image}) => (
            <SwiperSlide
              className="slider__slide slider__slide--alt"
            >
              <article className="slide">
                <div className="slide__image">
                  <img
                    src={image}
                    alt=""
                  />
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Swiper
          className="slider__swiper"
          modules={[Navigation]}
          navigation={{
            prevEl: '.slider__navigation-prev',
            nextEl: '.slider__navigation-next',
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
          {slides.map(({image, title, subtitle, link}) => (
            <SwiperSlide
              className="slider__slide"
            >
              <article className="slide">
                <div className="slide__image">
                  <img
                    src={image}
                    alt=""
                  />
                </div>
                <div className="slide__content">
                  <h3 className="slide__title">{title}</h3>
                  <p className="slide__category">{subtitle}</p>
                  {link && (
                    <div className="slide__hidden">
                      <Link to={link.to}>
                        <Button
                          altStyle
                        >
                          {link.name}
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  )
}

export default Slider