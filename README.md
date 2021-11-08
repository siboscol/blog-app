# Simo's Simple Blog

Simple Blog App built with NodeJs (Express) and VueJs (Quasar).  
This sample web app consists of a server (nodejs) and a client (Quasar) with NO actual storage and the data are mocked in json file (_server/api/data/posts.json_).  
The backend provides APIs for:
- Get all posts
- Get/create a post
- Get all comments for a specific post
- Get/Create/Update a comment

The frontend provides a:  
- Homepage with a list of posts and comments total
- Post page with title/blody and a list of comments
    - it's possible to create/edit a comment
- About page with my current CV

The app provides unit tests for both server and client, together with a dockerfile to run it in a container.
## Getting Started

```shell
# install server dependencies
npm install 
# or
yarn

# run server in development mode
npm run dev
# or
yarn dev

# In a separate terminal 
# install client dependencies
cd client
npm install 
# or
yarn

# run client in development mode
npm run dev
# or
yarn dev
```

## Try It
* Go to [http://localhost:8080](http://localhost:8080) to see the client
* In order to see all endpoints specification go to [http://localhost:3000/api-explorer/](http://localhost:3000/api-explorer/)

## Install Dependencies

Install all server package dependencies (one time operation)

```shell
npm install
# or
yarn
```

Install all client package dependencies (one time operation)

```shell
cd client
npm install
# or
yarn
```

## Run It
#### Run in *development* mode:
Runs the application is development mode. Should not be used in production

```shell
# run server in development mode
npm run dev
# or
yarn dev

# run client in development mode
cd client
npm run dev
# or
yarn dev
```

or debug the server (See vscode section)

```shell
npm run dev:debug
# or
yarn dev:debug
```

#### Run in *production* mode:

Compiles the application and starts it in production production mode.

```shell
npm run compile
# or
yarn compile

npm start
# or
yarn start

# build client in production mode to be served by a web server
cd client
npm run build
# or
yarn build
```

#### Run it in a docker container
In this `Dockerfile` the nodejs server and quasar client are together in the same container although it's definitely possible to have them separately by creating 2 different dockerfiles where the quasar client will served by an nginx web server (https://vuejs.org/v2/cookbook/dockerize-vuejs-app.html) and the nodejs server follows the same stage as in the current dockerfile.

```
# Build the docker image
docker build -t blog-image .
# Run the container
docker run -it -p 3000:3000 --name blog-container blog-image
```
* Open your browser to [http://localhost:3000](http://localhost:3000)
* In order to the APIs documentation go to [http://localhost:3000/api-explorer/](http://localhost:3000/api-explorer/)

## Test It

Run the Mocha unit tests for the server 

```shell
# test server
npm test
# or
yarn test
```

or debug test server

```shell
npm run test:debug
# or
yarn test:debug
```

Run the Jest unit tests for the client 

```shell
npm run test:unit
# or
yarn test:unit
```

See scripts in _client/package.json_ for available tests.
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

On the `launch.json` file there are configurations to attach to a process, debug the tests and debug the server.

In order to debug the server and obtain prettier logs, install globally pino-pretty:
```
yarn global add pino-pretty
```
## Lint It

View prettier linter output for the server

```
npm run lint
# or 
yarn lint
```

Fix all prettier linter errors

```
npm run lint:fix
# or
yarn lint:fix
```

