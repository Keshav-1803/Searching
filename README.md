---
# Express.js Server for Books and Movies

This repository contains an Express.js server designed to handle `GET` requests for retrieving information about books and movies. The server supports searching for books by name and movies by title. Below, you'll find an overview of the server setup, endpoints, and usage.

## Installation

To run this Express.js server, ensure you have Node.js installed on your machine. Follow these steps to get started:

1. **Clone the Repository:**

   Clone this repository to your local machine using Git:

   ```bash
   git clone <repository_url>
   ```

2. **Navigate to the Project Directory:**

   Move into the project directory in your terminal:

   ```bash
   cd FindUser
   ```

3. **Install Dependencies:**

   Install the required dependencies for the server using npm:

   ```bash
   npm install express
   ```

4. **Start the Server:**

   Start the Express server:

   ```bash
   node server.js
   ```

   Replace `server.js` with the name of your server file if different.


### Express.js Overview

Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It simplifies the process of creating powerful APIs and web servers by providing a simple, yet powerful, set of tools and features.

### Key Concepts

1. **Routing:**

   Routing refers to determining how an application responds to a client request at a specified endpoint (or URL path). In this server, we define routes for `/books` and `/movies` to handle different types of requests.

   - **GET Method:**
     - The `GET` method is used to request data from a specified resource. In this case, we're using `GET` requests to fetch information about books and movies.

2. **Middleware:**

   Middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the next middleware function in the application's request-response cycle. They can perform tasks such as parsing request bodies, logging, authentication, etc.

   - **Express.json():**
     - The `express.json()` middleware is used to parse incoming request bodies in JSON format. It allows us to access JSON data sent in the request body using `req.body`.

3. **Request Parameters:**

   - **Path Parameters (`req.params`):**
     - Path parameters are placeholders in the URL path. In this server, `:type` is a path parameter in the `/` route, representing the type of data (books or movies).
     - Example: `/books`, `/movies`

   - **Query Parameters (`req.query`):**
     - Query parameters are key-value pairs added to the end of a URL. They are used for filtering, sorting, or providing additional data in a request.
     - Example: `/books?name=1984`, `/movies?title=Dark%20Knight`

4. **Response:**

   - The server responds with JSON objects containing the requested data.
   - Each response includes a `Status` field indicating the status of the request (`OK`, in this case), and a `Results` field containing an array of matching books or movies.


### Server Logic

1. **Books Endpoint (`/books`):**

   - When a `GET` request is made to `/books`, the server checks for the presence of a `name` query parameter.
   - If no `name` parameter is provided, the server returns the entire collection of books.
   - If a `name` parameter is provided, the server filters the books based on the provided name (case-insensitive) and returns the matching results.

- **Endpoint:** `/books`
- **Parameters:**
  - `name`: (Optional) Search for books by name.
- **Example Request:**
  ```
  GET http://localhost:8000/books?name=Gatsby
  ```
- **Example Response:**
  ```json
  {
    "Status": "OK",
    "Results": [
      {
        "name": "The Great Gatsby",
        "description": "The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.",
        "author": "F. Scott Fitzgerald",
        "category": "Classic Fiction"
      }
    ]
  }
  ```

2. **Movies Endpoint (`/movies`):**

   - Similar to the books endpoint, the `/movies` endpoint handles `GET` requests.
   - If no `title` query parameter is provided, the server returns the entire collection of movies.
   - If a `title` parameter is provided, the server filters the movies based on the provided title (case-insensitive) and returns the matching results.

- **Endpoint:** `/movies`
- **Parameters:**
  - `title`: (Optional) Search for movies by title.
- **Example Request:**
  ```
  GET http://localhost:8000/movies?title=Shawshank
  ```
- **Example Response:**
  ```json
  {
    "Status": "OK",
    "Results": [
      {
        "title": "The Shawshank Redemption",
        "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        "director": "Frank Darabont",
        "genre": "Drama"
      }
    ]
  }
  ```

### Request Parameters

- **Books Endpoint (`/books`):**
  - `name`: Search for books containing the specified name.
    - Example: `GET http://localhost:8000/books?name=Gatsby`

- **Movies Endpoint (`/movies`):**
  - `title`: Search for movies containing the specified title.
    - Example: `GET http://localhost:8000/movies?title=Shawshank`

### JSON Response

- The server responds with a JSON object containing the status and requested data.
- The `Results` field contains an array of matching books or movies.

### Example Requests

1. **Search for Books:**
   ```
   GET http://localhost:8000/books?name=1984
   ```
   Response:
   ```json
   {
     "Status": "OK",
     "Results": [
       {
         "name": "1984",
         "description": "A dystopian novel about a totalitarian regime and a man who dares to rebel against it.",
         "author": "George Orwell",
         "category": "Dystopian Fiction"
       }
     ]
   }
   ```

2. **Search for Movies:**
   ```
   GET http://localhost:8000/movies?title=Dark%20Knight
   ```
   Response:
   ```json
   {
     "Status": "OK",
     "Results": [
       {
         "title": "The Dark Knight",
         "description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
         "director": "Christopher Nolan",
         "genre": "Action"
       }
     ]
   }
   ```

## Data

The server provides information about a collection of books and movies. Here are some examples:

### Books

- "The Great Gatsby"
- "To Kill a Mockingbird"
- "1984"
- "Pride and Prejudice"
- "The Catcher in the Rye"
- ...

### Movies

- "The Shawshank Redemption"
- "The Godfather"
- "The Dark Knight"
- "Pulp Fiction"
- "Forrest Gump"
- ...

### Conclusion

This Express.js server setup provides a straightforward and efficient way to retrieve information about books and movies through `GET` requests. By utilizing routing, middleware, request parameters, and JSON responses, the server offers a flexible and scalable solution for handling data retrieval tasks.

Developers can further extend this server by adding more endpoints, implementing error handling, integrating with databases, and enhancing functionality based on project requirements. Express.js empowers developers to build APIs and web servers with ease, making it a popular choice for Node.js applications.

---