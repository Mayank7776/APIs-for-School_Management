A simple Node.js and MySQL-based REST API for managing school data. This project includes endpoints to add new schools and list schools sorted by proximity to a user-provided location.

📌 Project Objective
Develop a backend system using Node.js, Express.js, and MySQL to:

Add new schools to a database.

Retrieve a list of all schools sorted by geographic distance from a given location.

🛠️ Tech Stack
Backend: Node.js, Express.js

Database: MySQL

Hosting: Railway (or any suitable Node.js hosting platform)

Testing Tool: Postman

📋 API Endpoints
➕ Add School
Endpoint: /addSchool

Method: POST

Request Body:

json
Copy
Edit
{
  "name": "Example School",
  "address": "123 School Road",
  "latitude": 40.7128,
  "longitude": -74.0060
}
Functionality:

Validates input fields (name, address, latitude, longitude).

Inserts a new school into the schools table.

📍 List Schools by Proximity
Endpoint: /listSchool

Method: GET

Query Parameters:

latitude=<user_latitude>&longitude=<user_longitude>
Functionality:

Retrieves all schools from the database.

Calculates distance between each school and the user's location.

Returns a list sorted by proximity (nearest first).

🗄️ Database Schema
Table Name: schools

Field	Type	Description
id	INT	Primary Key, Auto Increment
name	VARCHAR	Name of the school
address	VARCHAR	Address of the school
latitude	FLOAT	Latitude coordinate
longitude	FLOAT	Longitude coordinate

🚀 Hosting & Deployment
The APIs are deployed using Railway.

Live endpoints are accessible for integration and testing purposes.

📫 Postman Collection
A Postman collection is included in the repository for easy testing.
It contains:

Example requests for /addSchool and /listSchool

Live API Endpoints (for testing):

POST /addSchool: https://apis-for-school-management-e5jh.onrender.com/addSchool

GET /listSchools: https://apis-for-school-management-e5jh.onrender.com/listSchool?latitude=23.34333&longitude=12.34424
