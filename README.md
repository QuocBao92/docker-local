# imo-local-integration

The objective is to start imo micro services in local environment for debug.

## Setup

```sh
# 1. Install docker

# 2. update ddl and test data of database
  in setup-sql directory
  edit "01_ddl.sql" and "02_testdata.sql" about imo database
  edit "11_ddl.sql" and "12_testdata.sql" about imo-adaptor database

# 3. build and deploy docker images
  1. edit ./repository-gitbranch.json, There is description of properties below.
  2-0. execute `npm ci` if you try first
  2-1. execute `npm run start` to build docker images of all services and start docker compose

```

about all properties of repository-gitbranch.json

```json
{
  "name": "just name to identify each services",
  "enableBuild": "if true, docker build will start for this service, otherwise docker build will skip",
  "dirPath": "directory path where dockerfile for this service exist in your local machine",
  "branch": "git branch name of which you want to docker build",
  "imageName": "name of built docker image"
}
```

## Usage

```sh
# Start containers
$ docker-compose up -d

# check containers
$ docker ps

# view log of container
#   * You can check {container_name} by executing `docker ps`
$ docker logs {container_name}

# stop containers
$ docker-compose down
```

## Usage to connect to the imo-front-end

If you want to use these containers to connect to the imo-front-end,

imo-front-end/src/environment/environment.ts

```js
export const environment = {
  production: false,
  endpoints: {
    bff: "http://localhost:4001",
  },
};
```
