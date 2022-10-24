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
export const createItem = (itemName, Quantity) => {
  console.log("Creating: ", itemName);
  const Item = Parse.Object.extend("Groceries");
  const item = new Item();
  // using setter to UPDATE the object
  item.set("item_name", itemName);
  item.set("quantity", Quantity);
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

// Create operation for meals
export const createMeals = (mealName, servings, recipe) => {
  console.log("Creating: ", mealName);
  const Item = Parse.Object.extend("Meals");
  const item = new Item();
  // using setter to UPDATE the object
  item.set("mealName", mealName);
  item.set("servings", servings);
  item.set("recipe", recipe)
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
export const createDate = (date, meal) => {
  console.log("Creating: ", date);
  const Item = Parse.Object.extend("Calendar");
  const item = new Item();
  // using setter to UPDATE the object
  item.set("date", date);
  item.set("meal", meal);
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
export const createUser = (username, email, password) => {
  console.log("Creating: ", username);
  const Item = Parse.Object.extend("Users");
  const item = new Item();
  // using setter to UPDATE the object
  item.set("userame", username);
  item.set("email", email);
  item.set("password", password)
  return item.save().then((result) => {
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
