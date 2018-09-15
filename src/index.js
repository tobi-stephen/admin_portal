import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

//COMPONENTS
import Login from './components/login/login';
import Home from './components/home/home';
import Partners from './components/partners/partners';
import CreatePartners from './components/partners/create_partner';
import Settings from './components/settings/settings';
import Users from './components/users/users';
import Admin from './components/users/users_admin';

const App = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}></Route>
                <Route path="/home" component={Home}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/partners" component={Partners}></Route>
                <Route path="/create_partner" component={CreatePartners}></Route>
                <Route path="/settings" component={Settings}></Route>
                <Route path="/users" component={Users}></Route>
                <Route path="/admin_users" component={Admin}></Route>
            </Switch>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));