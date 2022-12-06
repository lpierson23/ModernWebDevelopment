import Parse from "parse";
/* SERVICE FOR PARSE SERVER OPERATIONS */

// Read operation for groceries
export const getAllGroceries = () => {
  const Item = Parse.Object.extend("Groceries");
  const query = new Parse.Query(Item);
  return query.find().then((results) => {
    // returns array of item objects
    console.log("results: ", results);
    return results;
  });
};

// Create operation for groceries
export const createItem = (newItem) => {
  console.log("Creating: ", newItem);
  const Item = Parse.Object.extend("Groceries");
  const item = new Item();
  // using setter to UPDATE the object
  item.set("itemName", newItem.itemName);
  item.set("quantity", newItem.quantity);
  return item.save().then((result) => {
    // returns new Lesson object
    return result;
  });
};

// Delete operation for groceries
export const removeItem = (id) => {
  const Item = Parse.Object.extend("Groceries");
  const query = new Parse.Query(Item);
  return query.get(id).then((item) => {
    item.destroy();
  });
};

// Read operation for meals
export const getAllMeals = () => {
  const Item = Parse.Object.extend("Meals");
  const query = new Parse.Query(Item);
  return query.find().then((results) => {
    // returns array of item objects
    console.log("results: ", results);
    return results;
  });
};

export const getMealById = (id) => {
  const Item = Parse.Object.extend("Meals");
  const query = new Parse.Query(Item);
  return query.get(id).then((object) => {
    // returns array of item objects
    console.log("meal: ", object);
    return object;
  });
};

// Create operation for meals
export const createMeal = (newMeal) => {
  console.log("Creating: ", newMeal.mealName);
  const Item = Parse.Object.extend("Meals");
  const item = new Item();
  // using setter to UPDATE the object
  item.set("mealName", newMeal.mealName);
  item.set("servings", Number(newMeal.servings));
  item.set("url", newMeal.recipe)
  return item.save().then((result) => {
    // returns new Lesson object
    return result;
  });
};

// Delete operation for meals
export const removeMeals = (id) => {
  const Item = Parse.Object.extend("Meals");
  const query = new Parse.Query(Item);
  return query.get(id).then((item) => {
    item.destroy();
  });
};

// Read operation for calendar
export const getFullCalendar = () => {
  const Item = Parse.Object.extend("Calendar");
  const query = new Parse.Query(Item);
  return query.find().then((results) => {
    // returns array of item objects
    console.log("results: ", results);
    return results;
  });
};

// Secondary read operation for calendar - returns data for the current week
export const getCurrentWeek = () => {
  const today = newDate();
  const dayOfWeek = today.getDay();
  const startDate = newDate(today.getDate() - dayOfWeek);
  const endDate = newDate(today.getDate() + (6 - dayOfWeek));
  const Item = Parse.Object.extend("Calendar");
  const query = new Parse.Query(Item);
  query.greaterThanOrEqualTo('date', startDate);
  query.lessThanOrEqualTo('date', endDate);
  return query.find().then((results) => {
    // returns array of item objects
    console.log("results: ", results);
    return results;
  });
};

// Create operation for calendar
export const createDate = (newDate) => {
  console.log("Creating: ", newDate.date);
  const Item = Parse.Object.extend("Calendar");
  const item = new Item();
  // using setter to UPDATE the object
  item.set("date", newDate.date);
  item.set("meal", newDate.meal);
  return item.save().then((result) => {
    // returns new Lesson object
    return result;
  });
};

// Delete operation for calendar
export const removeCalendar = (id) => {
  const Item = Parse.Object.extend("Calendar");
  const query = new Parse.Query(Item);
  return query.get(id).then((item) => {
    item.destroy();
  });
};

// Read operation for users
export const getAllUsers = () => {
  const Item = Parse.Object.extend("Users");
  const query = new Parse.Query(Item);
  return query.find().then((results) => {
    // returns array of item objects
    console.log("results: ", results);
    return results;
  });
};

// Secondary read operation for users (returns one user by id)
export const getUser = (id) => {
  const Item = Parse.Object.extend("Users");
  const query = new Parse.Query(Item);
  return query.get(id).then((item) => {
    console.log("result: ", item);
    return item;
  });
};

// Create operation for users
export const createUser = (newUser) => {
  console.log("Creating: ", newUser.username);
  const user = new Parse.User();
  // using setter to UPDATE the object
  user.set("userame", newUser.username);
  user.set("email", newUser.email);
  user.set("password", newUser.password)
  return user.signUp().then((result) => {
    // returns new Lesson object
    return result;
  });
};

// Delete operation for users
export const removeUser = (id) => {
  const Item = Parse.Object.extend("Users");
  const query = new Parse.Query(Item);
  return query.get(id).then((item) => {
    item.destroy();
  });
};


// Create operation for comments
export const createComment = (newComment, mealId) => {
  console.log("Creating comment for ", mealId);
  const Item = Parse.Object.extend("Comments");
  const item = new Item();
  // using setter to UPDATE the object
  item.set("rating", newComment.rating);
  item.set("comment", newComment.comment);
  item.set("mealId", mealId)
  return item.save().then((result) => {
    // returns new Lesson object
    return result;
  });
};

// Read operation for comments
export const getAllComments = (mealId) => {
  const Item = Parse.Object.extend("Comments");
  const query = new Parse.Query(Item);
  query.equalTo('mealId', mealId);
  return query.find().then((object) => {
    // returns array of item objects
    console.log("comments: ", object);
    return object;
  });
};