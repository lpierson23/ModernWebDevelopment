import React, { useEffect, useState } from "react";
import {addToRecipeBook, getPinsFromDatabase, createPin, getAllPins, editUserPinterest, isLinked} from "./PinterestService.js";
import PinterestAccountForm from "./PinterestAccountForm.js";
import PinterestPinsForm from "./PinterestPinsForm.js";

const PinterestList = ({ isLinked, onChange, onSubmit }) => {
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
  const [getPins, setGetPins] = useState(false);
  // Flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);
  const [addToRecipe, setAddToRecipe] = useState(false);
  // const [loading, setLoading] = useState(false)


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
        console.log("after getting pins");
        setGetPins(false);
      });
    }
    // setLoading(false)
  }, [getPins, pins]);

  useEffect(() => {
    getPinsFromDatabase().then((results) => {
      setDatabasePins(results);
    });
  }, [databasePins]);

  // Handler to handle event passed from child submit button
  const onClickHandler = (e) => {
    e.preventDefault();
    // Trigger add flag to create item and
    // re-render list with new item
    setAdd(true);
    // setLoading(true)
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

    const buttonText = databasePins.map(function (databasePin, index) {
      return "Add to Recipe Book"
    });

    const onRecipeClickHandler = (e) => {
      e.preventDefault();
      console.log("Add pin to recipe book")
      var buttonIndex = e.target.id
      console.log(e.target.name)
      console.log(buttonIndex)
      console.log(buttonText[buttonIndex])
      buttonText[buttonIndex] = 'Added to Recipe Book';
      console.log(buttonText[buttonIndex])

      addToRecipeBook(e.target.name).then((pinAddedToRecipeBook) => {
        if (pinAddedToRecipeBook) {
          alert(`Successfully added pin to Recipe Book!`);
        }
      });
    };

    const formattedPins = databasePins.map(function (databasePin, index) {
      return <div><a href={databasePin.get("link")} target="_blank"><div className="masonry-item" key={databasePin.id}>
        <img src={databasePin.get("imageLink")} />
        <blockquote className = "masonry-title">{databasePin.get("gridTitle")}</blockquote>
        <button id = {index} name = {databasePin.get("gridTitle")} className="button" onClick = {onRecipeClickHandler} type="submit">{buttonText[index]}</button>
      </div></a></div>;
    });



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
