import { useState } from 'react';
import Loading from './../utility/loading';
import Error from './../utility/error';
import Success from './../utility/success';
import { Form,Button } from 'react-bootstrap';
import { addStudentData } from '../../api/student';
import { useHistory } from 'react-router-dom';

const StudentAddComponent = ()=>{
    const history = useHistory();
    const [studentInfo,setStudentInfo] = useState({
        id:"",
        name:"",
        mobile:"",
        gender:"",
        address:"",
        dob:""
    });
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState("");
    const [message,setMessage] = useState("");

    const {id,name,mobile,gender,address,dob} = studentInfo;

    const handleSubmit = (event)=>{
        event.preventDefault();
        setLoading(true);
        setError("");
        setMessage("");  
        addStudentData({id,name,mobile,gender,address,dob}).then((result)=>{
            if(result && result.error){
                setError(result.error);
            }else if(result && result.message){
                setMessage(result.message);
                history.push("/");
            }
        })
    }
    const handleChange = data => event=>{
        setLoading(false);
        setError("");
        setMessage("");
        setStudentInfo({...studentInfo,[data]:event.target.value});
    }
    return (
        <>
            <Loading loading={loading} />
            <Error error={error} />
            <Success message={message} />
            <Form autoComplete="off" onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Label htmlFor="studentId">Enter Student Id:</Form.Label>
                    <Form.Control 
                        value={id}
                        name="id"
                        type="text" 
                        onChange={handleChange("id")}
                        placeholder="Enter a Student Id" 
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
                <Button variant="primary" type="submit" className="mt-2">Add</Button> 
            </Form>
        </>
    )
}

export default StudentAddComponent;