import { useState } from "react";

import "./SpacecraftBuilder.css";

import ItemForm from "./ItemForm.jsx";
import InventoryDisplay from "./InventoryDisplay.jsx";

function SpacecraftBuilder() {
  const [inventory, setInventory] = useState([]);

  function addItem(item) {
    setInventory([...inventory, item]);
  }

  function deleteItem(itemToDelete) {
    setInventory(inventory.filter((item) => item !== itemToDelete));
  }

  return (
    <div className="spacecraft-builder">
      <h1>Spacecraft Builder Inventory</h1>
      <ItemForm onAddItem={addItem} />
      <InventoryDisplay 
        inventory={inventory} 
        onDeleteItem={deleteItem} 
      />
    </div>
  );
}

export default SpacecraftBuilder;
