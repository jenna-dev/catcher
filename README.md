# Catch Game Web Application

[Project Description]
Game: A catch game that able to move the catcher left and right to catch the items. 
Leaderboard: Display the top 100 players score.

## Prerequisites

- Node.js
- npm
- MongoDB

## Installation

1. Clone the repository:
git clone [https://github.com/your-username/your-repo.git](https://github.com/jenna-dev/catcher.git]


Copy
2. Install dependencies for the frontend and backend:
cd your-repo
cd client
npm install

cd server
npm install

3. Set up environment variables:
- Create a `.env` file in the root directory of the project.
- replace mongoDB connection string
4. Start the development server:
npm run dev

## Project Structure

The project is divided into two main parts:

1. **Frontend (React)**: The client-side of the application, located in the `client` directory.
2. **Backend (Node.js)**: The server-side of the application, located in the `server` directory.

## API Documentation

### General Information

- Base URL: `http://localhost:5002/api/v1`
- Authentication: None

### Endpoints

#### Get Top Scores

Retrieves the top 100 scores.

- **Endpoint**: `GET /leaderboard`
- **Response**: An array of score objects, sorted by score in descending order limit to 100.

#### Add Score

Adds a new score to the leaderboard.

- **Endpoint**: `POST /leaderboard`
- **Request Body**:
- `username` (string): The player's username.
- `score` (number): The player's score.
- **Response**: The newly created score object.
