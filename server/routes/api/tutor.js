const router = require("express").Router()
const Tutor = require("../../models/Tutor")
// Tutor
router.get("/", async (req, res) => {
  const tutors = await Tutor.find({})
  res.json(tutors)
})

router.get("/:subject", async (req, res) => {
  const {subject} = req.params
  const tutors = await Tutor.find({subject})
  res.json(tutors)
})

module.exports = router