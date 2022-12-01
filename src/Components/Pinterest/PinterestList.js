import React, { useEffect, useState } from "react";
import {getAllPins, editUserPinterest, notLinked} from "./PinterestService.js";
import PinterestAccountForm from "./PinterestAccountForm.js";
import PinterestPinsForm from "./PinterestPinsForm.js";

const PinterestList = ({ notLinked, onChange, onSubmit }) => {
  const [newPinterest, setNewPinterest] = useState({
    pinterestUsername: "",
    boardName: ""
  });

  const [newPin, setNewPin] = useState({
    pinterestUsername: "",
    gridTitle: "",
    link: "",
    imageLink: ""
  });

  // Variables in the state to hold data
  const [pins, setPins] = useState([]);
  const [getPins, setGetPins] = useState(false);
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
    if(getPins){
      getAllPins().then((results) => {
        console.log("after getting pins")
        console.log("pins: ", results);
        setPins(results);
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
      setGetPins(true);
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
        {/* <div class="masonry-container">
          {pins.length > 0 && (
            {pins.map((pin) => (
              <div class="masonry-item">
                <a href=pin["link"]><img src=pin["imageLink"] /></a>
                <span>pin["gridTitle"]</span>
              </div>
            ))}
          )}
        </div> */}
      </div>}
      </div>
  );
};

export default PinterestList;
