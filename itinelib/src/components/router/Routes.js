import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Users from '../Users'
import Login from'../Login'

import Register from '../Register';


function Routes(props) {
    return (
        <Switch>
            <Route exact path="/user" component={Users}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/inscription" component={Register}/>
        </Switch>
    );
}
export default Routes;