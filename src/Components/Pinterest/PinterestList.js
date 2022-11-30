import React, { useEffect, useState } from "react";
import {getAllPins, editUserPinterest, notLinked} from "./PinterestService.js";
import PinterestAccountForm from "./PinterestAccountForm.js";
import PinterestPinsForm from "./PinterestPinsForm.js";

const PinterestList = ({ notLinked, onChange, onSubmit }) => {
  const [newPinterest, setNewPinterest] = useState({
    pinterestUsername: "",
    boardName: ""
  });

  // Variables in the state to hold data
  const [pins, setPins] = useState([]);
  // Flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);

  useEffect(() => {
    if (newPinterest && add) {
      editUserPinterest(newPinterest).then((pinterestUpdated) => {
        if (pinterestUpdated) {
          alert(`Successfully linked to Pinterest!`);
        }
        setAdd(false);
      });
    }
  }, [newPinterest, add]);

  useEffect(() => {
      if(pins) {
        console.log("working on it")
        getAllPins().then((pinsFound) => {
          if(pinsFound) {
            alert(`Loading pins now!`);
            console.log(pinsFound);
          }
        setPins(false);
      });
    }
  }, [pins]);


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

    // Handler to handle event passed from child submit button
    const onLoadClickHandler = (e) => {
      e.preventDefault();
      console.log("Loading pins")
      setPins(true);
    };


  return (
    <div>
    {notLinked ?
      <div>
        <PinterestAccountForm
          onClick={onClickHandler}
          onChange={onChangeHandler}
          pinterest={newPinterest}
        />
      </div>
    : 
      <div>
        <hr />
        <h3>Recent Pins</h3>
        <div>
        <PinterestPinsForm
          onLoadClick={onLoadClickHandler}
        />
        </div>
        {/* {pins.length > 0 && (
          <ul>
            {pins.map((pin) => (
              <li key={pin.id}>
                {pin.grid_title}
              </li>
            ))}
          </ul>
        )} */}
      </div>}
      </div>
  );
};

export default PinterestList;
