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
  }, [items]);

  useEffect(() => {
    if (newItem && add) {
      createItem(newItem).then((itemCreated) => {
        if (itemCreated) {
          alert(`${itemCreated.get("itemName")} successfully added to list!`);
        }
        // TODO: redirect user to main app
        setAdd(false);
      });
    }
  }, [newItem, add]);

  // Check if remove state variable is holding an ID
  //   if (remove.length > 0) {
  //     //Filter the old items list to take out selected item
  //     const newItems = items.filter((item) => item.id !== remove);
  //     setItems(newItems);

  //     removeItem(remove).then(() => {
  //       console.log("Removed item with ID: ", remove);
  //     });
  //     // Reset remove state variable
  //     setRemove("");
  //   }
  // }, [add, remove]);

  // Handler to handle event passed from child submit button
  const onClickHandler = (e) => {
    e.preventDefault();
    // Trigger add flag to create item and
    // re-render list with new item
    setAdd(true);
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

  // Handler to track changes to the child input text
  // const onQuantityChangeHandler = (e) => {
  //   e.preventDefault();
  //   console.log("onQuantityChange:", e.target.value);
  //   setQuantity(e.target.value);
  // };

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
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.get("itemName")} ({item.get("quantity")})
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ShoppingList;
