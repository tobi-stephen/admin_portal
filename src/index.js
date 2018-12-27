import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import * as serviceWorker from './dump/registerServiceWorker';

//COMPONENTS
import Login from './components/login/login';
import Home from './components/home/home';
import Partners from './components/partners/partners';
import CreatePartners from './components/partners/create_partner';
import Settings from './components/settings/settings';
import Users from './components/users/users';
import Admin from './components/users/users_admin';
import PortalReport from './components/report/portal_report';
import RedemptionReport from './components/report/redemption_report';
import BIReport from './components/report/bi_report';

const App = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Login}></Route>
                <Route path="/home" component={Home}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/partners" component={Partners}></Route>
                <Route path="/create_partner" component={CreatePartners}></Route>
                <Route path="/settings" component={Settings}></Route>
                <Route path="/users" component={Users}></Route>
                <Route path="/admin_users" component={Admin}></Route>
                <Route path="/portal_report" component={PortalReport}></Route>
                <Route path="/redemption_report" component={RedemptionReport}></Route>
                <Route path="/BI_report" component={BIReport}></Route>
            </Switch>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();