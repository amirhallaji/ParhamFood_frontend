import './App.css';
import 'antd/dist/antd.css';
import { Component } from 'react';

import { HomePage } from './components/homepage/homepage.component';
import { RegisterPage } from './components/RegisterPage/registerPage.component';
import { Main } from './routes';

class App extends Component {
  constructor() {
    super();

    this.state = {

    }
  }


  render() {
    return (
      <div>
        
        <Main />
      </div>
    )
  }

}

export default App;
