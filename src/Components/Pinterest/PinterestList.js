import React, { useEffect, useState } from "react";
import {addToRecipeBook, getPinsFromDatabase, createPin, getAllPins, editUserPinterest, isLinked} from "./PinterestService.js";
import PinterestAccountForm from "./PinterestAccountForm.js";
import PinterestPinsForm from "./PinterestPinsForm.js";

const PinterestList = ({ isLinked, onChange, onSubmit }) => {
  // pinterest account values
  const [newPinterest, setNewPinterest] = useState({
    pinterestUsername: "",
    boardName: ""
  });

  const [newPin, setNewPin] = useState({
    pinterestUsername: "",
    gridTitle: "",
    link: "",
    imageLink: "",
    boardName: ""
  });

  const [recipePin, setRecipePin] = useState({
    pinterestUsername: "",
    gridTitle: "",
    link: "",
    imageLink: ""
  });

  // Variables in the state to hold data
  const [pins, setPins] = useState([]);
  const [databasePins, setDatabasePins] = useState([]);
    // Flags in the state to watch for add/remove updates
  const [getPins, setGetPins] = useState(false);
  const [add, setAdd] = useState(false);
  const [addToRecipe, setAddToRecipe] = useState(false);


  // link pinterest
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

  // get pins from the scraper after button press
  useEffect(() => {
    if(getPins){
      console.log("in use effect")
      getAllPins().then((results) => {
        setPins(results);
        console.log("after getting pins");
        setGetPins(false);
      });
    }
  }, [getPins, pins]);

  // get pins from database automatically
  useEffect(() => {
    getPinsFromDatabase().then((results) => {
      setDatabasePins(results);
    });
  }, [databasePins]);

  // Submit button for linking pinterest account
  const onClickHandler = (e) => {
    e.preventDefault();
    setAdd(true);
  };

  // // Handler to track changes for linking pinterest account
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

    // Handler to get pins from the scraper on button press
    const onLoadClickHandler = (e) => {
      e.preventDefault();
      console.log("Loading pins")
      setGetPins(true);
    };

    // add to recipe book button handler
    // button determined by id (index)
    const onRecipeClickHandler = (e) => {
      e.preventDefault();
      console.log("Add pin to recipe book")
   
      addToRecipeBook(e.target.name).then((pinAddedToRecipeBook) => {
        if (pinAddedToRecipeBook) {
          alert(`Successfully added pin to Recipe Book!`);
        }
      });
    };

    // generates masonry formatted output of pins 
    const formattedPins = databasePins.map(function (databasePin, index) {
      return <div><a href={databasePin.get("link")} target="_blank"><div className="masonry-item" key={databasePin.id}>
        <img src={databasePin.get("imageLink")} />
        <blockquote className = "masonry-title">{databasePin.get("gridTitle")}</blockquote>
        <button id = {index} name = {databasePin.get("gridTitle")} className="button" onClick = {onRecipeClickHandler} type="submit">Add to Recipe Book</button>
      </div></a></div>;
    });



  // If user has not already linked account, render pinterest account form, else render pin layout with load pins button
  return (
    <div>
    {isLinked ?
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

        <div className="masonry-container">
          {formattedPins}
        </div>
        <br />
        <div>
        <PinterestPinsForm
          onLoadClick={onLoadClickHandler}
        />
        </div>
        
      </div> 
      }
      </div>
  );
};

export default PinterestList;
