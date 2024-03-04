<!-- Env Variables -->

### Environment Variables

To run this project, you will need to add the following environment variables to your .env file

````
# App's running environment
NODE_ENV=

# App's running port
PORT=

# Server url
SERVER_URL=

# Cors origin url
CORS_ORIGIN=

# Secrets and Exp
ACCESS_TOKEN_SECRET=

REFRESH_TOKEN_SECRET=

ACCESS_TOKEN_EXPIRE=

REFRESH_TOKEN_EXPIRE=

# name of the refresh token cookie
ACCESS_TOKEN_COOKIE_NAME=

# Example: postgresql://johndoe:randompassword@localhost:5432/databaseName?schema=schemaName
DATABASE_URL=

See .env.example for further details

### Prerequisites

node= 19.9.0
postgresql@15

This project uses Yarn as package manager

```bash
 npm install --global yarn
````

<!-- Installation -->

### Installation

```bash
  git clone https://github.com/emflomed17/anest-api.git
```

Go to the project directory

```bash
  cd anest-api
```

```bash
  yarn install
```

<!-- Run Locally -->

### Run Locally

Make sure postgres server is running.

Create database, schema and user

Make sure role has the right permissions.

Run:
npx prisma migrate dev —create-only

Start the server in development mode

> Note: Dont forget to define the .env variables

```bash
  yarn dev
```

Start the server in production mode

```bash
  yarn start
```
