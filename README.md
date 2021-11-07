# Simple Blog

Simple Blog App built with NodeJs and Quasar.

## Get Started

Get started developing...

```shell
# install deps
npm install

# run in development mode
npm run dev

# run tests
npm run test
```

## How to add new APIs

There are two key files that enable you to customize and describe your API:
1. `server/routes.js` - This references the implementation of all of your routes. Add as many routes as you like and point each route your express handler functions.
2. `server/common/api.yaml` - This file contains your [OpenAPI spec](https://swagger.io/specification/). Describe your API here. It's recommended that you to declare any and all validation logic in this YAML.

## Install Dependencies

Install all package dependencies (one time operation)

```shell
npm install
```

## Run It
#### Run in *development* mode:
Runs the application is development mode. Should not be used in production

```shell
npm run dev
```

or debug it

```shell
npm run dev:debug
```

#### Run in *production* mode:

Compiles the application and starts it in production production mode.

```shell
npm run compile
npm start
```

## Test It

Run the Mocha unit tests

```shell
npm test
```

or debug them

```shell
npm run test:debug
```

## Try It
* Open your browser to [http://localhost:3000](http://localhost:3000)
* In order to see all endpoints and to test them go to [http://localhost:3000/api-explorer/](http://localhost:3000/api-explorer/)


## Debug It

#### Debug the server:

```
npm run dev:debug
```

#### Debug Tests

```
npm run test:debug
```

#### Debug with VSCode

On the `launch.json` file there are configuration to attach to a process, debug the tests and debug the server.

In order to debug the server and obtain prettier logs, install globally pino-pretty:
```
yarn global add pino-pretty
```
## Lint It

View prettier linter output

```
npm run lint
```

Fix all prettier linter errors

```
npm run lint
```


   
