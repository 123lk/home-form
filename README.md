  ## Frontend challenge for Home
  
  ## Installation 
You will need to have Node.js installed to run this application.  Type the below command into the terminal to check if you already have node installed;
```
$node -v
```
If you already have node installed it will tell you which version (e.g. v8.4.0).  If you need to install Node.js please follow this [link](https://nodejs.org/en/).

To install all the dependencies please enter the following command into the terminal once you have navigated into the root directory; 
```
$npm install
```
To start the program enter the following command;
```
$npm start
```

Once compiled the program will be running on <http://localhost:3000/>

## Built With
[React](https://facebook.github.io/react/) - javascript library for building user interfaces

[React Router](https://reacttraining.com/react-router/) - routing library for React

[Material UI](https://material-ui.com/) - React UI framework

## Technical choices and design
I decided to use components from Material UI for the design as they adhere to the Google's [Material Design](https://material.io/) and create minimal yet effective interfaces.  Material UI also has a comprehensive Grid system which ensures the app is responsive to different screen sizes and orientation.  I was keen for the form to have a 'clean' design so have used minimal colours and instead used a 'paper' component to add some depth to the page.  I was inspired by the look and feel of the Home website and wanted to emulate this design so have incorporated the 'Exo' font throughout the app.

As the project brief specified that the form needed to be 'multi-page' I incorporated React Router to create unique URL's for each page.  Due to the multi-page nature of the app I wasn't able to store all state locally as I required access to all inputted data for the final summary page.  I initially considered using Redux for the state management but thought it may be adding a layer of complexity that wasn't needed.  Instead I decided to utilise localStorage to save and get data from as I think this is a cleaner solution.

## Improvements
1. Add form validation, e.g. use regex to check if a valid phone number or email address is provided
2. Update UI based on if fields are 'required' or not.  E.g if the user has not completed the required field, they see an error message and are unable to click forward in the form.
3. Add the ability to navigate back through the form and edit data.




