import React, { useEffect, useState } from "react";
import {getAllPins, editUserPinterest} from "./PinterestService.js";
import PinterestForm from "./PinterestForm.js";

const PinterestList = () => {
  const [newPinterest, setNewPinterest] = useState({
    pinterestUsername: "",
    boardName: ""
  });

  // Variables in the state to hold data
  const [pins, setPins] = useState([]);
  // Flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);

  // UseEffect to run when the page loads to
  // obtain async data and render
  useEffect(() => {
    getAllPins().then((results) => {
      console.log("items: ", results);
      setPins(results);
    });
  }, [items]);

  useEffect(() => {
    if (newPinterest && add) {
      editUserPinterest(newPinterest).then((pinterestUpdated) => {
        if (pinterestUpdated) {
          alert(`${pinterestUpdated.get("pinterestUsername")} successfully linked to Pinterest!`);
        }
        setAdd(false);
      });
    }
  }, [newPinterest, add]);


  // Handler to handle event passed from child submit button
  const onClickHandler = (e) => {
    e.preventDefault();
    // Trigger add flag to create item and
    // re-render list with new item
    setAdd(true);
  };

  // // Handler to track changes to the child input text
  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value: newValue } = e.target;
    console.log(newValue);

    setNewPinterest({
      ...newPinterest,
      [name]: newValue
    });
    console.log("onChange:", newValue);
  };

  // useEffect(() => {
  //   getAllPins().then((pins) => {
  //     setPins(pins);
  //   });
  // }, []);

  return (
    <div>
      <PinterestForm
        onClick={onClickHandler}
        onChange={onChangeHandler}
      />
      <hr />
      <p3>Pins found on your board</p3>
      {/* {pins.length > 0 && (
        <ul>
          {pins.map((pin) => (
            <li key={pin.id}>
              {pin.grid_title}
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
};

export default PinterestList;