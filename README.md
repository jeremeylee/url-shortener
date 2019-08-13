## URL Shortener
A backend project for shortening URLs.

The application will be built on Node.js using the Express.js framework. 

The database will utilize MongoDB.

## How It Works

### The Post Request
The user is presented with an input form. In the form, the user can enter a valid URL to be shortened. When the user presses the "Shorten!" button, a POST request is sent to the backend. The POST request's body contains the URL that the user submitted. 

### Creating the Shortened URL ID
The backend verifies if the user submitted a valid URL using the valid-url library. If the user submitted a valid URL, the backend will check if the submitted URL already exists in the database. If it does exist in the database, the response will return the shortened URL ID that was stored. If the URL does not exist, the backend will create a new model containing the original URL and a shortened URL ID created with the nanoid library. After saving the new model to the database, the shortened URL that was created is sent back to the user. On the frontend, the href + shortened URL ID is shown.

### Using the Shortened URL
When the user goes to the Shortened URL, a GET request is sent to the backend. The backend looks for the shortened URL ID in the database. If the shortened URL ID does not exist, a 404 error is sent to the user. If the shortened URL does exist, the original URL will be obtained from the model and the user will be redirected to the original URL.

## TODO
Provide user feedback when an invalid URL is submitted