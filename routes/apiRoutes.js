const router = require("express").Router();
const Workout = require("../models/workout");

//make a get route @ "/api/workouts"

//make a put route @ "/api/workouts/:id"

//make a post route @ "/api/workouts"

//make a get route @ "/api/workouts/range"


router.post("/api/transaction", ({ body }, res) => {
  Transaction.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get("/api/transaction", (req, res) => {
  Transaction.find({})
    
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;