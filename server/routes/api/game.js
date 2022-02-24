const router = require("express").Router()
const Game = require("../../models/Game")

router.get("/", async (req, res) => {
  const games = await Game.find({})
  res.json(games)
})

router.get("/:subject", async (req, res) => {
  const {subject} = req.params
  const games = await Game.find({subject})
  res.json(games)
})

module.exports = router