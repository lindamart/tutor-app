const router = require("express").Router()
const Video = require("../../models/Video")
// Video
router.get("/", async (req, res) => {
  const videos = await Video.find({})
  res.json(videos)
})

router.get("/:subject", async (req, res) => {
  const {subject} = req.params
  const videos = await Video.find({subject})
  res.json(videos)
})

module.exports = router