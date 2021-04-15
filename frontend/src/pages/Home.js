import Layout from './../components/Layout/Layout';
import StudentList from './../components/Student/studentlist';

const Home = ()=>{
    return (
        <Layout>
            <div className="container-fluid">
                <div className="row">
                    <div className="offset-md-2 col-md-8 mt-2">
                        <StudentList />
                    </div>  
                </div>
            </div>
        </Layout>
    )
}
export default Home;