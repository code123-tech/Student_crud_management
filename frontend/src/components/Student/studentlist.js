import {useEffect,useState} from "react";
import { Accordion,Card,Button } from "react-bootstrap";
import { getStudentData,deleteStudentData } from './../../api/student';
import { Link} from 'react-router-dom';

const StudentList = ()=>{
    const [data,setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = ()=>{
        getStudentData().then(studentdata=>{
            setData(studentdata);
        });
    }

    const handleClick = id=>event=>{
        event.preventDefault();
        deleteStudentData(id).then(data=>{
            if(data && data.error){
                alert(data.error);
            }else if(data && data.message){
                alert(data.message);
                window.location.reload();
            }
        })
    }
    const ShowList = (data)=>{
        return (
            <Accordion>
                {data.map((info,key)=>{
                    return(
                        <Card key={key}>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey={key+1}>
                                    Student Id - {info.studentId?info.studentId:key+1}
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey={key+1}>
                                <Card.Body>
                                    <ul style={{listStyleType:"none"}}>
                                        <li><span className="text-dark">Student Id:</span> {info.studentId?info.studentId:key+1}</li>
                                        <li><span className="text-dark">Student Name:</span> {info.name?info.name:"Student"}</li>
                                        <li><span className="text-dark">Student Moble No:</span> {info.mobile?info.mobile:"Not Found"}</li>
                                        <li><span className="text-dark">Student Gender:</span> {info.gender?info.gender:"Male"}</li>
                                        <li><span className="text-dark">Student DOB:</span> {info.DOB?info.DOB:"Not-found"}</li>
                                        <li><span className="text-dark">Student address:</span> {info.address?info.address:"Not-found"}</li>
                                    </ul>
                                    <Link to={`/update/student/${info._id}`} className="btn btn-primary">
                                        Update Details
                                    </Link>
                                    <Button className="btn btn-danger ml-2" onClick={handleClick(info._id)}>
                                        Delete Data
                                    </Button>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    )
                })}
            </Accordion>
        )
    }   

    return (
        <div className="container-fluid">
            {
                data&&data.length!==0?ShowList(data)
                :<h2 className="text-center">No Student Data Found</h2>
            }
        </div>
    )
}
export default StudentList;