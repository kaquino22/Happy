import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './pages/landing';
import OrfanatosMapa from './pages/orfanatosmapa';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/app" component={OrfanatosMapa}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;