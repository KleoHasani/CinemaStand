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
    - Run "./scripts/init_db.sh" script.
    - Run "./scripts/init_env.sh" script. (Make sure OpenSSL) is installed.

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

| File   | Test         | Name           | Description | Status                                                    |
| :----- | :----------- | :------------- | :---------- | --------------------------------------------------------- |
| Test 1 | ExampleTest  | Test 1 Testing | Pass        | <p style="color: green; text-align: center;">&#10003;</p> |
| Test 2 | ExampleTest2 | Test 2 Testing | Fail        | <p style="color: red; text-align: center;">&#65794;</p>   |

</small>

| File | Test                               | Name                 | Description                                 | Status                                                    |
| :--- | :--------------------------------- | :------------------- | :------------------------------------------ | --------------------------------------------------------- |
| Auth | POST - Register - /api/v1/register | should register user | User registered                             | <p style="color: green; text-align: center;">&#10003;</p> |
|      |                                    | should not register  | First name can not be empty                 | <p style="color: green; text-align: center;">&#10003;</p> |
|      |                                    |                      | First name is not valid                     | <p style="color: green; text-align: center;">&#10003;</p> |
|      |                                    |                      | SQL_INJECTION_DETECTED                      | <p style="color: red; text-align: center;">&#65794;</p>   |
|      |                                    |                      | Last name can not be empty                  | <p style="color: green; text-align: center;">&#10003;</p> |
|      |                                    |                      | Last name is not valid                      | <p style="color: green; text-align: center;">&#10003;</p> |
|      |                                    |                      | Last name is not valid                      | <p style="color: green; text-align: center;">&#10003;</p> |
|      |                                    |                      | SQL_INJECTION_DETECTED                      | <p style="color: red; text-align: center;">&#65794;</p>   |
|      |                                    |                      | Email can not be empty                      | <p style="color: green; text-align: center;">&#10003;</p> |
|      |                                    |                      | Email already exists                        | <p style="color: green; text-align: center;">&#10003;</p> |
|      |                                    |                      | Password can not be empty                   | <p style="color: green; text-align: center;">&#10003;</p> |
|      |                                    |                      | Password is not valid                       | <p style="color: green; text-align: center;">&#10003;</p> |
|      |                                    |                      | Password must contain at least 8 characters | <p style="color: green; text-align: center;">&#10003;</p> |
|      |                                    |                      | SQL_INJECTION_DETECTED                      | <p style="color: red; text-align: center;">&#65794;</p>   |
|      | POST - Login - /api/v1/login       | should login         | User authenticated                          | <p style="color: green; text-align: center;">&#10003;</p> |
|      |                                    |                      | Email can not be empty                      | <p style="color: green; text-align: center;">&#10003;</p> |
|      |                                    |                      | Email already exists                        | <p style="color: green; text-align: center;">&#10003;</p> |
|      |                                    |                      | Password can not be empty                   | <p style="color: green; text-align: center;">&#10003;</p> |
|      |                                    |                      | Password is not valid                       | <p style="color: green; text-align: center;">&#10003;</p> |
|      |                                    |                      | SQL_INJECTION_DETECTED                      | <p style="color: red; text-align: center;">&#65794;</p>   |
