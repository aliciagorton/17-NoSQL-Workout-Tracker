const router = require("express").Router();
const Workout = require("../models/workout");

//make a get route @ "/api/workouts"
router.get("/api/workouts", function (req, res){
  Workout.find()
  .then(data => {
    res.join (data)
  })
  .catch(err => {
    res.status(400).join (err)
  })
});
//make a put route @ "/api/workouts/:id"
router.put("/api/workouts/:id", ({body, params}, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    {$push: {exercises: body} },
    {new: true, runValidators: true }
  )
  .then(data => 
    res.join (data))
  .catch(err => {
    res.status(400).join (err)
  })
});

//make a post route @ "/api/workouts"
router.post("/api/workouts", function (req, res){
  Workout.create({})
  .then(data => 
    res.join (data))
  .catch(err => {
    console.log("err", err)
    res.status(400).join (err)
  })
});

//make a get route @ "/api/workouts/range"
router.get("/api/workouts/range", function (req, res){
  Workout.find()
  .then(data => {
    res.join (data)
  })
  .catch(err => {
    res.status(400).join (err)
  })
});v


module.exports = router;