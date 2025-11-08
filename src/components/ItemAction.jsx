import './ItemAction.css';

function ItemAction({ item, onDeleteItem}) { // Accept onDeleteItem as a prop
  return (
    <div className="item-action">
      <button 
        className="delete-button" 
        onClick={() => onDeleteItem(item)} // Call onDeleteItem with the item to delete
      >
        Delete
      </button>
    </div>
  );
}

export default ItemAction;
