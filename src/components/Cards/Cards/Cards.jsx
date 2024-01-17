import Card from "../Card";
import './cards.css';

export default function Cards({ cardImg }) {
    return (
      <div className="cards">
        <Card>
          <div className="card__header">
            <img src={cardImg} className="card__img" alt="..."/>
          </div>
          <div className="card__body">
            <h5 className="card__title">Card title</h5>
            <p className="card__text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button href="#" className="card__btn">Go somewhere</button>
          </div>
        </Card>
  
        <Card>
          <div className="card__body">
            <h5 className="card__title">Card title</h5>
            <p className="card__text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button href="#" className="card__btn">Go somewhere</button>
          </div>
        </Card>
  
        <Card>
          <div className="card__header">
            <img src={cardImg} className="card__img" alt="..."/>
          </div>
          <div className="card__body">
            <h5 className="card__title">Card title</h5>
            <h6 className="card__subtitle">Card subtitle</h6>
            <p className="card__text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="card__link">Card link</a>
            <a href="#" className="card__link">Another link</a>
          </div>
        </Card>
      </div>
    );
  }