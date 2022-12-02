import React, { useEffect, useState } from "react";
import {getPinsFromDatabase, createPin, getAllPins, editUserPinterest, notLinked} from "./PinterestService.js";
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
  const [databasePins, setDatabasePins] = useState([]);
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
      console.log("in use effect")
      getAllPins().then((results) => {
        setPins(results);
        console.log("after getting pins")
        console.log("pins: ", results);
        setGetPins(false);
      });
    }
  }, [getPins, pins]);

  useEffect(() => {
    getPinsFromDatabase().then((results) => {
      console.log("items: ", results);
      setDatabasePins(results);
    });
  }, [databasePins]);


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

    const formattedPins = databasePins.map(function (databasePin) {
      return <a href={databasePin.get("link")} target="_blank"><div className="masonry-item" key={databasePin.id}>
        <img src={databasePin.get("imageLink")} />
        <blockquote className = "masonry-title">{databasePin.get("gridTitle")}</blockquote>
      </div></a>;
    });

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

        <br />

        <div class="masonry-container">
          {formattedPins}
        </div>
        <br />
        <div>
        <PinterestPinsForm
          onLoadClick={onLoadClickHandler}
        />
        </div>
        
      </div>}
      </div>
  );
};

export default PinterestList;
