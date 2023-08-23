import './Card.css';
import CardBanner from '../CardBanner/CardBanner';

const Card = ({ card, onClick }) => {

  return (
    <div className="card-container" onClick={onClick}>
      <div className="banner">
        <CardBanner category={card.category} />
      </div>
      <h1 className="card-title">{card.title}</h1>
      <h5 className="card-description">{card.description}</h5>
    </div>
  );
};

export default Card;