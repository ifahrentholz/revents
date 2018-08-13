import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import EventDashboard from '../features/Event/EventDashboard/EventDashboard'
import NavBar from '../features/Nav/NavBar/NavBar'
import EventForm from '../features/Event/EventForm/EventForm';
import SettingsDashboard from '../features/User/Settings/SettingsDashboard';
import UserDetailedPage from '../features/User/UserDetailed/UserDetailedPage';
import PeopleDashboard from '../features/User/PeopleDashboard/PeopleDashboard';
import EventDetailedPage from '../features/Event/EventDetailed/EventDetailedPage';
import HomePage from '../features/Home/HomePage';
import TestComponent from '../features/testarea/TestComponent';

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
        <Route path="/(.+)" render={() => (
          <div>
            <NavBar />
            <Container className="main">
              <Switch>
                <Route path='/events' component={EventDashboard} />
                <Route path='/test' component={TestComponent} />
                <Route path='/event/:id' component={EventDetailedPage} />
                <Route path='/manage/:id' component={EventForm} />
                <Route path='/people' component={PeopleDashboard} />
                <Route path='/profile/:id' component={UserDetailedPage} />
                <Route path='/settings' component={SettingsDashboard} />
                <Route path='/createEvent' component={EventForm} />
              </Switch>
            </Container>
          </div>
        )} />
      </div>

    );
  }
}

export default App;




