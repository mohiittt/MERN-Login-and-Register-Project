# MERN Login and Register Project

This project is a simple implementation of user authentication using the MERN stack, consisting of MongoDB, Express.js, React.js, and Node.js. It includes separate folders for the backend and frontend, with respective files for each.

## Backend

The backend folder contains all server-side code responsible for handling user authentication, data storage, and API routes.

### Installation

1. Navigate to the `back-end` folder.
2. Install dependencies using `npm install init`.
3. Set up your MongoDB connection in `back-end/db/dbConnection.js`.
4. Run the backend server using `npm start`.

### Files

- `index.js`: Entry point for the backend server.
- `db/dbConnection.js`: Configuration for MongoDB connection.
- `db/user.js`: Mongoose model for user schema.

## Frontend

The frontend folder contains all client-side code for the user interface and interaction.

### Installation

1. Navigate to the `front-end` folder.
2. Install dependencies using `npm install`.
3. Configure backend API endpoint in `front-end/src/utils/api.js`.
4. Run the frontend server using `npm start`.

### Files

- `src/App.js`: Main component handling routing.
- `src/pages/LoginPage.js`: Component for user login.
- `src/pages/RegistrationPage.js`: Component for user registration.

## Usage

1. Register a new user using the registration form.
2. Log in with the registered credentials.
3. Access protected routes or perform actions based on user authentication status.

## Dependencies

- Backend: Express.js, Mongoose, bcryptjs, jsonwebtoken, cors
- Frontend: React.js, React Router, axios
