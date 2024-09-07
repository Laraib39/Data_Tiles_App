# Data_Tiles_App
(Skill Test)

This is a web-based application that displays user information in tile format inside a Grid. Users can expand tiles to view details, edit user information, flag users, and delete them. The app uses React for building the interface and managing interactions.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Commands](#commands)
- [Screenshots](#screenshots)
- [Deployment](#deployment)
- [License](#license)

## Project Overview

The **Data Tiles App** allows users to view and manage a list of users. When a tile is clicked, the user’s details are expanded, and an option to edit the user information appears when the edit icon is clicked. 

This project showcases basic React concepts like component-based architecture, state management, event handling, and conditional rendering. It is also integrated with GitHub Pages for deployment.

## Features

- **Horizontal Menu**: It serves as the navigation bar for the app (please note that the navlinks are not functional since it is the test task).
- **Hamburger Menu**: Displays some menus from the left hand side.
- **Tile View**: Each user’s information is displayed in tile format.
- **Grid View**: The tiles are arranged in a Grid format.
- **Expanded View**: Clicking on a tile expands it to show more details.
- **Edit Functionality**: Clicking the "Edit" button enables editing the user’s details.
- **Flag and Delete**: Users can be flagged for review or deleted from the list.

## Key Technologies

1. React.js: Used for handling the UI and interactivity.
2. CSS3: Used for responsive design and stylings.
3. JavaScript (ES6): Implements logic for expanding views, editing forms, and managing states.
4. Material UI: Used for adding pre-built components for styled view of the user interface.
5. JSONPlaceholder (Public RESTful API): Used to get the data for the user tiles.

## Project Structure 

/src
|-- /components
    |-- HamburgerMenu.js        # Displays menus from the left hand side
    |-- HorizontalMenu.js       # Displays nav links in horizontal navbar
    |-- GridView.js             # Displays all the tiles in a Grid layout
    |-- TileView.js             # Displays users' precise information in a tile layout
    |-- ExpandedView.js         # Shows detailed view of a users
    |-- EditView.js             # Handles editing of users' information
|-- /css
    |-- styles.css         # Application-wide styling
|-- App.js                 # Main entry point for the app
|-- index.js               # Renders the app into the DOM

## Component Breakdown
### GridView.js:
This component simply displays all the tiles in beautiful Grid layout. where all the tiles are arranges in order according to the data retrieved from the public API.

### HamburgerMenu.js:
When the user clicks the hamburger menu icon it shows up the menu list from the left hand side of the page with one menu having sub-menu. These menus are not worked upon them in detail for now, such that they don't let the user to navigate to another page of the app.

### HorizontalMenu.js:
This menu allows the users to view and navigate through the various pages of the app. The navlinks include Home, Services, Portfolio, About Us, and Contact among which the Services link has sub-menus when it is clicked. This section of the app is limited to its appearance part only since it's whole functionality was not required for the skill test.

### TileView.js: 
This component displays a summary of each user (name, username, and email) which is the data obtained from JSONPlaceholder API. Clicking on a user's tile reveals an expanded view or triggers the edit mode depending on user interaction.

### ExpandedView.js: 
When the tile is clicked, it expands to show additional user details such as address, phone number, and website. This component renders conditionally based on the state in the TileView.js.

### EditView.js: 
On clicking the Edit button in the tile, this component renders a form to modify the contact details. It includes input fields for the name, email, and other details, as well as validation logic. You can submit the form, which updates the user's details.

### Actions (Edit, Flag, Delete): 
Each user tile has buttons for editing, flagging as important, or deleting the user. The delete functionality removes the user tile from the tile grid, and the flag action marks important contacts for easy identification.

## Known Issue:
The app might have a minor UI rendering issue on the initial load where the layout does not appear as expected until a tile is clicked. This could be related to the CSS or JavaScript that handles the initial rendering.

## Installation
### Prerequisites
To run this application locally, you need to have the following installed:

1. Node.js
2. npm (or yarn)

To set up the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/Laraib39/Data_Tiles_App.git
    ```

2. Navigate to the project directory:
    ```bash
    cd my-tileview-app
    ```

3. Install the necessary dependencies:
    ```bash
    npm install
    ```

## Usage

1. Run the development server:
    ```bash
    npm start
    ```

2. Open your browser and visit:
    ```
    http://localhost:3000
    ```

You can now view the app in your browser, where you can click on any tile to expand its details, edit user information, flag users, or delete them.

## Commands

- `npm start`: Starts the development server.
- `npm run build`: Builds the production-ready version of the app.
- `npm run deploy`: Deploys the app to GitHub Pages (if configured).

## Screenshots

1. *Web page's Initial UI with all the tiles in Grid Format*
https://drive.google.com/file/d/178IatqhYWV6XmsiDVKfcnHbt6YIPP9QU/view?usp=sharing

2. *Expanded Hamburger Menu with all the Menu items*
https://drive.google.com/file/d/1y50e54bGeeW2iU3JjJVXw6aPKK9033VF/view?usp=sharing

3. *Expanded View of the User Tile with few more user details*
https://drive.google.com/file/d/1uCrLTCGZrp91FkpBhHA1Y1YZtDYyjFVh/view?usp=sharing

4. *Edit View of User Tile to modify user details*
https://drive.google.com/file/d/18pzjrmV4ou0nDewA8WXYvG3PUn8ZuY9R/view?usp=sharing


## Deployment

This app is hosted using GitHub Pages. To deploy the app:

1. Ensure your `package.json` has the correct `homepage` field:
    ```json
    "homepage": "https://Laraib39.github.io/Data_Tiles_App",
    ```

2. Build the app for production:
    ```bash
    npm run build
    ```

3. Deploy it to GitHub Pages:
    ```bash
    npm run deploy
    ```

After deployment, the app will be available at:
https://Laraib39.github.io/Data_Tiles_App
