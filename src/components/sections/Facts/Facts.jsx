import './Facts.scss'
import Section from "@/components/layout/Section/index.js";

const Facts = (props) => {
  const {
    className = '',
    facts = [],
  } = props

  return (
    <Section
      id='facts'
      className={`facts ${className}`}
    >
      <ul className="facts__list">
        {facts.map(({id, image, title, subtitle}) => (
          <li key={id} className="facts__item facts-card">
            <div className="facts-card__image-wrapper">
              <img
                className="facts-card__image"
                src={image}
                alt=""
                width="48"
                height="48"
                loading="lazy"
              />
            </div>
            <h2 className="facts-card__title">{title}</h2>
            <p className="facts-card__subtitle">{subtitle}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Facts