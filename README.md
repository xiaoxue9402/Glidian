# Glidian Technical Interview

## Your assignment

This repo includes the boilerplate for a simple React-based user management app. During the
interview, we will provide a few requirements and ask you to build them out in real time.

To prepare, we recommend you spend 15-30 minutes exploring this repo. Here are some things to focus on:

1. Run `npm install` and then `npm run start:backend` and `npm run start:frontend` (in different terminals)
   to make sure you're able to run the app successfully.
2. Familiarize yourself with the basic structure of the React front-end and Express backend (see additional notes below)
3. Familiarize yourself with the database layer
4. Set up anything else you'd need to be ready to go, like your IDE of choice or other packages you like to include.
   (If you'd prefer to complete your interview in a different framework than React or express, feel free -- the requirements
   in the interview will not be specific to React or express -- but please swap them out in advance and test fully so that
   they'll work smoothly during your interview).

After your interview, please send us the final code you wrote so we have have it as a reference during the
hiring process. Here's the easiest way to do that:

```sh
# 1. Commit all of your work to git as usual (remember to include new created files)
git add [new files]
git add --updated
git commit -m "your commit message"

# 2. Create a git "bundle"
git bundle create <yourname>.bundle main

# 3. Email the bundle to us. Thanks in advance!
```

## App Structure

### Frontend

This is a basic React-based app. Code is in the `src` folder. The most relevant files for you are:

- `src/App.jsx` and `src/UsersList.jsx` are the main React components you'll be building.
- `src/api.js` contains methods for interacting with the backend via the `fetch` interface.

### Backend

The backend is a basic Express server that exposes a few endpoints. Code is in the `backend` folder.
The most relevant files for you are:

- `backend/users.js` is where you should plan to build your endpoints
- `backend/index.js` is mostly boilerplate, but may be a helpful resource if you're not familiar with express

### Available scripts

- `npm install` installs dependencies
- `npm run start:backend` will start the backend and serve it
  from http://localhost:5000.
- `npm run start:frontend` will start the backend and serve it
  from http://localhost:3000, proxying backend requests to :5000.
  (this command will fail if start:backend is not running)
- `npm test` will run unit tests

Open [http://localhost:3000](http://localhost:3000) to access the front-end in the browser.

_Note: when running `npm install`, you may get a bunch of noisy warnings from sqlite. This is expected
and should be safe to ignore._

### Models and Database

In this app we'll be working with two models: `User` and `Group`.
A `Group` can have 0 or more `User`s and a `User` can belong to 0 or more `Group`s.

Model data is stored in an in-memory-only database through [Sequelize](https://sequelize.org/master/).
We don't expect you to be familiar with Sequelize and are happy to help with the query syntax during the interview.
Here are some basics that may be helpful:

```js
// We expose two models, `User` and `Group` which you can import from the db module
const { User, Group } = require("./db");

// The initial dataset is provided in `./db/fixtures.js`.  Each time you make a backend change,
// the database will be recreated from this fixture. During the interview, we'll provide a more complete
// dataset to drop in

// Querying basics (see also https://sequelize.org/master/manual/model-querying-basics.html)
// ---------------

// Find a specific User by id
// equivalent to SQL: select * from User where id = 1;
const mal = await User.findByPk(1);

// Find a User by some other attribute
// equivalent to SQL: select * from User where nickname = 'Zoe';
const zoe = await User.findOne({ where: { nickname: "Zoe" } });

// Find multiple Users by id
// equivalent to SQL: select * from User where id in (1, 2);
const users = await User.findAll({ where: { id: [1, 2] } });

// Find all Users
// equivalent to SQL: select * from User;
const users = await User.findAll({});

// Find all Groups that a User belongs to
const wash = await User.findByPk(3);
const groups = await wash.getGroups();

// Find all Users in a Group
const crew = await User.findByPk(2);
const users = await crew.getUsers();

// Updating basics
// ---------------

// Updating a record
// equivalent to SQL: update User set nickname = 'Ambassador' where id = 5;
const inara = await User.findByPk(5);
await inara.update({ nickname: "Ambassador" });

// Manipulating records
// --------------------

// Control which attributes are returned from a query
// equivalent to SQL: select id, name from User;
const users = await User.findAll({ attributes: ["id", "name"] });

// Note that returned objects are Sequelize instances with a lot of extra functionality.
// To convert into a simple javascript object, do this:
const plainObject = mal.toJSON();
```

## Miscellaneous

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project was tested using Node.js v12.16.1.
While it may work with earlier versions, we strongly recommend using the above version or later.
(Multiple versions of Node.js can be installed using [nvm](https://github.com/nvm-sh/nvm).)
