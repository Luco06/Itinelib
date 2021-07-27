import React from 'react';
import { Route, Switch} from 'react-router-dom';
import { Itinerary} from '../components/index.js'


function Routes(props) {
    return (
        <Switch>
            <Route/>
            <Route exact path="/road" component={Itinerary}/>
        </Switch>
    );
}
export default Routes;