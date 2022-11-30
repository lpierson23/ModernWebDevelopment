// import React from "react";
import axios from "axios";
import Parse from "parse";

// const url =
//   "https://api.apify.com/v2/acts/alexey~pinterest-crawler/run-sync-get-dataset-items?token=apify_api_e9OxTOaOz565aecU3fSDVWvfgPM0ST1fn0JB";

// // const url = "http://localhost:3004";

// export const getAllPins = (pinterestEmail) => {
//   return axios({
//     method: "post",
//     url: `${url}`,
//     headers: {
//       "Content-Type": "application/json"
//     },
//     json: true
//   })
//     .then((response) => {
//       console.log("POST response: ", response);
//       return response.data;
//     })
//     .catch((err) => {
//       console.log("POST error: ", err);
//     });
// };
     // const Pin = Parse.Object.extend("Pins");
  // const User = Parse.User.current();
  // const query = new Parse.Query(Pin);
  // query.equalTo("household", User.get("household"))
  // return query.find().then((results) => {
  //   // returns array of item objects
  //   console.log("results: ", results);
  //   return results;

export const notLinked = async () => {
    const User = Parse.User.current();
    var username = User.get("username");
    const Account = Parse.Object.extend("Pinterest");
    const account = new Account();
    const query = new Parse.Query(Account);

    // equalTo can be used in any data type
    query.equalTo('username', username);
    let queryResult = await query.find();
    if (queryResult.length == 0){
        return true;
    } else {
        return false;
    } 
};

export const editUserPinterest = async (userPinterest) => {
    const User = Parse.User.current();
    var username = User.get("username");
    const Account = Parse.Object.extend("Pinterest");
    const account = new Account();

    if (!alreadyLinked()){
        // using setter to UPDATE the object
        console.log("Linking to Pinterest account");
        account.set("username", username);
        account.set("pinterestUsername", userPinterest.pinterestUsername);
        account.set("boardName", userPinterest.boardName);
        return account.save().then((result) => {
            // returns new Account object
            return result;
        });
    } else {
        console.log("Account already linked to Pinterest.")
        alert(`Account already linked to Pinterest.`);
        console.log(queryResult);
    }
};

