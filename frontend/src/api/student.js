//@Get- students data 
//@return Success//failure message.
export const getStudentData = ()=>{
    return fetch("http://localhost:8000/api/",{
        method:"GET"
    }).then((res=>res.json()))
    .catch(err=>console.log(err));
}
//@Get- student data 
//@return Success//failure message.
export const getSingleStudentData = (id)=>{
    return fetch("http://localhost:8000/api/"+id,{
        method:"GET"
    }).then((res=>res.json()))
    .catch(err=>console.log(err));
}
//@Post- student data 
//@return Success//failure message.
export const addStudentData = (data)=>{
    return fetch("http://localhost:8000/api/add/student",{
        method:"POST",
        headers:{
            Accept:"application/json",
            'Content-Type':"application/json"
        },
        body:JSON.stringify(data)
    }).then((res=>res.json()))
    .catch(err=>console.log(err));
}
//@Put- student data 
//@return Success//failure message.
export const updateStudentData = (data,id)=>{
    return fetch("http://localhost:8000/api/update/student/"+id,{
        method:"PUT",
        headers:{
            Accept:"application/json",
            'Content-Type':"application/json"
        },
        body:JSON.stringify(data)
    }).then((res=>res.json()))
    .catch(err=>console.log(err));
}

//@delete- student data delete 
//@return Success//failure message.
export const deleteStudentData = (id)=>{
    return fetch("http://localhost:8000/api/delete/student/"+id,{
        method:"DELETE"
    }).then((res=>res.json()))
    .catch(err=>console.log(err));
}
