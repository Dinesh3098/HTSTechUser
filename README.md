# Node.js Login and Sign-up : HTS Tech

This project demonstrates how to create a server using Express with APIs for user sign-up and sign-in. It uses MongoDB Atlas for database storage and includes user authentication with JWT tokens.

* Features
  - Sign-up API: Allows new users to sign up by providing their first name, last name, email, and password.
  - Sign-in API: Allows existing users to sign in by providing their email and password.
  - JWT Authentication: Issues a JWT token upon successful sign-up or sign-in.

* Prerequisites
  - Node.js
  - Express.js
  - Mongoose
  - MongoDB Atlas account
  - An .env file with the following environment variables: 
    - MONGO_URL: The MongoDB connection string.
    - SECRET_KEY: The secret key used for JWT token signing.

* Installation
1. Clone the repository:
```
git clone https://github.com/Dinesh3098/HTSTechUser.git
cd HTSTechUser

```
2. Install dependencies:
```
npm install
```

3. Create a .env file in the root directory and add the required environment variables:
```
MONGO_URL=your_mongodb_connection_string
SECRET_KEY=your_secret_key
```

4. Start the server:

```
npm start
npm run dev // to run nodemon server
```

* API Endpoints
- Sign-up
  - URL: /app/signup
  - Method: POST
  - Request Body:
  
    ```
    {
      "email":"bhadanedinesh90@gmail.com",
      "password":"Dinesh1998@",
      "first_name":"Dinesh",
      "second_name":"Bhadane"
    }
    ```
  - Response:
    - Success: 201 Created
      ```
      {
      "status": "success",
      "msg": "Signed in successfully",
      "data": {
          "userId": "user_id",
          "token": "jwt_token"
      }
      }
    ```
  - Failure: 409 Conflict if user already exists
    ```
    {
        "status": "fail",
        "msg": "User already exists"
    }
    ```

- Sign-in
  - URL: /app/login
  - Method: POST
  - Request Body:
 
    ```
    {
    "email": "bhadanedinesh00@gmail.com",
    "password": "Dinesh1998"
    }
    ```
  - Response:
    - Success: 200 OK
   
      ```
      {
      "status": "success",
      "msg": "Logged in successfully",
      "data": {
          "userId": "user_id",
          "token": "jwt_token"
      }
  
      }
    ```

  - Failure: 401 Unauthorized if credentials are incorrect
 
    ```
    {
    "status": "fail",
    "msg": "User does not exist"  // or "Password is incorrect!"
    }
    ```

    # Usage
    - After starting the server, you can access the sign-up and sign-in APIs using a tool like Postman or through your frontend application. Make sure to replace the server URL with the       deployed server URL if running in a production environment.
   
    # Example
    - Using the server URL: https://htstechuser.onrender.com/app/login

    -Sign-in example request:

    ```
    {
    "email": "bhadanedinesh00@gmail.com",
    "password": "Dinesh1998"
    }
    ```

    This README provides clear instructions on how to set up, run, and use the application.
