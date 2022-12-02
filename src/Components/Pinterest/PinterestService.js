// import React from "react";
import axios from "axios";
import Parse from "parse";

//Create operation for pins
export const createPin = (newPin) => {
    console.log("Creating: ", newPin.gridTitle);
    const Pin = Parse.Object.extend("Pins");
    const pin = new Pin();
    // using setter to UPDATE the object
    pin.set("pinterestUsername", newPin.pinterestUsername);
    pin.set("gridTitle", newPin.gridTitle);
    pin.set("link", newPin.link);
    pin.set("imageLink", newPin.imageLink);
    return pin.save().then((result) => {
      // returns new Pin object
      return result;
    });
};

export const getPinsFromDatabase = () => {
    const Pin = Parse.Object.extend("Pins");
    const User = Parse.User.current();
    const query = new Parse.Query(Pin);
    query.equalTo("username", User.get("username"))
    return query.find().then((results) => {
      // returns array of item objects
      console.log("results: ", results);
      return results;
    });
  };

export const getAllPins = async () => {
    const User = Parse.User.current();
    var username = User.get("username");
    const Account = Parse.Object.extend("Pinterest");
    const account = new Account();
    const query = new Parse.Query(Account);
    
    query.equalTo("username", username);
    return query.first().then(function(result){
        if(result){
            var pinterestUsername = result.get("pinterestUsername");
            var boardName = result.get("boardName");

            //fix board name by eliminating punctuation, lowercase letters, and hyphen instead of spaces
            boardName = boardName.toLowerCase();
            boardName = boardName.replaceAll("!", "");
            boardName = boardName.replaceAll(".", "");
            boardName = boardName.replaceAll("-", "");
            boardName = boardName.replaceAll(" ", "-");

            const url = "https://api.apify.com/v2/acts/alexey~pinterest-crawler/run-sync-get-dataset-items?token=apify_api_e9OxTOaOz565aecU3fSDVWvfgPM0ST1fn0JB";
            const startUrl = "https://www.pinterest.com/" + pinterestUsername + "/" + boardName + "/";
            const pinCount = 10;
            const input = {
                "maxPinsCnt": pinCount,
                "proxyConfig": {
                    "useApifyProxy": true
                },
                "startUrls": [
                    startUrl
                ]
            }

            //access Pinterest Scraper with given info
            return axios.post(url, input).then((response) => {
                console.log("POST successful");
                // return(response.data);
                const pins = []
                for (var i = 0; i < pinCount; i++) {
                    const pin = {};
                    pin["username"] = username;
                    pin["gridTitle"] = response.data[i]["grid_title"];
                    pin["link"] = response.data[i]["link"];
                    pin["imageLink"] = response.data[i]["image"]["url"];
                    console.log(pin);
                    pins.push(pin);

                    const Pin = Parse.Object.extend("Pins");
                    const newPin = new Pin();
                    const query = new Parse.Query(Pin);
                   
                    // using setter to UPDATE the object
                    newPin.set("username", username);
                    newPin.set("gridTitle", response.data[i]["grid_title"]);
                    newPin.set("link", response.data[i]["link"]);
                    newPin.set("imageLink", response.data[i]["image"]["url"]);
                    newPin.save()
                                      

                    // console.log("Title", response.data[i]["grid_title"]);
                    // console.log("Link", response.data[i]["link"]);
                    // console.log("Image Link", response.data[i]["image"]["url"]);
                }
                console.log("out of loop");
                return pins;
            })
            .catch((err) => {
                console.log("POST error: ", err);
            });
        
        } else {
            console.log("There is no Pinterest account associated with this account");
        }
    });
};

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

    if (notLinked()){
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

