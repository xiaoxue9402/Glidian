/****************************************************************************************
 * YOU CAN MOSTLY IGNORE THIS FILE
 * This file implements a basic Express server for the backend. We recommend adding
 * your endpoints in the `users.js` file. If you're not familiar with Express, you
 * may find it helpful to copy the outline of the `/groups` endpoint below, which
 * also demonstrates a basic use of the database
 ****************************************************************************************/

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const { Group, User } = require("./db");
const userRoutes = require("./users");

const app = express();

app.use(bodyParser.json());

app.use("/", express.static(path.resolve(__dirname, "..", "build")));

app.use("/users", userRoutes);

app.get("/groups", async (req, res, next) => {
  try {
    res.json(await Group.findAll({ attributes: ["id", "name"] }));
  } catch (error) {
    next(error);
  }
});

app.get("/groups/:group/users", async (req, res, next) => {
  try {
    let group = await Group.findByPk(req.params.group)
    res.json(await group.getUsers());
  } catch (error) {
    next(error);
  }
})

app.listen(5000, () => {
  console.log("App running on http://localhost:5000");
});

module.exports = app;
