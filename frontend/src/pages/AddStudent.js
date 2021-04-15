import Layout from './../components/Layout/Layout';
import StudentAddComponent from './../components/Student/StudentAddComp';

const AddStudent = ()=>{
    return (
        <Layout>
            <div className="container-fluid mt-2">
                <div className="row">
                    <div className="offset-md-2 col-md-8">
                        <StudentAddComponent />
                    </div>  
                </div>
            </div>
        </Layout>
    )
}
export default AddStudent;