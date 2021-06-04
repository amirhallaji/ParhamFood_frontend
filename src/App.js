import logo from './logo.svg';
import antd from 'antd';
import './App.css';
import { Component } from 'react';
import { render } from '@testing-library/react';

import {HomePage} from './components/homepage/homepage.component';


class App extends Component {
  constructor() {
    super();

    this.state = {

    }
  }



  render() {
    return (
      <div>
        <HomePage></HomePage>
      </div>
    )
  }

}



export default App;
