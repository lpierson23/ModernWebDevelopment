// import React from "react";
import axios from "axios";
import Parse from "parse";
import { createMeal } from "./../../Common/Services/LearnServices.js";

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
    pin.set("boardName", newPin.boardName);
    return pin.save().then((result) => {
      // returns new Pin object
      return result;
    });
};

export const addToRecipeBook = (pinTitle) => {
    const User = Parse.User.current();
    const Pin = Parse.Object.extend("Pins");
    const query = new Parse.Query(Pin);

    query.equalTo("gridTitle", pinTitle)
    return query.find().then((results) => {
        console.log("after query")
        if (results.length == 0){
            console.log("No such pin exists")
            return
        }else {
            console.log(results[0])
            var pin = results[0]

            const Meal = Parse.Object.extend("Meals");
            const meal = new Meal();
            const query = new Parse.Query(Meal);

            query.equalTo("mealName", pin.get("gridTitle"))
            return query.find().then((results) => {
                if (results.length == 0){
                    console.log("Adding to Recipe Book: ", pinTitle);
                    
                    // using setter to UPDATE the object
                    meal.set("mealName", pin.get("gridTitle"));
                    meal.set("servings", Number("--"));
                    meal.set("household", User.get("household"))
                    meal.set("url", pin.get("link"))
                    meal.set("image", pin.get("imageLink"))
                    return meal.save().then((result) => {
                    // returns new Pin object
                        return result;
                    });
                }else {
                    console.log("Pin already in Recipe Book");
                    alert(`Pin already in Recipe Book`);
                    return
                }
            });
        }
    });
};

export const addPin = async (newPin) => {
    console.log("Checking if pin already present")
    console.log(newPin.gridTitle)
    const Pin = Parse.Object.extend("Pins");
    const query = new Parse.Query(Pin);

    query.equalTo("gridTitle", newPin.gridTitle)
    return query.find().then((results) => {
        console.log("after query")
        console.log(results)
        if (results.length == 0){
            console.log("No such pin exists")
            return true
        }else {
            console.log("pin already exists")
            return false
        }
    });
}

export const getPinsFromDatabase = () => {
    const Pin = Parse.Object.extend("Pins");
    const User = Parse.User.current();
    const query = new Parse.Query(Pin);
    query.equalTo("username", User.get("username"))
    return query.find().then((results) => {
      // returns array of item objects
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
            var originalBoardName = boardName

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
                    console.log(response.data[i]["board"]["name"])
                    console.log(boardName)
                    console.log(originalBoardName)
                    if (response.data[i]["board"]["name"] != originalBoardName) {
                        continue
                    }
                    const pin = {};
                    pin["username"] = username;
                    pin["gridTitle"] = response.data[i]["grid_title"];
                    pin["link"] = response.data[i]["link"];
                    pin["imageLink"] = response.data[i]["image"]["url"];
                    pin["boardName"] = originalBoardName;
                    console.log(pin);


                    console.log("Checking if pin already present")
                    console.log(pin.gridTitle)
                    const Pin = Parse.Object.extend("Pins");
                    const query = new Parse.Query(Pin);

                    query.equalTo("gridTitle", pin.gridTitle)
                    query.find().then((results) => {
                        console.log("after query")
                        console.log(results)
                        if (results.length == 0){
                            pins.push(pin);

                            const Pin = Parse.Object.extend("Pins");
                            const newPin = new Pin();
                            const query = new Parse.Query(Pin);
                        
                            // using setter to UPDATE the object
                            newPin.set("username", username);
                            newPin.set("gridTitle", pin.gridTitle);
                            newPin.set("link", pin.link);
                            newPin.set("imageLink", pin.imageLink);
                            newPin.set("boardName", pin.boardName);
                            newPin.save()   
                        }
                    });
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

export const isLinked = async () => {
    const User = Parse.User.current();
    var username = User.get("username");
    const Account = Parse.Object.extend("Pinterest");
    const account = new Account();
    const query = new Parse.Query(Account);

    // equalTo can be used in any data type
    query.equalTo('username', username);
    let queryResult = await query.find();
    if (queryResult.length == 0){
        return false;
    } else {
        print(queryResult)
        return true;
    } 
};

export const editUserPinterest = async (userPinterest) => {
    const User = Parse.User.current();
    var username = User.get("username");
    const Account = Parse.Object.extend("Pinterest");
    const account = new Account();

    if (isLinked() == false){
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
    }
};

