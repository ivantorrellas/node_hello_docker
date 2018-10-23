# Introduction to node_reversed

Hello World app in Node Dockerize!

## Before you begin
In order to run this Hello World reversed app in you machine you need to have the following software installed:
* Install [Docker](https://docs.docker.com/install/#supported-platforms)
* Install [NodeJS](https://nodejs.org/en/download)
* Run the [Hello World](https://github.com/ivantorrellas/node_hello_reversed/tree/master/hello) app first!

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.


Create a local image of the reversed app
```sh
docker build -t reversed .
```

Run the newly create reversed app docker image
```sh
docker run -p 4000:4000 -d hello
```

Test the [Hello World Reversed!](http://localhost:4000) app
```sh
curl http://localhost:4000
```
