# Authentication Microservice

Goal: Provide authentication capabilities for other applications

## Schema
POST: /v1/projectname/login 
  body:
    - username
    - password
  response:
    - sets users JWT in cookie, and responds with it in body

POST: /v1/projectname/logout
  body:
    null
  response:
    - removes the users JWT from cookie
