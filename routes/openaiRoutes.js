const express=require("express"),{generateImage:r}=require("../controllers/openaiController"),router=express.Router();router.post("/v1.0",r),module.exports=router;
