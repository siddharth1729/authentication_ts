# Creating an Authentication Service in Node.js using TypeScript and Clean Architecture

This guide will walk you through the process of creating an authentication service in Node.js using TypeScript and clean architecture. The authentication service will allow users to sign up and log in to your application using email and password.

## Prerequisites

Before you begin, make sure you have the following:

- Node.js (v14 or higher)
- npm or yarn
- A text editor of your choice (e.g. VS Code)

## Project Setup

To set up the project, follow these steps:

1. Create a new directory for your project.
2. Open the directory in your terminal or command prompt.
3. Initialize a new Node.js project using `npm init` or `yarn init`.
4. Install the required dependencies:
   - `express` for building the server
   - `jsonwebtoken` for generating and verifying JSON Web Tokens
   - `bcrypt` for hashing and verifying passwords
   - `dotenv` for managing environment variables
   - `typeorm` for database management
   - `reflect-metadata` for decorators support
   - `pg` or any other driver for the desired database engine
   - `@types/express`, `@types/jsonwebtoken`, `@types/bcrypt`, `@types/dotenv` and `@types/pg` for TypeScript support

   You can install these dependencies using the following command:

   ```sh
   npm install express jsonwebtoken bcrypt dotenv typeorm reflect-metadata pg @types/express @types/jsonwebtoken @types/bcrypt @types/dotenv @types/pg --save
   ```

5. Create a `src` directory for your source code.
6. Inside the `src` directory, create a `server.ts` file for your server code.

## Clean Architecture Setup

We will be using the Clean Architecture pattern to structure our code. The Clean Architecture is a software architecture that separates the code into layers with clear boundaries and dependencies pointing inwards. In this architecture, the core business logic is at the center of the architecture, surrounded by layers of less important details. The layers are:

- Entities: Domain models and business rules.
- Use cases: Application-specific business rules.
- Controllers: Handle requests and responses.
- Repositories: Database and external interfaces.
- Services: Manage external services like AWS S3, Twilio, etc.

The following diagram illustrates the Clean Architecture layers:

```
+----------------+
|   Controllers  |
+----------------+
|     Use Cases  |
+----------------+
|    Entities    |
+----------------+
|  Repositories  |
+----------------+
|    Services    |
+----------------+
```

To set up the Clean Architecture, create the following directories inside the `src` directory:

- `domain`: Contains the `User` entity and any business rules related to authentication.
- `usecases`: Contains the use cases for authentication, such as `Signup` and `Login`.
- `interface`: Contains the Express.js server code and its associated controllers.

