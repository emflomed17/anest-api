<!-- Env Variables -->

### Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```
# App's running environment
NODE_ENV=

# App's running port
PORT=

# Server url
SERVER_URL=

# Cors origin url
CORS_ORIGIN=

# Run node -e "console.log(require('crypto').randomBytes(256).toString('base64'));" in your console to generate a secret
ACCESS_TOKEN_SECRET=

REFRESH_TOKEN_SECRET=

ACCESS_TOKEN_EXPIRE=

REFRESH_TOKEN_EXPIRE=

# name of the refresh token cookie
REFRESH_TOKEN_COOKIE_NAME=

MYSQL_DATABASE=
MYSQL_ROOT_PASSWORD=

# Example: mysql://USER:PASSWORD@HOST:PORT/DATABASE
DATABASE_URL=

# Configuration for the emial service
SMTP_HOST=
SMTP_PORT=
SMTP_USERNAME=
SMTP_PASSWORD=
EMAIL_FROM=
```

See .env.example for further details

<!-- Getting Started -->

## Getting Started

<!-- Prerequisites -->

### Prerequisites

This project uses Yarn as package manager

```bash
 npm install --global yarn
```

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

### Linting

```bash
  # run ESLint
  yarn lint

  # fix ESLint errors
  yarn lint:fix

  # run prettier
  yarn prettier:check

  # fix prettier errors
  yarn prettier:format

  # fix prettier errors in specific file
  yarn prettier:format:file <file-name>
```

<!-- Running Tests -->

### Running Tests

To run tests, run the following command

```bash
  yarn test
```

Run tests with watch flag

```bash
  yarn test:watch
```

See test coverage

```bash
  yarn coverage
```

<!-- Run Locally -->

### Run Locally

Start the server in development mode

> Note: Dont forget to define the .env variables

```bash
  yarn dev
```

Start the server in production mode

```bash
  yarn start
```
