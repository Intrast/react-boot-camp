import { Home } from './components/home/Home';
import Layout from './components/Layout';
import { Route, Switch } from 'react-router';
import TaskList from './components/tasks/TaskList';
import CreateTask from './components/tasks/CreateTask';
import EditTask from './components/tasks/EditTask';
import { InitAxios } from './api/HttpCommon';
import { NotFound } from './components/NotFound';
import Login from './components/auth/Login';
import { AuthorizedRoute } from './components/auth/AuthorizedRoute';

function App() {

    InitAxios();
    
    return (
        <Layout>
            <Switch>
                <Route exact path='/'> <Home /> </Route>
                <AuthorizedRoute exact path='/tasks'> <TaskList /> </AuthorizedRoute>
                <AuthorizedRoute path='/tasks/create'> <CreateTask /> </AuthorizedRoute>
                <AuthorizedRoute path='/tasks/:id/edit'> <EditTask /> </AuthorizedRoute>
                <Route path='/login'><Login /></Route>
                <Route path='*'> <NotFound /> </Route>
            </Switch>
        </Layout>
    );
}

export default App;
