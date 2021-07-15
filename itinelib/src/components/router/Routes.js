import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Users from '../Users'


function Routes(props) {
    return (
        <Switch>
            <Route exact path="/user" component={Users}/>
        </Switch>
    );
}
export default Routes;