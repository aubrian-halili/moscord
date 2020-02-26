## Features

  * List of features

## Installation

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 12.16.1 or higher is required.

Installing dependencies is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install
```

## Start the Server

```bash
$ npm start
```

  Access the API at: http://localhost:3000/api

## MongoDB

  To run the application, first install the MongoDB, then set the configuration values in config directory.

### Configuration

```bash
database: 'moscord-ecomm',
host: 'localhost',
port: 27017,
username: 'username',
password: 'password',
```

### Create A Database

```bash
$ mongo admin --username root --password PASSWORD
$ db = db.getSiblingDB('DATABASE_NAME')
```

### Create A User With All Privileges For A Database

```bash
$ db = db.getSiblingDB('DATABASE_NAME')
$ db.createUser( { user: "DATABASE_USER", pwd: "DATABASE_PASSWORD", roles: [ "readWrite", "dbAdmin" ]} )
```
