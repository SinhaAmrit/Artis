const path=require("path"),express=require("express"),dotenv=require("dotenv").config(),port=process.env.PORT||5e3,app=express();app.use(express.json()),app.use(express.urlencoded({extended:!1})),app.use(express.static(path.join(__dirname,"public"))),app.use("/api",require("./routes/openaiRoutes")),app.listen(port,()=>console.log("listening on port ${port}"));
