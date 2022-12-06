import { User } from "parse";
import React, { useEffect, useState } from "react";
import {
  getAllGroceries,
  createItem,
  removeItem
} from "../../Common/Services/LearnServices";
import ShoppingForm from "./ShoppingForm";

/* STATEFUL PARENT COMPONENT */
const ShoppingList = () => {
  const [newItem, setNewItem] = useState({
    itemName: "",
    quantity: "1"
  });

  // Variables in the state to hold data
  const [items, setItems] = useState([]);
  // Flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);
  const [remove, setRemove] = useState("");

  // UseEffect to run when the page loads to
  // obtain async data and render
  useEffect(() => {
    getAllGroceries().then((results) => {
      console.log("items: ", results);
      setItems(results);
    });
  }, []);

  useEffect(() => {
    if (newItem && add) {
      createItem(newItem).then((itemCreated) => {
        if (itemCreated) {
          alert(`${itemCreated.get("itemName")} successfully added to list!`);
        }
        setAdd(false);
      });
    }
  }, [newItem, add]);

  // Handler to handle event passed from child submit button
  const onClickHandler = (e) => {
    e.preventDefault();
    // Trigger add flag to create item and
    // re-render list with new item
    if (newItem.itemName === ""){
      alert("Submission must include a grocery name");
    } else {
      setAdd(true);
      window.location.reload(false);
    }
  };

  // Handler to track changes to the child input text
  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value: newValue } = e.target;
    console.log(newValue);

    setNewItem({
      ...newItem,
      [name]: newValue
    });
    console.log("onChange:", newValue);
  };

  return (
    <div>
      <ShoppingForm
        onClick={onClickHandler}
        onChange={onChangeHandler}
        item={newItem}
        // onQuantityChange={onChangeHandler}
      />
      <div>
        <hr />
        <h3>Shopping List</h3>
        {/* prints all items from Groceries database */}
        {items.length > 0 && (
          <ul id="shoppingList">
            {items.map((item) => (
              <li key={item.id}> 
              {item.get("itemName")} 
              ({item.get("quantity")}) </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ShoppingList;
