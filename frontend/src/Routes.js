import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './pages/Home';
import AddStudent from './pages/AddStudent';
import UpdateStudent from './pages/UpdateStudent';

const Routes = ()=>{
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/add-student" component={AddStudent}></Route>
                <Route exact path="/update/student/:id" component={UpdateStudent}></Route>
            </Switch>
        </Router>
    )
}
export default Routes;