# Introduction to node_hello

Hello World app in Node Dockerize!

## Before you begin
In order to run this hello app in you machine you need to have the following software installed:
* Install [Docker](https://docs.docker.com/install/#supported-platforms)
* Install [NodeJS](https://nodejs.org/en/download)

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.


Create a local image of the hello app
```sh
docker build -t hello .
```

Run the newly create hello app docker image
```sh
docker run -p 3000:3000 -d hello
```

Test the [Hello World](http://localhost:3000) app
```sh
curl http://localhost:3000
```
