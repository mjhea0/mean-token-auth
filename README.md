# MEAN Token Auth

- [MongoDB](http://www.mongodb.org/)
- [Express](http://expressjs.com/)
- [AngularJS](https://angularjs.org/)
- [Node.js](http://nodejs.org)
- [Satellizer](https://github.com/sahat/satellizer)

## Questions

### How do you set up email and/or password reset?

#### Steps

1. Client-side
  - Add the forms to the *profile.html* template.
  - Add a function to the controller to handle the form submission that sends a PUT request to the server with the updated user info.
1. Server-side
  - Add a route to handle the PUT request. *Make sure that this can only be accessed if a user is authenticated.*
  - Grab the payload from the request body and update the document in the database.
  - Send the appropriate response in JSON back to the client-side.
1. Client-side
  - Handle the returned response appropriately - update the DOM, update localstorage, flash a message to the user, etc.

#### Solution

https://github.com/mjhea0/mean-token-auth/commit/e6e6e5c713c72602cabeae00bf573453d5253210

#### Issues

1. The updated email does not have to be unique. How can you update this to check the DB for emails and ensure the new email is unique? On that note, should you even allow users to update emails?
1. No tests.

