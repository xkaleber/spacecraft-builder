import './ItemCard.css';

function ItemCard({ name, quantity, purpose }) {
  return (
    <div className="card">
      <h2 className="title">{name}</h2>

      <div className="details">
        <p className="quantity">Quantity: {quantity}</p>
        <span className="purpose">Purpose: {purpose}</span>
      </div>
    </div>
  );
}

export default ItemCard;
