import Parse from "parse";
/* SERVICE FOR PARSE SERVER OPERATIONS */

// READ operation - get all items in Parse class item
export const getAllGroceries = () => {
  const Item = Parse.Object.extend("Groceries");
  const query = new Parse.Query(Item);
  return query.find().then((results) => {
    // returns array of item objects
    console.log("results: ", results);
    return results;
  });
};

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

// DELETE operation - remove lesson by ID
export const removeItem = (id) => {
  const Item = Parse.Object.extend("Groceries");
  const query = new Parse.Query(Item);
  return query.get(id).then((item) => {
    item.destroy();
  });
};
