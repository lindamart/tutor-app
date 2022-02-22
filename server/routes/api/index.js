const router=require("express").Router()
const tutorRouter=require("./tutor")

router.use("/tutor",tutorRouter)

module.exports=router