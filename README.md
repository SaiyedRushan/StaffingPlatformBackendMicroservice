# ActivateStaff - Backend (microservices)

## Description

This is a Node.js application written in TypeScript. It uses Express.js for routing and Jest for testing. The application is structured around jobs and workers, with separate controllers, routes, and services for each. 
The application is built to demonstrate how a microservices architecture could be utilized to deploy the jobs and worker services independently.
Ideally the microservices would be deployed to separate servers, but for the purposes of this demo they are deployed to separate ports on the same server.
They would also be deployed to separate repositories, but for the purposes of this demo they are deployed to separate directories in the same repository. 

- config/: Configuration files.
- controllers/: Controller files for handling requests and responses.
- middleware/: Middleware functions for handling requests and responses.
- models/: Data models.
- routes/: Route definitions.
- services/: Service files for business logic.
- test/: This directory contains the test files.
- Dockerfile: Dockerfile for building a Docker image of the app.
- docker-compose.yml: Docker Compose configuration file.
- jest.config.js: Configuration file for Jest.
- tsconfig.json: Configuration file for TypeScript.
- package.json: Lists the app's npm dependencies.
