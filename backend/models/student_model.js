const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    studentId:{
        type:String,
        unique:true,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    gender:{
        type:String
    },
    address:{
        type:String
    },
    DOB:{
        type:String
    }
});

module.exports = mongoose.model("Student",studentSchema);
