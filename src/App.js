import { Home } from './components/home/Home';
import Layout from './components/Layout';
import { Route, Switch } from 'react-router';
import TaskList from './components/tasks/TaskList';
import CreateTask from './components/tasks/CreateTask';
import EditTask from './components/tasks/EditTask';
import { InitAxios } from './api/HttpCommon';

function App() {

    InitAxios();
    
    return (
        <Layout>
            <Switch>
                <Route exact path='/'> <Home /> </Route>
                <Route path='/tasks/create'> <CreateTask /> </Route>
                <Route path='/tasks/:id/edit'> <EditTask /> </Route>
                <Route path='/tasks'> <TaskList /> </Route>
            </Switch>
        </Layout>
    );
}

export default App;
