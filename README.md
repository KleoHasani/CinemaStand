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

| File   | Method | Endpoint      | Test     | Name           | Description | Status   |
| :----- | :----- | :------------ | :------- | -------------- | ----------- | -------- |
| Test 1 | GET    | /api/v1/test1 | TestPass | This is a test | Test passed | &#10003; |
| Test 2 | POST   | /api/v2/test2 | TestFail | This is a test | Test failed | &#65794; |

</small>

| File         | Method | Endpoint                  | Test     | Name                | Description                                 | Status   |
| :----------- | :----- | :------------------------ | :------- | ------------------- | ------------------------------------------- | -------- |
| auth.test.js | POST   | **/api/v1/register**      | Register | should register     | User registered                             | &#10003; |
| \-           | \-     | /api/v1/register          | Register | should not register | First name can not be empty                 | &#10003; |
| \-           | \-     | /api/v1/register          | Register | should not register | SQL_INJECTION_DETECTED                      | &#10003; |
| \-           | \-     | /api/v1/register          | Register | should not register | First name is not valid                     | &#10003; |
| \-           | \-     | /api/v1/register          | Register | should not register | Last name can not be empty                  | &#10003; |
| \-           | \-     | /api/v1/register          | Register | should not register | Last name is not valid                      | &#10003; |
| \-           | \-     | /api/v1/register          | Register | should not register | Last name is not valid                      | &#10003; |
| \-           | \-     | /api/v1/register          | Register | should not register | SQL_INJECTION_DETECTED                      | &#10003; |
| \-           | \-     | /api/v1/register          | Register | should not register | Email can not be empty                      | &#10003; |
| \-           | \-     | /api/v1/register          | Register | should not register | Email already exists                        | &#10003; |
| \-           | \-     | /api/v1/register          | Register | should not register | Password can not be empty                   | &#10003; |
| \-           | \-     | /api/v1/register          | Register | should not register | Password is not valid                       | &#10003; |
| \-           | \-     | /api/v1/register          | Register | should not register | Password must contain at least 8 characters | &#10003; |
| \-           | \-     | /api/v1/register          | Register | should not register | SQL_INJECTION_DETECTED                      | &#10003; |
| \-           | \-     | **/api/v1/login**         | Login    | should login        | User authenticated                          | &#10003; |
| \-           | \-     | /api/v1/login             | Login    | should not login    | Email can not be empty                      | &#10003; |
| \-           | \-     | /api/v1/login             | Login    | should not login    | Email already exists                        | &#10003; |
| \-           | \-     | /api/v1/login             | Login    | should not login    | Password can not be empty                   | &#10003; |
| \-           | \-     | /api/v1/login             | Login    | should not login    | Password is not valid                       | &#10003; |
| \-           | \-     | /api/v1/login             | Login    | should not login    | SQL_INJECTION_DETECTED                      | &#10003; |
| \-           | GET    | **/api/v1/token_refresh** | Token    | should refresh      | Token refreshed                             | &#65794; |
| \-           | \-     | /api/v1/token_refresh     | Token    | should not refresh  | Missing token                               | &#65794; |
| \-           | \-     | /api/v1/token_refresh     | Token    | should not refresh  | Bad token                                   | &#65794; |
