/****************************************************************************************
 * ADD YOUR BACKEND ROUTES HERE  (they will be nested under `/users`)
 ****************************************************************************************/

const router = (module.exports = require("express").Router());
// const { User, Group } = require("./db")

module.exports = router;

// Quick guide to endpoint definition:
//  * router.get("/something")                --> simple GET url
//  * router.get("/something/:myVariable")    --> dynamic GET url, myVariable available in `req.params` (as a *string*)
//  * router.post("/something")               --> simple POST url, body available as `req.body`
//  * query parameters ("/something?foo=bar") --> available in `req.query` (as a *string*)

router.get("/", async (req, res, next) => {
  try {
    res.json("Doesn't do anything yet");
  } catch (error) {
    next(error);
  }
});
// router.get("/:group", async (req, res, next) => {
//   try {
//     // res.json(await);
//   } catch (error) {
//     next(error);
//   }
// });

// app.get("/groups", async (req, res, next) => {
//   try {
//     res.json(await Group.findAll({ attributes: ["id", "name"] }));
//   } catch (error) {
//     next(error);
//   }
// });
