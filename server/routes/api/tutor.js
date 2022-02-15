const router = require("express").Router()
const Tutor = require("../../models/Tutor")

router.get("/", async (req, res) => {
  const tutors = await Tutor.findAll({})
  res.json(tutors)
})

router.get("/:subject", async (req, res) => {
  const {subject} = req.params
  const tutors = await Tutor.findAll({subject})
  res.json(tutors)
})

module.exports = router