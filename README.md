# README

# Latest Deployment

[![CircleCI](https://circleci.com/gh/WorkHardPittsburgh/MyGS/tree/master.svg?style=svg&circle-token=178da28dfd4d0cb18db41aedf2f4db14db10886e)](https://circleci.com/gh/WorkHardPittsburgh/MyGS/tree/master)

If the above badge is green, the link below will be the deployed code from the latest commit on master.

http://104.131.79.5:3000

An example endpoint exists at `/animal.json`, which loads an animal
that is displayed as the 3rd item in the the `Rewards` component.

# Workflow

## starting backend server
Run `docker-compose build` then `docker-compose up`

## starting frontend server

We'll run this locally for now.
- `cd ./client && npm install` -- install deps
- `cd ./client && npm start`   -- start client server

## server ports

Client: `localhost:8080`

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
