const Student = require("../models/student_model");
const { uuid } = require('uuidv4');

// @function - GET (Read Operation)
// @param - request,response Object
// @return - Student Data
exports.getStudentList = (req,res)=>{
    Student.find({}).then((data,err)=>{
        if(err)
            return res.status(500).json({error:"Server Error, Please Try Again."});
        
        res.status(200).json(data);
    });
}
// @function - GET Single Student(Read Operation)
// @param - request,response Object
// @return - Student Data
exports.getStudent = (req,res)=>{
    Student.findOne({_id:req.params.id}).then((data,err)=>{
        if(err)
            return res.status(500).json({error:"Server Error, Please Try Again."});
        
        res.status(200).json(data);
    });
}
// @function - POST (Create Operation)
// @param - request,response Object
// @return - Add new Student Data
exports.addStudent = (req,res)=>{
    //Check Student id already exist or not.
    Student.findOne({studentId:req.body.id}).then((data,err)=>{
        if(err){
            return res.status(500).json({error:"Server Error, Please Try Again."});
        }
        if(data){
            return res.status(403).json({message:"Student Already Exist with given id."});
        }
        const student = new Student({
            studentId:req.body.id?req.body.id:uuid(),
            name:req.body.name,
            mobile:req.body.mobile,
            gender:req.body.gender,
            address:req.body.address,
            DOB:req.body.dob
        });
        student.save()
            .then((result)=>{
                res.status(200).json({message:"Student Added Successfully Done."});
            }).catch(err=>{
                res.status(500).json({error: "Server Error occured.",});
            })
    })
}
// @function - PUT (Update Operation)
// @param - request,response Object
// @return - Update existing Student Data
exports.updateStudent = (req,res)=>{
    console.log(req.params.id);
    Student.findByIdAndUpdate({_id:req.params.id},
            {
                $set:{
                    studentId:req.body.id,
                    name:req.body.name,
                    mobile:req.body.mobile,
                    gender:req.body.gender,
                    address:req.body.address,
                    DOB:req.body.dob
                }
            },
            {new:true}
    ).exec()
    .then((result)=>{
        res.status(200).json({message:"Student Updated Successfully Done."});
    }).catch(err=>{
        console.log(err)
        res.status(500).json({error:"Server Error occured."})
    })
}
// @function - DELETE (delete Operation)
// @param - request,response Object
// @return - Update existing Student Data
exports.deleteStudent = (req,res)=>{
    const id = req.params.id;
    Student.deleteOne({_id:id})
        .exec()
        .then((result)=>{
            res.status(200).json({message: "Student Data Deleted"});
        }).catch(err=>{
            res.status(500).json({error: "Internal Server Error."});
        })
}
