import './Ceo.scss'
import Section from "@/components/layout/Section/index.js";

const Ceo = () => {
  return (
    <Section
      id="ceo"
      className="ceo"
    >
      <article className="ceo__article">
        <div className="ceo__image-wrapper">
          <img
            className="ceo__image"
            src="images/ceo/man.jpg"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="ceo__content">
          <div className="ceo__text">
            <p>
              Dapibus nec vitae ante mattis. Aliquam phasellus ac dui augue in. Sed aliquet in egestas hac at proin sed quam. Etiam aliquet sagittis non, massa cum pulvinar. Et in leo, tempus purus vestibulum ut blandit et mi. Odio massa purus vel praesent arcu enim elit felis viverra.
            </p>
            <p>
              Magna aliquam interdum mattis ipsum arcu. Elit odio elit viverra quis metus amet eleifend amet. Vet suspendisse faucibus tempor ipsum integer.
            </p>
          </div>
          <div className="ceo__author">
            <div className="ceo__author-info">
              <p className="ceo__name">Courtney Alexander</p>
              <p className="ceo__post">CEO - Createx Construction Bureau</p>
            </div>
            <img
              className="ceo__sign"
              src="images/ceo/sign.svg"
              alt=""
              width="100"
              height="68"
              loading="lazy"
            />
          </div>
        </div>
      </article>
    </Section>
  )
}

export default Ceo