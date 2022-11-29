// import React from "react";
import axios from "axios";
import Parse from "parse";

const url =
  "https://api.apify.com/v2/acts/alexey~pinterest-crawler/run-sync-get-dataset-items?token=apify_api_e9OxTOaOz565aecU3fSDVWvfgPM0ST1fn0JB";

// const url = "http://localhost:3004";

export const getAllPins = (pinterestEmail) => {
  return axios({
    method: "post",
    url: `${url}`,
    headers: {
      "Content-Type": "application/json"
    },
    json: true
  })
    .then((response) => {
      console.log("POST response: ", response);
      return response.data;
    })
    .catch((err) => {
      console.log("POST error: ", err);
    });

     // const Pin = Parse.Object.extend("Pins");
  // const User = Parse.User.current();
  // const query = new Parse.Query(Pin);
  // query.equalTo("household", User.get("household"))
  // return query.find().then((results) => {
  //   // returns array of item objects
  //   console.log("results: ", results);
  //   return results;
};

export const editUserPinterest = async (userPinterest, id) => {
    var User = Parse.Object.extend("Users");
    var query = new Parse.Query(id);
    let result = await query.get(objectId, { useMasterKey: true });
    if (!result) new Error("No user found!");
    result.set("pinterestUsername", userPinterest.pinterestUsername);
    result.set("boardName", userPinterest.boardName);
  
    try {
      result.save(null, { useMasterKey: true });
      return "User updated successfully!";
    } catch (e) {
      return e.message;
    }
  };

