import { useParams } from 'react-router';
import Layout from './../components/Layout/Layout';
import StudentUpdateComponent from './../components/Student/StudentUpdateComp';

const UpdateStudent = ()=>{
    const {id} = useParams();
    return (
        <Layout>
            <div className="container-fluid mt-2">
                <div className="row">
                    <div className="offset-md-2 col-md-8">
                        <StudentUpdateComponent _id={id}/>
                    </div>  
                </div>
            </div>
        </Layout>
    )
}
export default UpdateStudent;