import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Users from '../Users'
import Login from'../Login'


function Routes(props) {
    return (
        <Switch>
            <Route exact path="/user" component={Users}/>
            <Route exact path="/login" component={Login}/>
        </Switch>
    );
}
export default Routes;