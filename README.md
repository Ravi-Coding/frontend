## Fullstack Help Center

# Frontend

This is a Fullstack Help Center project that features a frontend built with React and a backend powered by Node.js and Express, connected to a MongoDB database. 
The application allows users to search and display help articles or resources dynamically fetched from a MongoDB database.

## Features

- **Dynamic Data Fetching**: Fetches help articles or resources from a MongoDB database.
- **Search Functionality**: Users can search through the help articles by title.
- **Responsive Design**: The frontend is designed to be responsive and user-friendly.
- **Backend API**: Provides endpoints to manage help center data.
- **MongoDB Integration**: Stores and retrieves help articles from a MongoDB database.


Frontend Overview

The frontend is built using React. It includes components such as Header, SearchBar, MainContent, and Footer. The Card component is used to display each help article.
Key Files:

    App.js: Main component that sets up the application structure.
    App.css : Contains the styles for the App component to match the design.
    MainContent.js: Renders a list of Card components.
    MainContent.css : Contains the styles for the MainContent component to match the design.
    SearchBar.js: Provides search functionality to filter articles.
    SearchBar.css : Contains the styles for the SearchBar component to match the design.
    card.js: Represents each individual help article.
    card.css: Contains the styles for the Card component to match the design.

Install frontend dependencies: 
 cd ../frontend
 npx create-react-app . 
 npm install dot env 
 npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
 npm install axios
 
## Set up environment variables:

    Backend: Create a .env file in the backend/ directory with the following content:
    MONGODB_URI=mongodb+srv://Ravi-Coding:my_password@cluster0.mongodb.net/helpcenter?retryWrites=true&w=majority
    PORT=3008
    helpcenter- db Name
    
    Frontend: Create a .env file in the frontend/ directory with the following content:
    REACT_APP_API_URL=http://localhost:3008/cards

## Running the Project
   1. Start the backend server:
      cd backend
      nodemon server.js

   2. Start the frontend server:
      cd ../frontend
      npm start
   
## View the application:

    Frontend: Open http://localhost:3004 in browser.
    Backend API: Runs on http://localhost:3008.
    
## API Endpoints

    I used Postman API testing tool to test the API endpoints:

GET /ping to check if the server is running.
POST /cards to create a new card.
GET /cards to get all cards.
GET /cards/:title to get a specific card by title.
