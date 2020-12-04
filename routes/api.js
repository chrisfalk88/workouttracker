const router = require("express").Router();
const { isValidObjectId } = require("mongoose");
const db = require("../models");

// Get all workouts

router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((workoutResponse) => {
      res.json(workoutResponse);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Update to one Workout

router.put("/api/workouts/:id", (req, res) => {
  const { body, params } = req;

  db.Workout.findByIdAndUpdate(params.id, {
    $push: { exercises: body },
  })
    .then((workoutResponse) => {
      res.json(workoutResponse);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Create a new empty Workout

router.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body)
  .then((workoutResponse) => {
    res.json(workoutResponse);
  })
  .catch((err) => {
    res.status(400).json(err);
  });
})

///api/workouts/range GET

router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .then((workoutResponse) => {
      res.json(workoutResponse);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});


module.exports = router;
