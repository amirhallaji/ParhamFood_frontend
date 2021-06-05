import './App.css';
import 'antd/dist/antd.css';
import { Component } from 'react';

import { HomePage } from './components/homepage/homepage.component';
import { RegisterPage } from './components/RegisterPage/registerPage.component';
import { UserRegisterPage } from './components/userRegisterPage/userRegisterPage.component';
import { Route, Switch } from 'react-router-dom';
import { ManagerPage } from './components/managerPage/managerPage.component';

class App extends Component {
  constructor() {
    super();

    this.state = {

    }
  }


  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/manager-register" component={RegisterPage} />
          <Route exact path="/user-register" component={UserRegisterPage} />
          <Route exact path="/manager-panel" component={ManagerPage} />
        </Switch>
      </div>
    )
  }

}

export default App;
