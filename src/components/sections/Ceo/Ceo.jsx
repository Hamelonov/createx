import './Ceo.scss'

const Ceo = () => {
  return (
    <article className="ceo-article">
      <div className="ceo-article__image-wrapper">
        <img
          className="ceo-article__image"
          src="images/ceo/man.jpg"
          alt=""
          loading="lazy"
        />
      </div>
      <div className="ceo-article__content">
        <div className="ceo-article__text">
          <p>
            Dapibus nec vitae ante mattis. Aliquam phasellus ac dui augue in. Sed aliquet in egestas hac at proin sed quam. Etiam aliquet sagittis non, massa cum pulvinar. Et in leo, tempus purus vestibulum ut blandit et mi. Odio massa purus vel praesent arcu enim elit felis viverra.
          </p>
          <p>
            Magna aliquam interdum mattis ipsum arcu. Elit odio elit viverra quis metus amet eleifend amet. Vet suspendisse faucibus tempor ipsum integer.
          </p>
        </div>
        <div className="ceo-article__author">
          <div className="ceo-article__author-info">
            <p className="ceo-article__name">Courtney Alexander</p>
            <p className="ceo-article__post">CEO - Createx Construction Bureau</p>
          </div>
          <img
            className="ceo-article__sign"
            src="images/ceo/sign.svg"
            alt=""
            width="100"
            height="68"
            loading="lazy"
          />
        </div>
      </div>
    </article>
  )
}

export default Ceo