<p align="center">
  <img src="https://iili.io/Zyly0b.png" width="200" alt="Yelp doc" />
</p>

  <p align="center">A complete  health care app from searching doctor to online appointment to medical history to feedback.</p>

## Table of Contents

- [Description](#description)
- [Backend API](#backend-api)
- [Backend Installation](#backend-installer)
- [Frontend](#frontend)
- [General Info](#general-info)
- [Main Features](#main-features)
- [Technologies](#technologies)
- [Quick Start](#quick-start)

## Description

YelpDoc is divided into two folder:
- Backend
- Frontend

# Backend API
Backend is created on following technologies:

1. Nestjs (nodejs framework)
2. Auth0 (for authentication)
3. CockroachDb (for database)
4. Twilio (for notification)
5. Cohere.ai (for natural processing)

- Need to create the account in Auth0, create the API app and get copy `audience` and `domain`.
- Need to create the account in CockroachDb Cloud console, create the database in cluster and copy the param `username`, `host`, `password`, `database`, `port` & `cluster`.
- Need to create the account in Twilio, verify phone number and get `account_sid`, `auth_token`, the sending `phone number`.
- Need to create the account in cohere, select `generate` and `classify` product then get `api_key`.

## Backend Installation

```bash
$ cd backend
$ npm install
```

once you created the account on above software and got the information which mentioned on above. you need to create `.env` file at root of `backend` folder.
add these text and replace with your info. and save
```
COCKROACHDBUSERNAME=
COCKROACHDBHOST=
COCKROACHDBPASSWORD=
COCKROACHDBDATABASE=
COCKROACHDBCLUSTER=
COCKROACHDBPORT=
COCKROACHDBURI=
AUTH0_AUDIENCE=
AUTH0_DOMAIN=
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
COHERE_API=
FROM_TWILLO=
TO_TWILLO=
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


# Frontend
Frontend is mobile application project created with Expo, React Native and some wonderful libraries for React Native application.

## General Info

This Yelp Mobile application allows customers to create their account for health checking and book an appointment with their desired doctors.

## Main Features

- Complex navigation (Tab, Stack, TabView)
- Sign up credentials and login, sign out
- Get current date and date format
- Search doctor, filter by First Name and Last Name
- Book an appointment with the doctor by choosing time and select one meeting option. There are 3 options for meeting with the doctor: Audio Chat, Video Conference, Contact Meeting.
- Check the booking in the Appointment Screen

## Technologies

- Expo
- React Native
- React Native Elements
- React Native Vector Icons
- React Navigation V6
- React Native Community - datetimepicker V4
- Date-fns format
- Radio Button React Native V1

## Quick Start

Here are some steps to run this project:

1. Clone the project

```
https://github.com/alammoiz/yelpdoc.git
```

2. Download node_modules

```
$ cd frontend
$ npm install
```

3. Run Expo

```
expo start
```
