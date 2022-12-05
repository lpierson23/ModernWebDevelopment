# Changelog

## [0.4.0] - 2022-10-26
### Added
- Parse methods 
    - getting all, creating, and deleting grocery items
    - getting all, creating, and deleting meals
    - getting all, getting by week, creating, and deleting calendar date/meal pairings
    - getting all, getting one, creating, and deleting users
- Change and Click Handlers for all necessary classes

### Changed
- Routing
    - updated routing using Link 

### Removed
- JSON psuedo database
- Parse methods for fetching from parse database


## [0.5.0] - 2022-11-09
### Added
- Auth Module
    - Auth.js that is the 'home' page for the auth module that checks if user has already logged in and if not, allows the user to either navigate to login or register
    - AuthRegister.js - uses the AuthForm child component to allow the user to register an account
    - AuthLogin.js - uses AuthForm child component to allow the user to login
    - AuthForm.js - child component that takes user input for name, email, and password
    - AuthService.js - has methods to create a user, login and user, and check if a user is already logged in

### Changed
- Routing
    - updated routing to include protected routes
    - updated routing to include routing to auth module


## [0.6.0] - 2022-12-10
### Added
- Recipe Book Module
    - side bar that displays all of a user's recipe
    - ability to click on sidebar item to see recipe name, number of servings, url, and an image
    - ability to leave comments on and rate a recipe
    - displays the average user rating and all submitted comments
- Cypress unit testing for the shopping module

### Changed
- Routing
    - updated routing to include recipe book module
- Shopping Module
    - added a few DOM ids for unit testing
    - fixed useEffect so that it is not constantly reloading shopping list (also done in requests module)

