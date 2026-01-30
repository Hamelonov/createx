import './Services.scss'
import Section from "@/components/layout/Section/index.js";
import Button from "@/components/ui/Button/index.js";
import {Link} from "react-router-dom";

const Services = (props) => {
  const {
    className = '',
    services = []
  } = props

  return (
    <Section
      id="services"
      className={`services ${className}`}
    >
      <div className="services__list">
        {services.map(({image, title, text, link}, index) => (
          <article key={index} className="services__service service">
            <div className="service__image-wrapper">
              <img
                className="service__image"
                src={image}
                alt=""
                width="575"
                height="420"
                loading="lazy"
              />
            </div>
            <div className="service__body">
              <h2 className="service__title">{title}</h2>
              <p className="service__text">{text}</p>
              <Link to={link.to}>
                <Button
                  className="service__link"
                  altStyle
                >
                  {link.name}
                </Button>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default Services