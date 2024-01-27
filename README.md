# Chatbot Web App

A simple chatbot web app powered by OpenAI API, built with React.js for the frontend and Express.js for the backend.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [API Documentation](#api-documentation)


## Overview

The chatbot web app provides a user-friendly interface for interacting with a chatbot powered by OpenAI. The frontend is built with React.js, offering a  intuitive user experience. The backend, implemented in Express.js with Mongodb atlas, serves as the communication layer between the frontend and the OpenAI API.

## Features

- Real-time chat interaction with the OpenAI-powered chatbot.
- User-friendly frontend built with React.js.
- Seamless communication between frontend and backend using Express.js.
- Serverless connection with mongodb atlas



## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB Atlas Cluster connection URI.
- OpenAPI apikey.

### Installation

1. Clone the repository:

``````
   git clone https://github.com/ankitmishraindia/Chatbot
``````

2. Go to Frontend
``````
   cd frontend-chatbot
   npm install
``````

3. Install Backend
``````
   cd backend-chatbot
   npm install
``````
4. Set your .env file with mongodb cluster connection.

5. Set your openAPI apikey in .env file.

## Project Structure
```
chatbot/
  ├── frontend-chatbot/
  │   ├── src/
  │   ├── public/
  │   ├── package.json
  │   ├── ...
  ├── backend-chatbot/
  │   ├── server.js
  │   ├── package.json
  │   ├── src/
  │   ├──.env│
  │   ├── ...
  ├── README.md

```



## Usage

1. Start the frontend Server.
```````
 cd frontend-chatbot
 npm run dev
```````
2. The frontend will run at http://localhost:5173.

3. Start the backend Server.
```
 cd backend-chatbot
 npm run dev
```
4.The backend will run at http://localhost:7000.

## API Documentation

###### The backend API provides the following endpoints:

- GET /chatbot/oldChats: Retrieve chat messages.
- POST /chatbot/updateChats: Send a user message to the chatbot.
- delete /chatbot/deleteChats: Delete current conversations to the chatbot.
- For detailed API documentation, refer to the API Documentation file.


