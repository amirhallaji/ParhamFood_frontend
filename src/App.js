import './App.css';
import 'antd/dist/antd.css';
import { Component } from 'react';

import { HomePage } from './components/homepage/homepage.component';
import { RegisterPage } from './components/RegisterPage/registerPage.component';
import { Route, Switch } from 'react-router-dom';

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
          <Route exact path="/user-register" component={RegisterPage} />
        </Switch>
      </div>
    )
  }

}

export default App;
