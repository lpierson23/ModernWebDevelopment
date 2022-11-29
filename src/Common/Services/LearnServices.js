import Parse from "parse";
/* SERVICE FOR PARSE SERVER OPERATIONS */

// Read operation for groceries
export const getAllGroceries = () => {
  const Item = Parse.Object.extend("Groceries");
  const User = Parse.User.current();
  const query = new Parse.Query(Item);
  query.equalTo("household", User.get("household"))
  return query.find().then((results) => {
    // returns array of item objects
    console.log("results: ", results);
    return results;
  });
};

// Create operation for groceries
export const createItem = (newItem) => {
  console.log("Creating: ", newItem);
  const User = Parse.User.current();
  const Item = Parse.Object.extend("Groceries");
  const item = new Item();
  // using setter to UPDATE the object
  item.set("itemName", newItem.itemName);
  item.set("quantity", newItem.quantity);
  item.set("household", User.get("household"))
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
  const User = Parse.User.current();
  const query = new Parse.Query(Item);
  query.equalTo("household", User.get("household"))
  return query.find().then((results) => {
    // returns array of item objects
    console.log("results: ", results);
    return results;
  });
};

// Create operation for meals
export const createMeal = (newMeal) => {
  console.log("Creating: ", newMeal.mealName);
  const User = Parse.User.current();
  const Item = Parse.Object.extend("Meals");
  const item = new Item();
  // using setter to UPDATE the object
  item.set("mealName", newMeal.mealName);
  item.set("servings", Number(newMeal.servings));
  item.set("recipe", newMeal.recipe)
  item.set("household", User.get("household"))
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
  const User = Parse.User.current();
  const query = new Parse.Query(Item);
  query.equalTo("household", User.get("household"))
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
  user.set("username", newUser.username);
  user.set("email", newUser.email);
  user.set("password", newUser.password);
  user.set("pinterestUsername", newUser.pinterestUsername);
  user.set("boardName", newUser.boardName);
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
