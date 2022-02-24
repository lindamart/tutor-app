const router=require("express").Router()
const tutorRouter=require("./tutor")
const videoRouter=require("./video")
const gameRouter=require("./game")

router.use("/tutor",tutorRouter)
router.use("/video",videoRouter)
router.use("/game",gameRouter)

module.exports=router