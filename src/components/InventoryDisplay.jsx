import ItemCard from "./ItemCard";
import ItemAction from "./ItemAction";
import "./InventoryDisplay.css" ;

function InventoryDisplay({ inventory, onDeleteItem }) {
    return (
        <div className="inventory-display">
            <h2>Inventory</h2>
            {inventory.map(item => (
                <div key={item.id} className="item-container">
                    <ItemCard 
                        name={item.name} 
                        quantity={item.quantity} 
                        purpose={item.purpose} 
                    />
                    <ItemAction 
                        item={item} 
                        onDeleteItem={onDeleteItem} 
                    />
                </div>
            ))}
        </div>
    );
}

export default InventoryDisplay;
