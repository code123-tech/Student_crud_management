import { useState,useEffect  } from 'react';
import { getSingleStudentData,updateStudentData } from '../../api/student';
import { Form,Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const StudentUpdateComponent = ({_id})=>{
    const history = useHistory();
    const [studentInfo,setStudentInfo] = useState({
        id:"",
        name:"",
        mobile:"",
        gender:"",
        address:"",
        dob:""
    });
    const {id,name,mobile,gender,address,dob} = studentInfo;
    
    useEffect(()=>{
        getStudentData(_id);
    },[]);

    const getStudentData = (_id)=>{
        getSingleStudentData(_id).then((data)=>{
            setStudentInfo({id:data.studentId,name:data.name,mobile:data.mobile,gender:data.gender,address:data.address,dob:data.DOB});
        }).catch(err=>console.log(err));
    }

    const handleChange = data => event=>{
        setStudentInfo({...studentInfo,[data]:event.target.value});
    }

    const handleSubmit = (event)=>{
        event.preventDefault();  
        updateStudentData({id,name,mobile,gender,address,dob},_id).then((result)=>{
            if(result && result.error){
                alert(result.error);
            }else if(result && result.message){
                alert(result.message);
                history.push("/");
            }
        })
    }

    return (
        <Form autoComplete="off" onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Label htmlFor="studentId">Enter Student Id:</Form.Label>
                    <Form.Control 
                        value={id}
                        name="id"
                        type="text" 
                        onChange={handleChange("id")}
                        placeholder="Enter Student Id" 
                        required
                    />
                </Form.Row> 
                <Form.Row>
                    <Form.Label htmlFor="name">Enter Student Name</Form.Label>
                    <Form.Control 
                        value={name}
                        name="name"
                        type="text" 
                        onChange={handleChange("name")}
                        placeholder="Enter Student Name" 
                        required
                    />
                </Form.Row> 
                <Form.Row>
                    <Form.Label htmlFor="mobile">Enter Student Mobile Number</Form.Label>
                    <Form.Control 
                        value={mobile}
                        name="mobile"
                        type="text" 
                        onChange={handleChange("mobile")}
                        placeholder="Enter Student Mobile No." 
                        required
                    />
                </Form.Row> 
                <Form.Row>
                    <Form.Label htmlFor="gender">Enter Student Gender</Form.Label>
                    <Form.Control 
                        value={gender}
                        name="gender"
                        type="text" 
                        onChange={handleChange("gender")}
                        placeholder="Enter Student Gender" 
                        required
                    />
                </Form.Row> 
                <Form.Row>
                    <Form.Label htmlFor="address">Enter Student Address</Form.Label>
                    <Form.Control 
                        value={address}
                        name="address"
                        type="text" 
                        onChange={handleChange("address")}
                        placeholder="Enter Student Address" 
                        required
                    />
                </Form.Row> 
                <Form.Row>
                    <Form.Label htmlFor="dob">Enter Student DOB</Form.Label>
                    <Form.Control 
                        value={dob}
                        name="dob"
                        type="date" 
                        onChange={handleChange("dob")}
                        placeholder="Enter Student DOB" 
                        required
                    />
                </Form.Row> 
                <Button variant="primary" type="submit" className="mt-2">Update</Button> 
            </Form>
    )
}

export default StudentUpdateComponent;