<p align="center">
	<img src="docs/assets/logo.png" width="150" height="200">
</p>

---

# Cinema Stand ![kleohasani-version](https://img.shields.io/github/package-json/v/kleohasani/CinemaStand)

## Description

**(API)** A place to keep all your movies and TV shows in one directory. Cinema Stand provides and API that can be consumed from the web, mobile or even desktop.

- Cinema Stand was created to make it easier for collectors and movie buffs to keep track of their movies and TV shows.
- Ever wanted to keep track of all your movies and TV shows and access your collection from anywhere? Well this is the place. Cinema Stand is your collection of all your movies and TV shows, so now you can always showcase your collection to anyone. For those true movie buffs out there.
- Cinema Stand can provide search and sorting functionality to the end user.
- Well organized and easy to add new movie or TV show to your collection.

---

## Table of Contents

- [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [Installation](#installation)
    - [Clone](#clone)
    - [Install](#install)
    - [Set-Up](#set-up)
    - [Start](#start)
    - [Dev](#dev)
  - [Test](#test)
- [Authors](#authors)
- [Usage](#usage)
- [Tests](#tests)

---

## Getting Started

- ## Requirements

  - [x] Node v16.3.0
  - [x] NPM v7.15.1

- ## Installation

  - ### Clone

    ```bash
    git clone https://github.com/KleoHasani/CinemaStand.git
    ```

  - ### Install

    ```npm
    npm install
    ```

  - ### Set-Up

    - Install Postgres Database.
    - Config Postgres with user.
    - Run "./scripts/init.sh" script.
    - Create ".env" files in \"./env\".

      **.env**

      ```dotenv
        DOMAIN="youralloweddomain"
        PORT=80

        DB_HOST="yourdbIPaddress"
        DB_PORT=5432
        DB_DATABASE="cinemastand"
        DB_NAME="yourdbusername"
        DB_PASSWORD="yourpasswordhere"
      ```

      **.env.dev**

      ```dotenv
        DOMAIN="localhost"
        PORT=8080

        DB_HOST="127.0.0.1"
        DB_PORT=5432
        DB_DATABASE="cinemastand_dev"
        DB_NAME="yourdbusername"
        DB_PASSWORD="yourpasswordhere"
      ```

      **.env.test**

      ```dotenv
        DOMAIN="localhost"
        PORT=8080

        DB_HOST="127.0.0.1"
        DB_PORT=5432
        DB_DATABASE="cinemastand_test"
        DB_NAME="yourdbusername"
        DB_PASSWORD="yourpasswordhere"
      ```

  - ### Start

    ```npm
    npm run start
    ```

  - ### Dev
    ```npm
    npm run start:dev
    ```

- ## Test

  ```npm
  npm run test
  ```

---

## Authors

Kleo Hasani

---

## Usage

---

## Tests

<small>Test Example:

| Test        | Name          | Status                                                    |
| :---------- | :------------ | :-------------------------------------------------------- |
| ExampleTest | Test 1 - Pass | <p style="color: green; text-align: center;">&#10003;</p> |
| ExampleTest | Test 2 - Fail | <p style="color: red; text-align: center;">&#65794;</p>   |

</small>

---

| Test | Name | Status |
| :--- | :--- | :----- |

---
