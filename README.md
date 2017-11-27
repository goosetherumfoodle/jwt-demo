# README

## running in production
Run the `build_and_deploy.sh` script

## running for development
Run `docker-compose build server` to deploy the server, then `npm install && npm up` to deploy the client locally.

## server ports

Local Client: `localhost:8080`

Production Client: `localhost:3000`

Server: `localhost:3001`

## database
create a new database:
```
docker-compose run server rake db:create
```

run migrations:
```
docker-compose run server rake db:migrate
```
## rails
All rails commands need prepended with:
```
docker-compose run server
```

## javascript
Javascript development will be local for now

# Testing
Right now the only tests setup are frontend.

## Example Test
[here's an example test](https://github.com/WorkHardPittsburgh/MyGS/blob/6b4a23993c7be02300b5550f3ce3899e4263908e/client/tests/example.test.js)

## Writing
New tests will go in the `client/tests` directory and end in `.test.js`.

## Running
1. Install Jest
```
yarn global add jest
```
2. Run
```
jest
```

# Linting

We're using eslint for JS linting

## Configuration
The config file can be found at `client/.eslint.yml`

Here's a [list](https://eslint.org/docs/rules/) of the available rules. Let me know if yinz want to change any of them. We can adjust them as we go depending on what people want.

## Running
`client/node_modules/.bin/eslint client/src`

Flags:
`--fix` automaticaly fixes some issues
`--quiet` only show errors (not warnings)

The CI will reject code with errors. The warnings are more for
us. What throws errors vs warnings is also set in the config file.
