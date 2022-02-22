const router=require("express").Router()
const tutorRouter=require("./tutor")
const videoRouter=require("./video")

router.use("/tutor",tutorRouter)
router.use("/video",videoRouter)

module.exports=router