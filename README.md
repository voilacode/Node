# **Node.js MVC Application with Tailwind CSS**

This is a basic Node.js web application structured using Model-View-Controller (MVC) architecture. The app displays a styled "Hello World!" message at the root route (/), using Tailwind CSS for styling.

## **Features**

MVC Architecture: Clear separation of concerns.
Express.js: Handles the server and routing.
EJS: View engine for rendering HTML.
Tailwind CSS: For styling the index.ejs view.

## **Prerequisites**

Ensure you have the following installed on your machine:

Node.js (v12.x or later recommended)
npm (comes bundled with Node.js)

## **Project Structure**

This project follows the standard MVC architecture:

![image](https://github.com/user-attachments/assets/1b16f1b1-9a7f-434d-8a62-9f3768e54022)


## **Folder Breakdown**

controllers/: Contains the controller logic for routing and handling business logic.
routes/: Defines the routes and maps them to the controllers.
views/: Holds the EJS templates used to render dynamic HTML.
app.js: The main entry point where the app is initialized, routes are defined, and the server is started.
Getting Started
Follow these steps to get the project running on your local machine.

### **1. Clone the Repository**
git clone https://github.com/voilacode/Node.git

cd app

### **2. Install Dependencies**
Run the following command to install all required packages:

npm install

npm install ejs express

### **3. Run the Application**
Start the application by running:

node app.js

The app will now be running at http://localhost:3000.

### **4. View the Application**
Open your browser and go to:

http://localhost:3000
You should see a "Hello World!" message displayed in the center of the screen, styled with a gradient background using Tailwind CSS.

## **Application Breakdown**

### 1. Controller - indexController.js
Handles the logic for the root route (/) and renders the index.ejs view with a message:

### 2. Route - indexRoute.js
Defines the route / and links it to the getHomePage function in the controller:

### 3. Main Application - app.js
This is the entry point of the application. It sets up the server, the view engine (EJS), and the routing:

## **Future Enhancements**

This project is a starting point for building full-stack applications. You can easily expand it by:

Adding more routes and controllers.

Integrating a database (like MySQL, MongoDB or PostgreSQL).

Incorporating user authentication.

Building a REST API to serve data.

Using frontend frameworks (e.g., React, Vue, or Angular) for the view layer.

# &copy; Voilacode Technologies.
