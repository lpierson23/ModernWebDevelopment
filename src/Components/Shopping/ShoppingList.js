import React, { useEffect, useState } from "react";
import {
  getAllGroceries,
  createItem,
  removeItem
} from "/src/Common/Services/LearnServices";
import ShoppingForm from "./ShoppingForm";

/* STATEFUL PARENT COMPONENT */
const ShoppingList = () => {
  // Variables in the state to hold data
  const [items, setItems] = useState([]);
  //const [item, setItem] = useState([]);
  const [item_name, setItemName] = useState();
  const [quantity, setQuantity] = useState();
  // const [state, setState] = useState({
  //   item_name: "",
  //   quantity: "1"
  // });

  // UseEffect to run when the page loads to
  // obtain async data and render
  useEffect(() => {
    getAllGroceries().then((results) => {
      console.log("items: ", results);
      setItems(results);
    });
  }, []);

  // Flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);
  const [remove, setRemove] = useState("");

  // UseEffect that runs when changes
  // are made to the state variables/flags
  useEffect(() => {
    // Check for add flag and make sure name state variable is defined
    if (item_name && quantity && add) {
      // console.log("name: ", item_name);
      createItem(item_name, quantity).then((newItem) => {
        setAdd(false);
        setItems([...items, newItem]);
      });
    }

    // Check if remove state variable is holding an ID
    if (remove.length > 0) {
      //Filter the old items list to take out selected item
      const newItems = items.filter((item) => item.id !== remove);
      setItems(newItems);

      removeItem(remove).then(() => {
        console.log("Removed item with ID: ", remove);
      });
      // Reset remove state variable
      setRemove("");
    }
  }, [item_name, quantity, items, add, remove]);

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
    // const value = e.target.value;
    // setState({
    //   ...state,
    //   [e.target.name]: value
    // });

    // setItemName(e.target.value);
    // setQuantity(e.target.value);
  };

  return (
    <div>
      <ShoppingForm onClick={onClickHandler} onChange={onChangeHandler} />
      <div>
        <hr />
        <h3>Shopping List</h3>
        {items.length > 0 && (
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.get("item_name")} ({item.get("quantity")})
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ShoppingList;
