import React, { useEffect, useState } from "react";
import {
  getAllMeals,
  createMeal,
  removeMeal
} from "../../Common/Services/LearnServices";
import RequestsForm from "./RequestsForm";

/* STATEFUL PARENT COMPONENT */
const RequestsList = () => {
  const [newMeal, setNewMeal] = useState({
    mealName: "",
    servings: "",
    recipe: undefined
  });

  // Variables in the state to hold data
  const [meals, setMeals] = useState([]);
  // Flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);
  const [remove, setRemove] = useState("");

  // UseEffect to run when the page loads to
  // obtain async data and render
  useEffect(() => {
    getAllMeals().then((results) => {
      console.log("meals: ", results);
      setMeals(results);
    });
  }, [meals]);

  useEffect(() => {
    console.log("in useEffect");
    if (newMeal && add) {
      console.log("about to create meal");
      createMeal(newMeal).then((mealCreated) => {
        if (mealCreated) {
          alert(`${mealCreated.get("mealName")} successfully added to list!`);
        }
        // TODO: redirect user to main app
        setAdd(false);
      });
    }
  }, [newMeal, add]);

  // Check if remove state variable is holding an ID
  //   if (remove.length > 0) {
  //     //Filter the old meals list to take out selected meal
  //     const newMeals = meals.filter((meal) => meal.id !== remove);
  //     setMeals(newMeals);

  //     removeMeal(remove).then(() => {
  //       console.log("Removed meal with ID: ", remove);
  //     });
  //     // Reset remove state variable
  //     setRemove("");
  //   }
  // }, [add, remove]);

  // Handler to handle event passed from child submit button
  const onClickHandler = (e) => {
    e.preventDefault();
    // Trigger add flag to create meal and
    // re-render list with new meal
    setAdd(true);
  };

  // Handler to track changes to the child input text
  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value: newValue } = e.target;
    console.log(newValue);

    setNewMeal({
      ...newMeal,
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
      <RequestsForm
        onClick={onClickHandler}
        onChange={onChangeHandler}
        meal={newMeal}
        // onQuantityChange={onChangeHandler}
      />
      <div>
        <hr />
        <h3>Requests List</h3>
        {meals.length > 0 && (
          <ul>
            {meals.map((meal) => (
              <li key={meal.id}>
                {meal.get("mealName")} (servings: {meal.get("servings")}),{" "}
                {meal.get("recipe")}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RequestsList;