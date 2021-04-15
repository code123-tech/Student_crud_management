require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

//DataBase
try{
  mongoose.connect(process.env.DATABASE,{useNewUrlParser:true,useCreateIndex:true,useFindAndModify:false,useUnifiedTopology:true})
  .then(()=>console.log("connection"))
  .catch((err)=>console.log(err));
}catch(err){
  console.log(err);
}
//Blog and user Authentication Routes
const studentRoute = require("./routes/student_route");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//routes
try{
  app.use("/api",studentRoute);
}
catch(err){
  console.log("Error in adding Routes");
}

const port = process.env.PORT || 8000;
try
{app.listen(port,()=>{
  console.log(`Server is running at port ${port}`);
});}catch(err){
  console.log("Error in connecting to Server");
}